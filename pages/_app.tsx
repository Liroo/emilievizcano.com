import UIModalList from 'components/ui/modal/list';
import { wrapper } from 'flux/store';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';

const brutGrotesque = localFont({
  src: [
    {
      path: '../fonts/Brut_Grotesque_WEB-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Brut_Grotesque_WEB-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Brut_Grotesque_WEB-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-brut',
});

const romieGrotesque = localFont({
  src: [
    {
      path: '../fonts/Romie-Regular-Italic.otf',
      weight: '400',
      style: 'italic',
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
  ...rest
}: Omit<AppPropsWithLayout, 'pageProps'> & PageProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <main
        className={`${brutGrotesque.variable} ${romieGrotesque.variable} h-full font-sans`}
      >
        {getLayout(<Component {...props.pageProps} />)}
        <UIModalList />
      </main>
    </Provider>
  );
}
