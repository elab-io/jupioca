import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';
import StoreNavigation from '../../../components/StoreNavigation';
import Contact from '../../../components/Contact';
import Franchise from '../../../components/Franchise';
import Footer from '../../../components/Footer';
import ShuffleMenu from '../../../components/ShuffleMenu';
import Location from '../../../components/Location';
import Job from '../../../components/Job';
import StoreInfo from '../../../components/StoreInfo';
import AppInfo from '../../../components/AppInfo';

// import local data
import api from '../../../api/api';

var locations = {};

function Store ({store, location_list}) {
  const router = useRouter()
  const { id } = router.query
// console.log(store.meta);
  function UpdateMasterHeadBackground() {    
    if(store.store_pic) {
      var master_head = document.getElementsByClassName('masthead')[0];
      master_head.style.backgroundImage = "url(" + store.store_pic + ")";
    }
  }

  function MakeNavScrolledEffect() {
    var main_nav = document.getElementById('mainNav');
    main_nav.style.backgroundColor = "#fff";
    
    var nav_items = document.querySelectorAll(".navbar-nav .nav-item a")
    for (var i = 0; i < nav_items.length; i++) {
      nav_items[i].style.color ="black";
    }
  }

  function AddMetadata() {
    var head = document.getElementsByTagName('head')[0];

    if(store.meta) {
      Object.keys(store.meta).map((key)=>{
        let meta = document.createElement('meta');
        meta.setAttribute(key,store.meta[key]);
        head.appendChild(meta);
      });
    }
  }

   function UpdatePageTitle() {
     let title = document.getElementsByTagName('title')[0];
    title.innerHTML = title.innerHTML +  " - " + store.title;
   } 
  useEffect(() => {
    // UpdateMasterHeadBackground();
    MakeNavScrolledEffect();
    AddMetadata();
    UpdatePageTitle();
    return () => {
      // Clean up the subscription
      // subscription.unsubscribe();
    };
  });

  return (
    <>
        <Layout>
        <StoreNavigation />
        <StoreInfo data={store} />
        <ShuffleMenu data={ store } />
        <AppInfo />
        <Contact />
        <Job />
        <Franchise />
        <Location data={ location_list } />
        <Footer />
        </Layout>
    </>
  )
}


// See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// This function gets called at build time
export async function getStaticPaths() {
    locations = api.get_store_locations();
    // console.log(locations);
    const paths = Object.keys(locations).map((key) => ({
        params: { 
          // note: you have to provide 'id' as key, otherwise nextjs will complain
          id: (locations[key].store_url ? locations[key].store_url : '/'),
        },
      }))
    
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  

// This function gets called at build time
export async function getStaticProps({params}) {
    locations = api.get_store_locations();
    const store_id = Object.keys(locations)
        .filter((key)=> {return locations[key].store_url == params.id})[0];
  
    var store = locations[store_id];
    store.menu = (store.menu) ? store.menu : api.get_default_menu();
    // store.menu = api.get_default_menu();
    // var site_data= api.get_full_site_data();    
    var location_list= api.get_location_list();    
    
    return { props: { store: store, location_list: location_list } }
}

export default Store