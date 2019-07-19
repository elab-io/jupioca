import React from 'react';
import Layout from '../components/Layout';
import Location from '../components/Location';

import fetch from 'isomorphic-unfetch';


class HomePage extends React.Component {

      static async getInitialProps ({ req, query }) {
        const isServer = !!req
    
        console.log('getInitialProps called:', isServer ? 'server' : 'client')

        if (isServer) {
            // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
            // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
            // it would result in a webpack error.
            return { data: query.itemData }
          } else {
            // On the client, we should fetch the data remotely
            const res = await fetch('/_data/item', {
              headers: { Accept: 'application/json' }
            })
            const json = await res.json()
            return { data: json }
          }
      }
    render(){
        return (
            <>
            <Layout>
              <Location data={ this.props.data } />
            </Layout>
            </>
        );
    }
}

export default HomePage;