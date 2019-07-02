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


class HomePage extends React.Component {
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
            <ShuffleMenu />
            <Franchise />
            <Footer />
            </Layout>
            </>
        );
    }
}

export default HomePage;