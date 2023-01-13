import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page:JSX.Element) => JSX.Element;
}

type AppPropWithLayout= AppProps &{
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  //return <Component {...pageProps} />;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
