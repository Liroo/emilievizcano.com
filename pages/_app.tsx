import localFont from 'next/font/local';
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

import useCssMobileHeight from 'hooks/useCssMobileHeight';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps<{}>) {
  useCssMobileHeight();

  return (
    <main
      className={`${brutGrotesque.variable} ${romieGrotesque.variable} h-full font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
