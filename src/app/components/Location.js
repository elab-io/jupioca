import React from 'react';
import Shuffle from 'shufflejs';
import localData from '../data/item.json';

class Location extends React.Component {
    constructor(props) {
        super();
        this.categoryButtons = '#locations .filter-group li a';
        this.shuffleGrid = '#locations #shuffle-grid-location';
        this.itemSelector = '#locations .category';
        this.sizer = '#locations .sizer';
        this.state = {
            'locations': (typeof props.data !== 'undefined') ? props.data.locations : localData.locations                       
        };
    }

    componentDidMount() {

        this.addCategoryButtonEventListener();

        // Initialize shufflejs
        const grid = document.querySelector(this.shuffleGrid);
        this.shuffle = new Shuffle(grid, {
            itemSelector: this.itemSelector,
            sizer: this.sizer,
            group: this.setDefaultGroup()
        });
    }


    addCategoryButtonEventListener() {
        // Set up listener for buttons
        var allCategoryButtons = document.querySelectorAll(this.categoryButtons);
            
        allCategoryButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                this.setItemActiveState(e.target);
                this.shuffle.filter(e.target.dataset.filter);
            });
        });

        // on Tab key up event        
        allCategoryButtons.forEach((button) => {
            button.addEventListener('keyup', (e) => {
                if( e.which == 9 ) {
                    this.setItemActiveState(e.target);
                    this.shuffle.filter(e.target.dataset.filter);
                }
            });
        });
    }

    setDefaultGroup() {

        let defaultGroup = this.state.locations.filter((group) => group["default"] == true)[0];

        if (typeof defaultGroup == 'undefined') defaultGroup = this.state.locations[0];

        document.querySelectorAll(this.categoryButtons).forEach((button) => {
            if (button.dataset['filter'] == defaultGroup["group-name"])
                this.setItemActiveState(button);
        });


        return defaultGroup["group-name"];
    }

    setItemActiveState(element) {
        document.querySelectorAll(this.categoryButtons).forEach((ele) => {
            ele.classList.remove("active");
        });

        element.classList.add("active");
    }


    render() {
        return (
            <>
                <div className="page-section" id="locations">

                    <div className="container">
                        <div className="row">
                            {/* <h2 className="text-dark mt-0">Location</h2> */}
                            <ul className="filter-group col-sm-12 nav justify-content-center">

                                {this.state.locations.map((menu, i) => {
                                    return <li className="nav-item" key={i}><a tabIndex="0" className="nav-link" data-filter={menu["group-name"]}>{menu["group-name"]}</a></li>
                                })}
                            </ul>
                        </div>


                        <div id="shuffle-grid-location">
                            {this.state.locations.map((menu, i) => {
                                return <MenuGroup locations={menu} key={i} />
                            })}
                        </div>

                        <div className="sizer">&nbsp;&nbsp;&nbsp;</div>
                    </div>
                </div>
            </>
        );
    }
};


/*
width: 60px;
    height: 37px;
    border-radius: 10%;
    border: 1px solid #3b3b3b;
*/

class MenuGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    getMapUrl(addrString) {
       return "https://maps.google.com/maps?q=" + encodeURI(addrString);
    }

    hidePhone(item) {
        /// either coming soon or phone number not avail
        if(item["cs"] || !item["phone"]) {
            return true;
        }
        return false;
    }

    render() {
        // let svgIcon = "<svg viewBox="0 0 226.3 380.1"><use xlink:href="#icon-logo-symbol"></use></svg>";


        return (
            <ul className="category row" data-groups={'["' + this.props.locations['group-name'] + '"]'}>
                {this.props.locations["group-items"].map((item, i) => {
                    const theHourId = "hour-" + item["id"];
                    const collpaseId = "collapse-" + item["id"];
                    return (
                        <li key={i} className="group-item col-lg-6 col-md-6 col-sm-12">
                            <div className="group-item__wrapper">
                                <div className="row">
                                    <div className="group-item__image col-lg-3 col-md-3 col-sm-12">
                                            {
                                                item["cs"] ? 
                                                <img src="/img/moge/coming-soon.jpg" height="60" alt="company logo"></img>

                                                : 
                                                <img src="/img/moge/m-logo.jpg" height="60" alt="company logo"></img>


                                            }
                                    </div>
                                    <div className="group-item__text_container col-lg-9 col-md-9 col-sm12">
                                        <div className="group-item__title">
                                            {item["title"]}
                                        </div>
                                        <div className="group-item__address">{item["address"]}</div>

                                        {this.hidePhone(item) ? null : 
                                        <div className="group-item__phone">
                                            <a text={"Phone number:" + item["phone"]} href={"tel:" + item["phone"]}>{item["phone"]}</a>
                                        </div>

                                        }

                                        {item["cs"] ? "" : 
                                        <div className="group-item__hours">

                                            <div className="card">

                                                <div className="card-header">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={"#open_hours" + item["id"]} role="button" aria-expanded="false" aria-controls={"open_hours" + item["id"]}>
                                                        Open Hours
                                                    </button>

                                                </div>

                                                <div className="collapse" id={"open_hours" + item["id"]}>
                                                    <div className="card-body">
                                                        <ul>
                                                        { Object.keys(item["hours"]).map((key, i)=>{                                                        
                                                            return <li key={i}>{key}: {item["hours"][key]}</li>
                                                        })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        }

                                        <div className="group-item__store-url">
                                            <br /><a href={"/locations/"+item["id"]} target="_blank" rel="noopener" className="btn btn-primary btn-lg" role="button">Go to Store</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}


export default Location;