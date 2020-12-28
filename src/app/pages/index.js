import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Franchise from '../components/Franchise';
import Footer from '../components/Footer';
import ShuffleMenu from '../components/ShuffleMenu';
import Location from '../components/Location';
import Job from '../components/Job';
import api from '../api/api';


class HomePage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            site_data : api.get_full_site_data()
        };
    }
    render(){
        return (
            <>
            <Layout>
            <Navigation />
            <Masthead data={ this.state.site_data } />
            <About />
            <ShuffleMenu data={ this.state.site_data } />
            <Location data={ this.state.site_data } />
            <Gallery data={ this.state.site_data } />
            <Contact />
            <Job />
            <Franchise />
            <Footer />
            </Layout>
            </>
        );
    }
}

export default HomePage;