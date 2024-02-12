import LayoutHome from 'components/layouts/home';
import { getProjects } from 'flux/project/action';
import { wrapper } from 'flux/store';
import { ReactElement } from 'react';

export default function Index() {
  return <></>;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <LayoutHome />
      {page}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch<any>(getProjects()).unwrap();

    return {
      props: {},
    };
  },
);
