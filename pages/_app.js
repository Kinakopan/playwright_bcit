import '@/styles/globals.css'
import '@/styles/variables.css'
import Head from 'next/head'

function getAbsolutePath(path) {
  if (path[0] === "/") {
    return path;
  } else {
    return "/" + path;
  }
}


const setTitle = (fileName) => {
  let title;
  if (fileName === "index") {
    title = 'Home';
  } else if (fileName === "about") {
    title = 'About Us';
  } else if (fileName === "contact") {
    title = 'Contact Us';
  }
  return title;
};

export default function App({ Component, pageProps }) {

  const fileName = Component.displayName || Component.name || 'Unknown';

  const title = (fileName.toLowerCase() === 'home') ? 'Home' : setTitle(fileName.toLowerCase());

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content={`Assignment #1 - ${title} Page`}/>
        <meta property="og:description" content="BCIT Digital Design and Development Diploma"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export { setTitle };
