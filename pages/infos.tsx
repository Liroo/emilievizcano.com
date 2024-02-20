import { closeModal, openModal } from 'flux/modal/reducer';
import { getProjects } from 'flux/project/action';
import { useAppDispatch, wrapper } from 'flux/store';
import { useEffect } from 'react';
import { ModalEnum } from 'types/modal';

export default function Infos() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(openModal(ModalEnum.Infos));

    return () => {
      dispatch(closeModal(ModalEnum.Infos));
    };
  }, []);

  return <></>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch<any>(getProjects()).unwrap();

    return {
      props: {},
    };
  },
);
