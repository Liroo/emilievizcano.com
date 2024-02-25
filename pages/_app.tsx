import LayoutHome from 'components/layouts/home';
import UIModalList from 'components/ui/modal/list';
import { wrapper } from 'flux/store';
import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { ReactElement, ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';

const brutGrotesque = localFont({
  src: [
    {
      path: '../fonts/BrutGrotesque-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/BrutGrotesque-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/BrutGrotesque-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/BrutGrotesque-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-brut',
});

const romieGrotesque = localFont({
  src: [
    {
      path: '../fonts/Romie-Regular-Italic.otf',
      weight: '400',
    },
  ],
  variable: '--font-romie',
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface PageProps {
  pageProps: {
    id: number;
  };
}

export default function MyApp({
  Component,
  router,
  ...rest
}: Omit<AppPropsWithLayout, 'pageProps'> & PageProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    const onUnload = () => {
      window.sessionStorage.clear();
    };
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, []);

  return (
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={false}>
        <main
          className={`${brutGrotesque.variable} ${romieGrotesque.variable} relative h-full font-sans`}
        >
          <LayoutHome />

          <AnimatePresence mode="wait">
            <Component key={router.pathname} {...props.pageProps} />
          </AnimatePresence>

          <div id="portal-root"></div>
          <UIModalList />
        </main>
      </AnimatePresence>
    </Provider>
  );
}
