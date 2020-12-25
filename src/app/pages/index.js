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



class HomePage extends React.Component {

    render(){
        return (
            <>
            <Layout>
            <Navigation />
            <Masthead />
            <About />
            <ShuffleMenu data={ this.props.data } />
            <Location data={ this.props.data } />
            {/* <Services /> */}
            <Gallery data={ this.props.data } />
            <Contact />
            {/* <CallToAction /> */}
            <Job />
            <Franchise />
            <Footer />
            </Layout>
            </>
        );
    }
}

export default HomePage;