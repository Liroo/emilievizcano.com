import LayoutFoundry from 'components/layouts/foundry';
import FoundryView from 'components/views/foundry';
import { getProjects } from 'flux/project/action';
import { wrapper } from 'flux/store';

import { motion } from 'framer-motion';

export default function Foundry() {
  return (
    <motion.div
      initial={{
        x:
          typeof window !== 'undefined' && window.sessionStorage.getItem('ev')
            ? '100%'
            : 0,
      }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ ease: 'easeInOut' }}
      className="fixed left-0 top-0 z-40 h-full w-full bg-[#E8E8E8]"
    >
      <LayoutFoundry>
        <FoundryView />
      </LayoutFoundry>
    </motion.div>
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
