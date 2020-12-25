// Adding a Global Stylesheet
// See: https://nextjs.org/docs/basic-features/built-in-css-support

import '../public/vendor/magnific-popup/magnific-popup.css';
import '../public/css/creative.min.css';
import '../public/vendor/fontawesome-free/css/all.css';

// import '../public/vendor/jquery/jquery.min.js';
// import '../public/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import '../public/vendor/jquery-easing/jquery.easing.min.js';
// import '../public/magnific-popup/jquery.magnific-popup.min.js';
// import '../public/js/creative.min.js';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }