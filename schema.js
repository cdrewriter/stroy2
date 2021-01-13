
require('dotenv').config();
const {
  File,
  Text,
  Slug,
  Relationship,
  Select,
  Password,
  Checkbox,
  DateTime 
} = require('@keystonejs/fields');

const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { userIsAdmin, userIsAdminOrOwner } = require('./utils/access');
const {
  LocalFileAdapter,
  CloudinaryAdapter,
} = require('@keystonejs/file-adapters');
const KeystoneCloudinaryGallery = require('@globobeet/keystone-cloudinary-gallery-field');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { distDir, staticRoute, staticPath } = require('./config');
const dev = process.env.NODE_ENV === 'development';

const avatarFileAdapter = new LocalFileAdapter({
  src: `${staticPath}/avatars`,
  path: `${staticRoute}/avatars`,
});

const cloudadapter = new CloudinaryAdapter({
  cloudName: 'dpiuthi6q',
  apiKey: '195655714938893',
  apiSecret: 'ciavXR0Z0wCiXkhFRAeOAyDewYM',
  folder: 'my-keystone-app',
});

const postImageFileAdapter = new LocalFileAdapter({
  src: `${dev ? '' : `${distDir}/`}${staticPath}/uploads`,
  path: `${staticRoute}/uploads`,
});

const User = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    organization: { type: Text },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
    avatar: { type: File, adapter: avatarFileAdapter },
  },
  access: {
    read: userIsAdminOrOwner,
    update: userIsAdminOrOwner,
    create: userIsAdmin,
    delete: userIsAdmin,
    auth: true,
  },
  labelResolver: (item) => `${item.name} <${item.email}>`,
};

const Main = {
  fields: {
    title: { type: Text, isRequired: true },
    subtext: { type: Wysiwyg },
  },
  labelResolver: (item) => item.title,
};

const About = {
  fields: {
    title: { type: Text, isRequired: true },
    title__text: { type: Text },
    description: { type: Wysiwyg },
    docs: {
      type: CloudinaryImage,
      adapter: cloudadapter,
    },
    photos: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudadapter,
    },
    image: { type: CloudinaryImage, adapter: cloudadapter },
  },
  labelResolver: (item) => item.title,
};

const SmallBuild = {
  fields: {
    title: { type: Text, isRequired: true },
    title__text: { type: Text },
    description: { type: Wysiwyg },
    docs: {
      type: CloudinaryImage,
      adapter: cloudadapter,
    },
    image: { type: CloudinaryImage, adapter: cloudadapter },
  },
  labelResolver: (item) => item.title,
};
const BuildObject = {
  fields: {
    title: { type: Text, isRequired: true },
    description: { type: Wysiwyg },
    images: {
      type: CloudinaryImage,
      adapter: cloudadapter,
    },
    image: { type: CloudinaryImage, adapter: cloudadapter },
  },
  labelResolver: (item) => item.title,
};

const Construction = {
  fields: {
    title: { type: Text },
    url: { type: Slug, from: 'title' },
    subtext: { type: Text },
    description: { type: Wysiwyg },
    items: {
      type: Relationship,
      ref: 'ConstructionItem.category',
      many: true,     
    },
    images: {
      type: CloudinaryImage,
      adapter: cloudadapter,
    },
    image: { type: CloudinaryImage, adapter: cloudadapter },
  },
  labelResolver: (item) => item.title,
};

const ConstructionItem = {
  fields: {
    name: { type: Text },
    subtext: { type: Text },
    description: { type: Wysiwyg }, 
    category: {
      type: Relationship,
      ref: 'Construction.items',
      many: true,     
    },  
    images: {
      type: CloudinaryImage,
      adapter: cloudadapter,
    },   
    image: { type: CloudinaryImage, adapter: cloudadapter },
  },
  labelResolver: (item) => item.name,
};

const ConstructionPortfolio = {
  fields: {
    title: { type: Text, isRequired: true },
    title__text: { type: Text },
    description: { type: Wysiwyg },
    images: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudadapter,
    },
    publishedDate: {
      type: DateTime,
      format: 'DD/MM/YYYY',
      yearRangeFrom: 2018,
      yearRangeTo: 'default',
      yearPickerType: 'auto',
    },
    image: { type: CloudinaryImage, adapter: cloudadapter },
  },
  labelResolver: (item) => item.title,
};
const UslugiPage = {
  fields: {
    title: { type: Text },
    url: { type: Slug, from: 'title', isUnique: true},
    description: { type: Text, isMultiline: true },   
    image: { type: CloudinaryImage, adapter: cloudadapter },
    posts: {
      type: Relationship,
      ref: 'Uslugi',
      many: true,    
    }, 
  },
  
  labelResolver: (item) => item.title,
};
const Uslugi = {
  fields: { 
    name: { type: Text },
    url: { type: Slug, from: 'name', isUnique: true},
    postCategories: {
      type: Relationship,
      ref: 'UslugiPage',
      many: true,    
    },   
    description: {
      type: Text,
      isMultiline: true,    
    },
    content: {
      type: Wysiwyg,
    },    
    image: { type: CloudinaryImage, adapter: cloudadapter },
    images: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudadapter,
    }
  },
  labelResolver: (item) => item.name,
};
const Post = {
  fields: {
    title: { type: Text, isRequired: true },
    slug: { type: Slug, from: 'title', isUnique: true, adminConfig: {
      isReadOnly: true, //slug can be created automatically and you may want to show this as read only
    }, },
    author: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    postCategories: {
      type: Relationship,
      ref: 'PostCategory',
      many: true,
      isRequired: true,
    },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    publishedDate: {
      type: DateTime,
      format: 'DD/MM/YYYY',
    },
    image: {
      type: File,
      adapter: postImageFileAdapter,
      isRequired: true,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.image) {
            await postImageFileAdapter.delete(existingItem.image);
          }
        },
      },
    },
    description: {
      type: Text,
      isMultiline: true,
      isRequired: true,
    },
    content: {
      type: Wysiwyg,
    },
  },
  hooks: {
    afterDelete: async ({ existingItem }) => {
      if (existingItem.image) {
        postImageFileAdapter.delete(existingItem.image);
      }
    },
  },
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: 'title, status, author',
    defaultSort: 'title',
  },
  labelResolver: (item) => item.title,
};

const PostCategory = {
  fields: {
    name: { type: Text, isRequired: true },
    slug: { type: Slug, from: 'name', isUnique: true },
    description: { type: Text, isMultiline: true },
  },
};

const Contact = {
  fields: {
    name: { type: Text },
    email: { type: Text, isRequired: true },
    description: { type: Text, isMultiline: true },
  },
  access: {
    read: userIsAdmin,
    update: userIsAdmin,
    create: true,
    delete: userIsAdmin,
  },
};

module.exports = {
  User,
  About,
  Post,
  SmallBuild,
  Main,
  PostCategory,
  Contact,
  BuildObject,
  Construction,
  ConstructionItem,
  ConstructionPortfolio,
  UslugiPage,
  Uslugi,

};
