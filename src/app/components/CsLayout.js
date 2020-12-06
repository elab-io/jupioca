import React from 'react';
import Head from 'next/head';

const CsLayout = (props) => (
  <>
  {/* <div> */}
    <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    {/* <meta name="author" content="" /> */}
    {/* <meta itemprop="name" content="愿茶 MÖGE TEE" /> */}
    <meta name="description" content="Moge TEE USA愿茶官网" />
    <meta name="keywords" content="Moge TEE USA愿茶官网" />
     <title>愿茶Moge Tee USA</title>

     <style jsx>{`
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  background-color: black;
  display: table;
}
#__next, .centered-text {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  color: white;
}

img {
  border-radius: 50%;
}
    `}</style>


    </Head>
    
    {/* <div className="main-content"> */}
      {props.children}
    {/* </div> */}
  {/* </div> */}


  
</>
);

export default CsLayout;