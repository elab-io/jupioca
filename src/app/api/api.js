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

// Don't confuse this with the get_store_locations().
// This returns the locations objects with properties (groupd-name etc.) for rendering the 
// location components.
function get_full_site_data() {
    return data;
}

module.exports = { get_store_locations, get_default_menu, get_full_site_data }