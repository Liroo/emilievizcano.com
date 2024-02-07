import HomeView from 'components/views/home';
import { getAllProjects, getClient } from 'lib/sanity.client';
import { Project } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';

interface PageProps {
  projects: Project[];
}

interface Query {
  [key: string]: string;
}

export default function Page(props: PageProps) {
  const { projects } = props;

  return <HomeView projects={projects} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const client = getClient();

  const [projects = []] = await Promise.all([getAllProjects(client)]);

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
};
