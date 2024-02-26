import LayoutFoundry from 'components/layouts/foundry';
import FoundryLicensesEulaView from 'components/views/foundryLicensesEula';
import { motion, useAnimate } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FoundryLicensesEula() {
  const [scope, animate] = useAnimate();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!url.startsWith('/foundry')) animate(scope.current, { x: '100%' });
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
        <FoundryLicensesEulaView />
      </LayoutFoundry>
    </motion.div>
  );
}
