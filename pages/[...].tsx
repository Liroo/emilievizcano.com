import { getProjects } from 'flux/project/action';
import { wrapper } from 'flux/store';

export default function Index() {
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
