export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6295eeacc527072698406766',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hvvbfv36',
                  apiId: 'fc63eb22-64c9-47ec-8b50-bd489bade070'
                },
                {
                  buildHookId: '6295eeacef6ded2f37f672d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7gtvndca',
                  apiId: 'a46a53bc-db89-4332-9b6f-88f7db4afa3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/msphanith/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7gtvndca.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
