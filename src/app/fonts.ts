import localFont from 'next/font/local';

export const champagne = localFont({
  src: [
    {
      path: './fonts/ChampagneLimousines-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ChampagneLimousines-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ChampagneLimousines-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-champagne',
  display: 'swap',
});