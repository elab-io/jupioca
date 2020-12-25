import React from 'react';
import Head from 'next/head';

const Layout = (props) => (
  <>
  <div>
    <Head>

    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="" />
    <meta itemProp="name" content="愿茶 MÖGE TEE" />
    <meta name="description" content="Moge TEE is dedicated to create an unique and innovative beverage with well-balanced and rich flavor to present customers the most natural and fresh taste." />
    <meta name="keywords" content="Bubble tea, fruit tea, tea, dirty milk tea, super parfait, 愿茶美國官网,愿茶, 奶茶加盟" />
     <title>愿茶Moge Tee</title>


    <link href="images/favicon.png" rel="shortcut icon" type="image/png" />
    <link href="images/apple-touch-icon.png" rel="apple-touch-icon" />
    <link href="images/apple-touch-icon-72x72.png" rel="apple-touch-iscon" sizes="72x72" />
    <link href="images/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
    <link href="images/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
              
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'/>

    <link rel="icon" href="/img/moge/icon-32.png" sizes="32x32" />
    <link rel="icon" href="/img/moge/icon-192.png" sizes="192x192" />

    </Head>
    <a tabIndex="0" href="#about" className="skip-link">Skip to main content</a>
    <div className="main-content">
      {props.children}
    </div>
  </div>
  

  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

  <script src="/js/creative.min.js"></script>
</>
);

export default Layout;