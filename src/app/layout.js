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
          <meta
            name="description"
            content="Інтернет-магазин промислових фарбових пігментів у порошках, рідкій та гранульованій формі. Великий асортимент промислових фарбових матеріалів для виробництва та інших промислових потреб."
          />
          <meta
            name="keywords"
            content="промислові фарбові пігменти, порошкові фарби, рідкі фарби, гранульовані фарби, промислові матеріали"
          />

          <meta
            property="og:description"
            content="Інтернет-магазин промислових фарбових пігментів різних видів для виробництва та промислових потреб. Великий асортимент промислових фарбових матеріалів."
          />
          <meta property="og:image" content="/for-shop.png" />
          <meta property="og:type" content="website" />
        </Head>

        <body className={roboto.className}>
          <CallOfCurrentUser>
            <ProvaiderToastContainer />
            <Header />
            <main>{children}</main>
            <BtnUpDown/>
          </CallOfCurrentUser>
        </body>
      </html>
    </ReduxProvider>
  );
}
