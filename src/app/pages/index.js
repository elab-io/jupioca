import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Franchise from '../components/Franchise';
import Footer from '../components/Footer';
import ShuffleMenu from '../js/ShuffleMenu';

import fetch from 'isomorphic-unfetch';


class HomePage extends React.Component {

      static async getInitialProps ({ req, query }) {
        const isServer = !!req

        // if (isServer && !req.headers) {
        //   const baseUrl = 'http://localhost:3000';
        // } else {
        //   const baseUrl = req ? `${(req.connection && req.connection.encrypted ? 'https' : 'http') }://${req.headers.host}` : '';
        // }

        
        const baseUrl = 'http://localhost:3000';

        const res = await fetch(baseUrl + '/static/data/item.json', {
          headers: { Accept: 'application/json' }
        })
        const itemData = await res.json()

        return { data: itemData }

        // console.log('getInitialProps called:', isServer ? 'server' : 'client')

        // if (isServer) {
        //     // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
        //     // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
        //     // it would result in a webpack error.
        //     console.log('my query');
        //     console.log(query);
        //     return { data: query.itemData }
        //   } else {
        //     // On the client, we should fetch the data remotely
        //     const res = await fetch('/_data/item', {
        //       headers: { Accept: 'application/json' }
        //     })
        //     const json = await res.json()
        //     return { data: json }
        //   }
      }
    render(){
        return (
            <>
            <Layout>
            <Navigation />
            <Masthead />
            <About />
            <Services />
            <Portfolio />
            <CallToAction />
            <Contact />
            <ShuffleMenu data={ this.props.data } />
            <Franchise />
            <Footer />
            </Layout>
            </>
        );
    }
}

export default HomePage;