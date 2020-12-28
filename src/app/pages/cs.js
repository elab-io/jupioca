import React from 'react';
import CsLayout from '../components/CsLayout';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Franchise from '../components/Franchise';
import Footer from '../components/Footer';
import ComingSoon from '../components/Cs';

import fetch from 'isomorphic-unfetch';


class ComingSoonPage extends React.Component {

  static async getInitialProps({ req, query }) {
    const isServer = !!req

    // console.log('getInitialProps called:', isServer ? 'server' : 'client')


    // const res = await fetch('https://raw.githubusercontent.com/elab-io/jupioca/master/src/app/data/item.json', {
    //   headers: { Accept: 'application/json' }
    // })
    // const json = await res.json()
    // return { data: json }


    if (isServer) {
      // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
      // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
      // it would result in a webpack error.
      // return { data: query.itemData }
      return {};
    } else {
      // On the client, we should fetch the data remotely
      // const res = await fetch('/_data/item', {
        // headers: { Accept: 'application/json' }
      // })
      // const json = await res.json()
      // return { data: json }
      return {};
    }
  }
  render() {
    return (
      <>
        <CsLayout>
          <ComingSoon />
        </CsLayout>
      </>
    );
  }
}

export default ComingSoonPage;