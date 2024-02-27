import { groq } from 'next-sanity';

const projectFields = groq`
  _id,
  title,
  shortTitle,
  titleSs01Map,
  _updatedAt,
  description,
  thumbnail,
  gallery,
  archive,
  tags,
  type,
  project,
  role,
  workingAs,
  "slug": slug.current,
`;

export const indexQuery = groq`
*[_type == "project"] | order(orderRank) {
  ${projectFields}
}`;

export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`;

export interface Project {
  _id: string;
  _updatedAt: string;
  title?: string;
  shortTitle?: string;
  titleSs01Map?: string;
  slug?: any;
  description?: any;
  thumbnail?: any;
  gallery?: any[];
  archive?: boolean;
  tags?: any;
  type?: any;
  project?: any;
  role?: any;
  workingAs?: any;
}
