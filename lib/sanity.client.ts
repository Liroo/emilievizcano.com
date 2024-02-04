import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from 'lib/sanity.api'
import {
  indexQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  type Project,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

export function getClient(): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    studioUrl,
  })
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getAllProjects(client: SanityClient): Promise<Project[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getAllProjectsSlugs(): Promise<Pick<Project, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(projectSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getProjectBySlug(
  client: SanityClient,
  slug: string,
): Promise<Project> {
  return (await client.fetch(projectBySlugQuery, { slug })) || ({} as any)
}
