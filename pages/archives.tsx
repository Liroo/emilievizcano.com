import { getProjects } from 'flux/project/action';
import { wrapper } from 'flux/store';
import { motion } from 'framer-motion';

export default function Archives() {
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-black"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    ></motion.div>
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
