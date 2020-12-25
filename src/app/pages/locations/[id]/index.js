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

console.log(store);
  return (
    <>
        <p>{store.id}</p>
        <p>{store.title}</p>
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