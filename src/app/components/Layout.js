import React from 'react';
import Head from 'next/head';

const Layout = (props) => (
  <>
  <div>
    <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />

     <title>Jupioca - Juice & Acai Bowl Shop in NYC | Delivery, Takeout</title>

<link href="/static/test.css" rel="stylesheet" />
    <link href="/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />

    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'/>

    <link href="/static/vendor/magnific-popup/magnific-popup.css" rel="stylesheet"/>

    <link href="/static/css/creative.min.css" rel="stylesheet"/>

    </Head>
    
    <div className="main-content">
      {props.children}
    </div>
  </div>


  
  <script src="/static/vendor/jquery/jquery.min.js"></script>
  <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <script src="/static/vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="/static/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

  <script src="/static/js/creative.min.js"></script>
</>
);

export default Layout;