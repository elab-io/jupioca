import data from '../data/moge.json';


function get_store_locations() {
    let locations = [];
    data.locations.map((location)=>{
        location['group-items'].map((store)=>{
            locations[store.id] = store;
        });
    });

    return locations;
}


module.exports = { get_store_locations }