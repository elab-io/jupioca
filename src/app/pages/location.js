import React from 'react';
import Layout from '../components/Layout';
import Location from '../components/Location';

import fetch from 'isomorphic-unfetch';


class HomePage extends React.Component {
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