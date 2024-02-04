import { BillIcon } from '@sanity/icons'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { structureTool } from 'sanity/structure'
import projectType from 'schemas/project'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Emilie Vizcano'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    types: [projectType],
  },
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({
              type: 'project',
              title: 'Projects',
              icon: BillIcon,
              id: 'orderable-projects',
              S,
              context,
            }),
          ])
      },
    }),
    unsplashImageAsset(),
    // The remaining plugins are only loaded in dev mode
    process.env.NODE_ENV !== 'production' && debugSecrets(),
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV !== 'production' &&
      visionTool({ defaultApiVersion: apiVersion }),
  ],
})
