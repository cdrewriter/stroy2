
const {
  File,
  Text,
  Slug,
    Integer,
  Relationship,
  Select,
  CalendarDay,
  Password,
  Checkbox,
  DateTime 
} = require('@keystonejs/fields');
const { LocationGoogle } = require('@keystonejs/fields-location-google');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { userIsAdmin, userIsAdminOrOwner } = require('./app/utils/access');
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
const Files = new LocalFileAdapter({
  src: `${staticPath}/files`,
  path: `${staticRoute}/files`,
});
const cloudinaryAdapter  = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'stroy',
});

const postImageFileAdapter = new LocalFileAdapter({
  src: `${dev ? '' : `${distDir}/`}${staticPath}/uploads`,
  path: `${staticRoute}/uploads`,
});


///new

const Uslugi = {
  fields: {
    name: { type: Text },
    subName: { type: Text },
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
    descriptionShort: {
      type: Text,
      isMultiline: true,
    },
    price: {
      type: Integer
    },
    content: {
      type: Wysiwyg,
    },
    features: {
      type: Relationship,
      ref: 'Feature',
      many: true,
    },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter  },
    images: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudinaryAdapter ,
    }
  },
  labelResolver: (item) => item.name,
};
const Feature = {
  fields: {
    name: { type: Text },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter  },
    description: {
      type: Text,
      isMultiline: true,
    },
    },
    labelResolver: (item) => item.name,
};


const options = [
  { value: 1, label: "Толщина мм 150",  },
  { value: 2, label: "Толщина мм 200", },
  { value: 3, label: "Толщина мм 250" },
];

const Material = {
  fields: {
    name: {
      type: Text
    },
    subName: { type: Text },
    image: {
      type: CloudinaryImage,
      adapter: cloudinaryAdapter
    },
    image: {
      type: File,
      adapter: Files,
    },
    descriptionShort: {
      type: Text,
      isMultiline: true,
    },
    price: {
      type: Integer
    },
    matProperties:  { type: Select, options, dataType: 'integer' },


  },
  labelResolver: (item) => item.name,
}
const CategoryPage = {
  fields: {
    title: { type: Text },
    subTitle: { type: Text },
    url: { type: Slug, from: 'title', isUnique: true},
    description: {
      type: Text,
      isMultiline: true
    },
    image: {
      type: CloudinaryImage,
      adapter: cloudinaryAdapter
    },
    images: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudinaryAdapter ,
    },
    features: {
      type: Relationship,
      ref: 'Feature',
      many: true,
    },
  },
  labelResolver: (item) => item.title,
}
const Page = {
  fields: {
    title: { type: Text },
    url: { type: Slug, from: 'title', isUnique: true},
    subTitle: { type: Text },
    description: {
      type: Text,
      isMultiline: true
    },
    image: {
      type: CloudinaryImage,
      adapter: cloudinaryAdapter
    },
    images: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudinaryAdapter ,
    },
    features: {
      type: Relationship,
      ref: 'Feature',
      many: true,
    },
    jobIsDone: {
      type: DateTime,
      format: 'yyyy',
      yearRangeFrom: 1901,
      yearRangeTo: 2018,
      yearPickerType: 'auto',
    },
    posts: { type: Relationship, ref: 'CategoryPage', many: true },

    type: { type: Select, options: 'main, box, contentAside, content, category, item' },
  },
  labelResolver: (item) => item.title,
}


const Contact = {
  fields: {
    name: { type: Text },
    url: { type: Slug, from: 'name' },
    email: { type: Text, isRequired: true },
    description: { type: Text, isMultiline: true },
    map: { type: Text, isMultiline: true },
    adressText:  { type: Text },
    phones: { type: Text, isMultiline: true },
    phone: { type: Text},

  },
  labelResolver: (item) => item.name,
  access: {
    read: userIsAdmin,
    update: userIsAdmin,
    create: true,
    delete: userIsAdmin,
  },

};

///Old
const User = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    organization: { type: Text },
    isAdmin: { type: Checkbox },
    phone: { type: Text},
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
      adapter: cloudinaryAdapter ,
    },
    photos: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudinaryAdapter ,
    },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter  },
  },
  labelResolver: (item) => item.title,
};


const ConstructionPortfolio = {
  fields: {
    title: { type: Text, isRequired: true },
    title__text: { type: Text },
    description: { type: Wysiwyg },
    square: {
      type: Text
    },
    levels: {
      type: Text
    },
    bedrooms: {
      type: Text
    },
    bathrooms: {
      type: Text
    },
    images: {
      type: KeystoneCloudinaryGallery,
      adapter: cloudinaryAdapter ,
    },
    publishedDate: {
      type: DateTime,
      format: 'DD/MM/YYYY',
      yearRangeFrom: 2018,
      yearRangeTo: 'default',
      yearPickerType: 'auto',
    },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter  },
  },
  labelResolver: (item) => item.title,
};
const UslugiPage = {
  fields: {
    title: { type: Text },
    url: { type: Slug, from: 'title', isUnique: true},
    description: { type: Text, isMultiline: true },   
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter  },
    posts: {
      type: Relationship,
      ref: 'Uslugi',
      many: true,    
    }, 
  },
  
  labelResolver: (item) => item.title,
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

module.exports = {
  User,
  About,
  Post,
  Main,
  PostCategory,
  Contact,
  ConstructionPortfolio,
  UslugiPage,
  Uslugi,
  Feature,
  CategoryPage,
  Material,
  Page
};
