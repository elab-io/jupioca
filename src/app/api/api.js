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


function get_default_menu() {
    return data.menu;
}


module.exports = { get_store_locations, get_default_menu }