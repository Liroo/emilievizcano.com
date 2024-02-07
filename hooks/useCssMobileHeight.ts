import { useEffect } from 'react';

const useCssMobileHeight = () => {
  useEffect(() => {
    const setCssVar = function () {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setCssVar();
    window.addEventListener('resize', setCssVar);
    return () => window.removeEventListener('resize', setCssVar);
  }, []);
};

export default useCssMobileHeight;
