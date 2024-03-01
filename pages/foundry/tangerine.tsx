import LayoutFoundry from 'components/layouts/foundry';

import TangerineView from 'components/views/froundryTangerine';
import { getProductByHandle } from 'flux/product/action';
import { wrapper } from 'flux/store';
import { motion, useAnimate } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FoundryTangerine() {
  const [scope, animate] = useAnimate();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!url.startsWith('/foundry'))
        animate(scope.current, { x: '100%' }, { ease: 'easeInOut' });
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <motion.div
      ref={scope}
      initial={{
        x:
          typeof window !== 'undefined' &&
          window.sessionStorage.getItem('ev') &&
          !window.sessionStorage.getItem('ev').startsWith('/foundry')
            ? '100%'
            : 0,
      }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeInOut' }}
      className="fixed left-0 top-0 z-40 h-full w-full bg-[#E8E8E8]"
    >
      <LayoutFoundry>
        <TangerineView />
      </LayoutFoundry>
    </motion.div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store
      .dispatch<any>(getProductByHandle({ handle: 'lapicide' }))
      .unwrap();

    return {
      props: {},
    };
  },
);
