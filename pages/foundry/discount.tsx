import LayoutFoundry from 'components/layouts/foundry';
import LayoutFoundryFooter from 'components/layouts/foundry/footer';
import { motion, useAnimate } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FoundryDiscount() {
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
    <>
      <NextSeo title="Emilie Vizcano - Discount" />
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
          <div></div>
          <LayoutFoundryFooter />
        </LayoutFoundry>
      </motion.div>
    </>
  );
}
