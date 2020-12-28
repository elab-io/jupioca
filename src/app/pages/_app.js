// Adding a Global Stylesheet
// See: https://nextjs.org/docs/basic-features/built-in-css-support

import '../public/vendor/magnific-popup/magnific-popup.css';
import '../public/css/creative.min.css';
import '../public/css/default-override.css';
import '../public/vendor/fontawesome-free/css/all.css';

import '../public/scss/site.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }