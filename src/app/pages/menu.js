import React from 'react';
import Layout from '../components/Layout';
import ShuffleMenu from '../components/ShuffleMenu';

import fetch from 'isomorphic-unfetch';


class HomePage extends React.Component {

    render(){
        return (
            <>
            <Layout>
              <ShuffleMenu data={ this.props.data } />
            </Layout>
            </>
        );
    }
}

export default HomePage;