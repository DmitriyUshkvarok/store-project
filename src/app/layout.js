import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '../components/Header/Header';
import Head from 'next/head';
import ReduxProvider from '../redux/ReduxProvider/ReduxProvider';
import ProvaiderToastContainer from '../components/ToastContainer/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';
import CallOfCurrentUser from '../components/CallOfCurrentUser/CallOfCurrentUser';
import BtnUpDown from '../components/BtnUpDown/BtnUpDown';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'Shop | Home',
  description:
    'Інтернет-магазин промислових фарбових пігментів у порошках, рідкій та гранульованій формі. Великий асортимент промислових фарбових матеріалів для виробництва та інших промислових потреб.',
  keywords: [
    'промислові фарбові пігменти',
    'порошкові фарби',
    'JavaScript',
    'рідкі фарби',
    'гранульовані фарби',
    'промислові матеріали',
  ],
  authors: [
    { name: 'Dmitriy Ushkvarok' },
    { name: 'Oleh Paslavskiy' },
    { name: 'Anastasiia Hudymenko' },
    { name: 'Vitalii Nozhenko' },
    { name: 'Anastasiia Kor' },
  ],
  openGraph: {
    images: '/for-shop.png',
    type: 'website',
    siteName: 'Хімбрук',
    description:
      'Інтернет-магазин промислових фарбових пігментів різних видів для виробництва та промислових потреб. Великий асортимент промислових фарбових матеріалів.',
  },
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="uk">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <body className={roboto.className}>
          <CallOfCurrentUser>
            <ProvaiderToastContainer />
            <Header />
            <main>{children}</main>
            <BtnUpDown />
          </CallOfCurrentUser>
        </body>
      </html>
    </ReduxProvider>
  );
}
