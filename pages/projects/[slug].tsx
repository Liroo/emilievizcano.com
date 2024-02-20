import { closeModal, openModal } from 'flux/modal/reducer';
import { getProjects } from 'flux/project/action';
import { useAppDispatch, wrapper } from 'flux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ModalEnum } from 'types/modal';

export default function Project() {
  const dispatch = useAppDispatch();
  const { slug } = useRouter().query;

  useEffect(() => {
    dispatch(openModal(ModalEnum.Project, { data: { slug } }));

    return () => {
      dispatch(closeModal(ModalEnum.Project));
    };
  }, []);

  return <></>;
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
