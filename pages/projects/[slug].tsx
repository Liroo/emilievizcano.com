import { closeModal, openModal } from 'flux/modal/reducer';
import { getProjects } from 'flux/project/action';
import { selectProjectBySlug } from 'flux/project/selector';
import { useAppDispatch, useAppSelector, wrapper } from 'flux/store';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ModalEnum } from 'types/modal';

export default function Project() {
  const dispatch = useAppDispatch();
  const { slug } = useRouter().query;
  const project = useAppSelector(selectProjectBySlug(slug as string));

  useEffect(() => {
    dispatch(openModal(ModalEnum.Project, { slug }));

    return () => {
      dispatch(closeModal(ModalEnum.Project));
    };
  }, []);

  return (
    <>
      <NextSeo title={`Emilie Vizcano - ${project.title}`} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      let { slug } = query;

      await store.dispatch<any>(getProjects()).unwrap();

      const projects = store.getState().project.projects;
      const project = projects.find((p) => p.slug === slug);

      if (!project)
        return {
          notFound: true,
        };

      return {
        props: {},
      };
    },
);
