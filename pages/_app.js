import Head from "next/head";

import "../styles/index.css";
import "../node_modules/@fortawesome/fontawesome-pro/css/all.css";

function MyApp({ Component, pageProps }) {
  const description =
    "Hi, I'm Peter Marshall. I work extensively with B2B and B2C companies based in the US and the EU creating blogs, whitepapers, reports, web copy, and much more besides.";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
        <title>
          Peter Marshall | Freelance Journalist, Copywriter, Proof Reader
        </title>
        <link
          rel="shortcut icon"
          href="https://petermarshallportfolio.com/favicon.ico"
        />
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content="React Engineer & Startup Founder | Alex Jack Hughes"
        />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://petermarshallportfolio.com/" />
        <meta
          property="og:image"
          content="https://petermarshallportfolio.com/template.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
