import { getClient, getProjectBySlug } from 'lib/sanity.client';
import { Project } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';

interface PageProps {
  project: Project;
}

interface Query {
  [key: string]: string;
}

export default function ProjectSlugRoute(props: PageProps) {
  const { project } = props;

  console.log(project);

  return <div />;
}

export const getServerSideProps: GetStaticProps<PageProps, Query> = async (
  ctx,
) => {
  const client = getClient();

  const project = await getProjectBySlug(client, ctx.params.slug as string);

  if (!project || !project.slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
