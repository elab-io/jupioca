import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
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
    console.log(store);
    var about_section = document.getElementById('about');
    if(about_section) {
      let hours = Object.keys(store.hours).map((index) => {
        return (
          <li key={index}>{index}: {store.hours[index]}</li>
        )
      });

      let operate_hours = React.createElement("ul", {className: "hours"}, hours);


      var socials = null;
      if(Object.keys(store.social).length > 0) {
        let social_list = Object.keys(store.social).map((index) => {
          return (
            <li key={index}><a target="_blank" aria-label="Link to social media" href={store.social[index]}><i className={"fab fa-" + index}></i></a></li>
          )
        });        
        socials = React.createElement("ul", {className: "socials-links"}, social_list);
      } 


      const element = (
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
                  
                  <div className="storeAddress">
                    {store.title}<br />
                    {store.address}<br />
                    {store.phone}
                  </div>        
                  <br /><br />
                  <div className="hours">
                    Open Hours:<br />
                    {operate_hours}
                  </div>

                  {socials}

                </div>
              </div>
            </div>
          </div>
        </div>

        </>
      );


      // about_section.appendChild(operations);

      // var about = ReactDOM.createElement(<p></p>);

      console.log(about_section.innerHTML);
      ReactDOM.render(
        element,
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
        {/* <ShuffleMenu data={ this.props.data } /> */}
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
    const store = Object.keys(locations)
        .filter((key)=> {return locations[key].id == params.id})[0];
   
    return { props: { store: locations[store] } }
}

export default Store