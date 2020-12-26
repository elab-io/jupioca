import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import parse from 'html-react-parser';

import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../components/Layout';
import Navigation from '../../../components/Navigation';
import Masthead from '../../../components/Masthead';
import About from '../../../components/About';
import Services from '../../../components/Services';
import Gallery from '../../../components/Gallery';
import CallToAction from '../../../components/CallToAction';
import Contact from '../../../components/Contact';
import Franchise from '../../../components/Franchise';
import Footer from '../../../components/Footer';
import ShuffleMenu2 from '../../../components/ShuffleMenu2';
import ShuffleMenu from '../../../components/ShuffleMenu';
import Location from '../../../components/Location';
import Job from '../../../components/Job';

// import local data
import data from '../../../data/moge.json';
import api from '../../../api/api';
import next from 'next';

var locations = {};

function Store ({store}) {
  const router = useRouter()
  const { id } = router.query

  function UpdateMasterHeadBackground() {    
    if(store.store_pic) {
      var master_head = document.getElementsByClassName('masthead')[0];
      master_head.style.backgroundImage = "url(" + store.store_pic + ")";
    }
  }

  function AddOperationInfo() {
    
    var about_section = document.getElementById('about');
   
    if(about_section) {
      let hour_list = Object.keys(store.hours).map((index) => {
        return (
          <li key={index}>{index}: {store.hours[index]}</li>
        )
      });

      var store_description = null;
      if(store.description) {
        console.log(store.description);
        store_description = (
          <div className="description">
            { parse(store.description) }
          </div>
        );
      }

      var operate_hours = (
        <div className="hours">
          Open Hours:<br />
          { React.createElement("ul", {className: "hours"}, hour_list) }
          <br />
        </div>
      );

      var store_address = (
        <div className="storeAddress">
          {store.title}<br />
          {store.address}<br />
          {store.phone}<br /><br />
        </div>   
      );

      var socials = null;
      if(Object.keys(store.social).length > 0) {
        let social_list = Object.keys(store.social).map((index) => {
          return (
            <li key={index}><a target="_blank" aria-label="Link to social media" href={store.social[index]}><i className={"fab fa-" + index}></i></a></li>
          )
        });        
        socials = React.createElement("ul", {className: "socials-links"}, social_list);
      } 

      var order_now = null;
      if(store.order_now) {
        order_now = (
          <a href={store.order} rel="noopener" className="btn btn-primary btn-lg" role="button">Order Now</a>
        )
      }



      const content_markup = (
        <>
        <div className="container">
          <div className="text-dark">
            <div className="col-12 text-center">
              <h2 className="text-dark mt-0">About</h2>
              <hr className="divider dark my-4" />

              <div className="row">

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img src="/img/moge/about-us.jpg" alt="About Us" />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 text-dark text-left about-text">
                  {store_description} 
                  {store_address}    
                  {operate_hours}
                  {socials}
                  {order_now}
                </div>
              </div>
            </div>
          </div>
        </div>

        </>
      );


      ReactDOM.render(
        content_markup,
        document.getElementById('about')
      );
    }

    

  }

  useEffect(() => {
    UpdateMasterHeadBackground();
    AddOperationInfo();
    return () => {
      // Clean up the subscription
      // subscription.unsubscribe();
    };
  });

  return (
    <>
        <Layout>
        <Navigation />
        <Masthead />
        <About />
        <ShuffleMenu data={ store } />
        {/* <Location data={ this.props.data } /> */}
        {/* <Services /> */}
        {/* <Gallery data={ this.props.data } /> */}
        <Contact />
        {/* <CallToAction /> */}
        <Job />
        <Franchise />
        <Footer />
        </Layout>
    </>
  )
}


// See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// This function gets called at build time
export async function getStaticPaths() {
    locations = api.get_store_locations();
    const paths = Object.keys(locations).map((key) => ({
            params: { id: locations[key].id },
      }))
    
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  

// This function gets called at build time
export async function getStaticProps({params}) {
    locations = api.get_store_locations();
    const store_id = Object.keys(locations)
        .filter((key)=> {return locations[key].id == params.id})[0];
  
    var store = locations[store_id];
    store.menu = (store.menu) ? store.menu : api.get_default_menu();
    return { props: { store: store } }
}

export default Store