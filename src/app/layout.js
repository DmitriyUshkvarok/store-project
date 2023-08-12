import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '../components/Header/Header';
import Head from 'next/head';
import ReduxProvider from '../redux/ReduxProvider/ReduxProvider';
import ProvaiderToastContainer from '../components/ToastContainer/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'Shop | Home',
  description: 'Generated by create next app',
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
          <ProvaiderToastContainer />
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ReduxProvider>
  );
}
