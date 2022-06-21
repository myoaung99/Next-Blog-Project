import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Myo&apos; Blog</title>
        <meta
          name="description"
          content="Myo Myint Aung's blog website that feature frontend framework like React JS and Next JS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
