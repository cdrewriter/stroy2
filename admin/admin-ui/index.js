import { CreateItem } from '@keystonejs/app-admin-ui/components';
export default {
    pages: () => {
        return [
            {
                label: 'Главная',
                children:  [{ listKey: 'Post' }, { label: 'Categories', listKey: 'PostCategory' }],
            },
            {
                label: 'Blog',
                children: [{ listKey: 'Post' }, { label: 'Categories', listKey: 'PostCategory' }],
            },
            {
                label: 'People',
                children: ['User'],
            },
            {
                label: 'Contacts',
                children: ['Contact'],
            },
        ];
    },
    // re-implement the default create item button + custom text
    listHeaderActions: () => (
        <div>
            <CreateItem />
            <p>Hello world</p>
        </div>
    ),
};
