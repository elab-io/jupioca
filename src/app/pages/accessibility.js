import React from 'react';
import CsLayout from '../components/CsLayout';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Franchise from '../components/Franchise';
import Footer from '../components/Footer';
import ComingSoon from '../components/Cs';

import fetch from 'isomorphic-unfetch';


class AccessibilityPage extends React.Component {


  static async getInitialProps({ req, query }) {
    const isServer = !!req

    if (isServer) {
      return {};
    } else {
      return {};
    }
  }

  render() {
    var divStyle = {
      textAlign: 'center',
      display: 'block'
      // display: block
      // ,
      // backgroundImage: 'url(' + imgUrl + ')',
      // WebkitTransition: 'all', // note the capital 'W' here
      // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };

    return (
      <>
        <div>
          <p>
            <a href="/" style={divStyle}>
            <img src="/img/moge/logo.png" height="80" alt="company logo" />
            </a>
            </p>
            <h1>ACCESSIBILITY</h1>
            <p>Moge Tee USA Franchising LLC is committed to making its website usable by all people by meeting the requirements of the Web Content Accessibility Guidelines 2.0 Level AA (WCAG 2.0 AA). Please be aware that our efforts are ongoing as our current website provider implements the relevant improvements to meet WCAG 2.0 AA guidelines over time. If you need assistance in using the processes found within this site, please contact us at terrence@motegeeusa.com .</p>

            <p>If you do encounter an accessibility issue, please be sure to specify the Web page and we will make all reasonable efforts to make that page accessible.</p>


            {/* <Footer /> */}
        </div>
      </>
        );
      }
    }
    
export default AccessibilityPage;
