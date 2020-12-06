import React from 'react';
import CsLayout from '../components/CsLayout';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Franchise from '../components/Franchise';
import Footer from '../components/Footer';
import ComingSoon from '../components/Cs';

import fetch from 'isomorphic-unfetch';


class ThankYouPage extends React.Component {


  static async getInitialProps({ req, query }) {
    const isServer = !!req

    if (isServer) {
      return {};
    } else {
      return {};
    }
  }

  render() {
    return (
      <>
        <div>
          <p>
            <a href="/">
            <img src="/static/img/moge/logo.png" height="40" alt="company logo" />
            </a>
            </p>
            <h2>Thank you for your interest, we have received your form and we will contact you soon.</h2>
        </div>
      </>
        );
      }
    }
    
export default ThankYouPage;
