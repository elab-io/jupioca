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
                    // console.log("here is the item info");
                    // console.log(item);
                    const theHourId = "hour-" + item["id"];
                    const collpaseId = "collapse-" + item["id"];
                    return (
                        <li key={i} className="group-item col-lg-6 col-md-6 col-sm-12">
                            <div className="group-item__wrapper">
                                <div className="row">
                                    <div className="group-item__image col-lg-3 col-md-3 col-sm-12">
                                        {/* <span className="location-list__item__icon icon-logo-symbol icon"> */}
                                            {/* <svg viewBox="0 0 226.3 380.1">
                                                <path d="M168.6 113.2c17.4-.1 25-13.7 30-22.1 5-8.4 14.1-18.4 14.1-18.4s-5.8-4.5-20.8-2.8c-15 1.6-21.4 7-29 18.2-7.7 11.3-11.2 24.9-11.2 24.9s-.5.3 16.9.2zM123.2 92c19.4 18.2 19.1 17.2 19.1 17.2s9.7-18 12.9-38.6c3.2-20.6 2.1-34.1-13-51.6S115.9.5 115.9.5s-.3 20.6-3.4 35.4c-3.1 14.7-8.7 37.8 10.7 56.1zM220.4 155.6s-14.3 2.3-40.5-3.6c-26-5.9-45.5-14-45.5-14l-.1-.1s-19.8-7.4-42.8-20.9c-23.1-13.6-32-25.1-32-25.1-1.4-1.7-3.5-.9-3.9.9-.2.6-29.8 131.2-45.3 199.4h-.1C4.5 317.7.6 335 .6 335c-1.9 8.2 14.3 27 40.9 37.5 26.6 10.6 51.3 7.9 55.6.7 0 0 10.8-18.4 26-44.1 13.3-22.4 99.3-169.7 99.5-170.1 1-1.7 0-3.7-2.2-3.4z" /><path d="M188.5 110.8c-5.3 4.5-13.5 6.2-22.7 6.2-20.3.1-18.9-1.1-18.9-1.1s1.9-10.7 8-22c-1.2-1-1.7-1.1-1.8-1.1-4.3 12.3-9.9 23.6-9.9 23.6s-1.9-1.5-23.5-21.8c-5.2-4.9-8.5-10.2-10.8-15.5-25.4-6.2-42.6-6-45.4 1-4.2 10.5 28.6 33.4 73.2 51 44.6 17.7 84.1 23.5 88.3 13 2.9-7.7-10.2-19.4-36.5-33.3z" />
                                            </svg> */}

                                            {
                                                item["cs"] ? 
                                                <img src="/img/moge/coming-soon.jpg" height="60" alt="company logo"></img>

                                                : 
                                                <img src="/img/moge/m-logo.jpg" height="60" alt="company logo"></img>


                                            }
                                            
                                           {/* </span> */}
                                    </div>
                                    <div className="group-item__text_container col-lg-9 col-md-9 col-sm12">
                                        <div className="group-item__title">
                                            {/* <span className="location-list__item__icon icon-logo-symbol icon">
                                            <svg viewBox="0 0 226.3 380.1">
                                                <path d="M168.6 113.2c17.4-.1 25-13.7 30-22.1 5-8.4 14.1-18.4 14.1-18.4s-5.8-4.5-20.8-2.8c-15 1.6-21.4 7-29 18.2-7.7 11.3-11.2 24.9-11.2 24.9s-.5.3 16.9.2zM123.2 92c19.4 18.2 19.1 17.2 19.1 17.2s9.7-18 12.9-38.6c3.2-20.6 2.1-34.1-13-51.6S115.9.5 115.9.5s-.3 20.6-3.4 35.4c-3.1 14.7-8.7 37.8 10.7 56.1zM220.4 155.6s-14.3 2.3-40.5-3.6c-26-5.9-45.5-14-45.5-14l-.1-.1s-19.8-7.4-42.8-20.9c-23.1-13.6-32-25.1-32-25.1-1.4-1.7-3.5-.9-3.9.9-.2.6-29.8 131.2-45.3 199.4h-.1C4.5 317.7.6 335 .6 335c-1.9 8.2 14.3 27 40.9 37.5 26.6 10.6 51.3 7.9 55.6.7 0 0 10.8-18.4 26-44.1 13.3-22.4 99.3-169.7 99.5-170.1 1-1.7 0-3.7-2.2-3.4z"/><path d="M188.5 110.8c-5.3 4.5-13.5 6.2-22.7 6.2-20.3.1-18.9-1.1-18.9-1.1s1.9-10.7 8-22c-1.2-1-1.7-1.1-1.8-1.1-4.3 12.3-9.9 23.6-9.9 23.6s-1.9-1.5-23.5-21.8c-5.2-4.9-8.5-10.2-10.8-15.5-25.4-6.2-42.6-6-45.4 1-4.2 10.5 28.6 33.4 73.2 51 44.6 17.7 84.1 23.5 88.3 13 2.9-7.7-10.2-19.4-36.5-33.3z"/>
                                            </svg></span> */}

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

                                            {/* {
                                                item["cs"] ? <div>COMING SOON</div> : <div>

                                                    <p>Open Hours</p>
                                                    {Object.keys(item["hours"]).map((key, i) => {
                                                        return <div key={i}><i>{key}: {item["hours"][key]}</i></div>
                                                    })}
                                                </div>
                                            } */}

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



{item["cs"] ? "" : 


                                        <ul className="social-links clearfix">
                                            {Object.keys(item["social"]).map((key, i) => {
                                                // console.log("The key is " + item["social"][key]);

                                                if(item["social"][key]) {
                                                    return <li key={i}><a target="_blank" rel="noopener" aria-label="Link to social media" href={item["social"][key]}>
                                                    <i aria-hidden="true" className={'fab fa-' + key}></i></a></li>
                                                } else {
                                                    return null;
                                                }
                                            })}
                                            <li>
                                            {/* <a className="popup-gmaps small font-italic" href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom">View Map</a> */}
                                            <a className="popup-gmaps small font-italic" rel="noopener" href={this.getMapUrl(item["address"])}>View Map</a>
                                            </li>
                                        </ul>
}


                                        {item["order"] != null ? 
                                            <a href={item["order"]} target="_blank" rel="noopener" className="btn btn-primary btn-lg" role="button">Order Now</a>
                                            : null
                                        }

                                        <a href={"/locations/"+item["id"]} target="_blank" rel="noopener" className="btn btn-primary btn-lg" role="button">Go to Store</a>


                                        

                                    </div>
                                    {/* <div className="group-item__price  col-sm-12 col-md-2">{ item["price"] }</div> */}
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