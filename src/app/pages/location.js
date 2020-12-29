import React from 'react';
import Layout from '../components/Layout';
import Location from '../components/Location';
import api from '../api/api'
import fetch from 'isomorphic-unfetch';


class HomePage extends React.Component {
    render(){
        return (
            <>
            <Layout>
              <Location data={ api.get_full_site_data() } />
            </Layout>
            </>
        );
    }
}

export default HomePage;