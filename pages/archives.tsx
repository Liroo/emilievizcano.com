import { closeModal, openModal } from 'flux/modal/reducer';
import { getProjects } from 'flux/project/action';
import { useAppDispatch, wrapper } from 'flux/store';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { ModalEnum } from 'types/modal';

export default function Archives() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(openModal(ModalEnum.Archives));

    return () => {
      dispatch(closeModal(ModalEnum.Archives));
    };
  }, []);

  return (
    <>
      <NextSeo title="Emilie Vizcano - Archives" />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch<any>(getProjects()).unwrap();

    return {
      props: {},
    };
  },
);
