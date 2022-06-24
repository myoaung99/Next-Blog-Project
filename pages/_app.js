import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { motion, AnimatePresence } from "framer-motion";

const pageVarients = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { type: "linear" } },
  exit: { x: -500, transition: { type: "tween" } },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout />
      <Head>
        <title>Myo&apos; Blog</title>
        <meta
          name="description"
          content="Myo Myint Aung's blog website that feature frontend framework like React JS and Next JS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={router.pathname}
          variants={pageVarients}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
