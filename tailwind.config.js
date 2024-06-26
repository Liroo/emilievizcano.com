/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-brut)'],
        romie: ['var(--font-romie)'],
        korosu: ['var(--font-korosu)'],
        tangerine: ['var(--font-tangerine)'],
        lapicide: ['var(--font-lapicide)'],
      },
      zIndex: {
        60: 60,
      },
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1440px',
      'pointer-fine': { raw: '(pointer: fine)' },
      'pointer-coarse': { raw: '(pointer: coarse)' },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
