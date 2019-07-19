import React from 'react';
import Shuffle from 'shufflejs';


class Location extends React.Component {
    constructor(props) {
        super();
        this.categoryButtons = '#location .filter-group li a';
        this.shuffleGrid = '#location #shuffle-grid';
        this.itemSelector = '#location .category';
        this.sizer = '#location .sizer';
        this.state = {
            'locations': props.data.locations
        };
    }
    
    componentDidMount() {
        // Set up listener for buttons
        document.querySelectorAll(this.categoryButtons)
            .forEach((button)=>{
                button.addEventListener('click', (e)=>{
                    this.setItemActiveState(e.target);
                    this.shuffle.filter(e.target.dataset.filter); 
                });
            });

        // Initialize shufflejs
        const grid = document.querySelector(this.shuffleGrid);
        this.shuffle = new Shuffle(grid, {
            itemSelector: this.itemSelector,
            sizer: this.sizer,
            group: this.setDefaultGroup()
          }); 
    }

    setDefaultGroup() {

        let defaultGroup = this.state.locations.filter((group)=> group["default"] == true )[0];
        
        if (typeof defaultGroup == 'undefined') defaultGroup = this.state.locations[0];
        
        document.querySelectorAll(this.categoryButtons).forEach((button)=>{
            if (button.dataset['filter'] == defaultGroup["group-name"]) 
                this.setItemActiveState(button);
        });


        return defaultGroup["group-name"];
    }

    setItemActiveState(element) {
        document.querySelectorAll(this.categoryButtons).forEach((ele)=>{
           ele.classList.remove("active");
        });

        element.classList.add("active");
    }


    render() {
        return (
            <>
            <div className="page-section" id="location">
            
            <div className="container">
                <div className="row">
                    <ul className="filter-group col-sm-12 nav justify-content-center">
                    
                    { this.state.locations.map((menu, i)=>{
                        return <li className="nav-item" key={i}><a className="nav-link" data-filter={menu["group-name"]}>{menu["group-name"]}</a></li>
                    }) }
                    </ul>
                </div>


            <div id="shuffle-grid">
                { this.state.locations.map((menu, i)=>{
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



class MenuGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let svgIcon = "<svg viewBox="0 0 226.3 380.1"><use xlink:href="#icon-logo-symbol"></use></svg>";


        return (
                <ul className="category row" data-groups={ '["' + this.props.locations['group-name'] + '"]' }>
                    {this.props.locations["group-items"].map((item, i)=>{
                        return ( 
                        <li key={i} className="group-item col-lg-6 col-sm-12">
                            <div className="group-item__wrapper">
                                <div className="row">
                                    <div className="group-item__image col-3">
                                        <span class="location-list__item__icon icon-logo-symbol icon">
                                            <svg viewBox="0 0 226.3 380.1">
                                                <path d="M168.6 113.2c17.4-.1 25-13.7 30-22.1 5-8.4 14.1-18.4 14.1-18.4s-5.8-4.5-20.8-2.8c-15 1.6-21.4 7-29 18.2-7.7 11.3-11.2 24.9-11.2 24.9s-.5.3 16.9.2zM123.2 92c19.4 18.2 19.1 17.2 19.1 17.2s9.7-18 12.9-38.6c3.2-20.6 2.1-34.1-13-51.6S115.9.5 115.9.5s-.3 20.6-3.4 35.4c-3.1 14.7-8.7 37.8 10.7 56.1zM220.4 155.6s-14.3 2.3-40.5-3.6c-26-5.9-45.5-14-45.5-14l-.1-.1s-19.8-7.4-42.8-20.9c-23.1-13.6-32-25.1-32-25.1-1.4-1.7-3.5-.9-3.9.9-.2.6-29.8 131.2-45.3 199.4h-.1C4.5 317.7.6 335 .6 335c-1.9 8.2 14.3 27 40.9 37.5 26.6 10.6 51.3 7.9 55.6.7 0 0 10.8-18.4 26-44.1 13.3-22.4 99.3-169.7 99.5-170.1 1-1.7 0-3.7-2.2-3.4z"/><path d="M188.5 110.8c-5.3 4.5-13.5 6.2-22.7 6.2-20.3.1-18.9-1.1-18.9-1.1s1.9-10.7 8-22c-1.2-1-1.7-1.1-1.8-1.1-4.3 12.3-9.9 23.6-9.9 23.6s-1.9-1.5-23.5-21.8c-5.2-4.9-8.5-10.2-10.8-15.5-25.4-6.2-42.6-6-45.4 1-4.2 10.5 28.6 33.4 73.2 51 44.6 17.7 84.1 23.5 88.3 13 2.9-7.7-10.2-19.4-36.5-33.3z"/>
                                            </svg></span>
                                        {/* <img src="https://www.juicegeneration.com/media/resized/256x170/location/1/StoreInside-W86_7.jpg" alt="Food & Drink" /> */}
                                    </div>
                                    <div className="group-item__text_container col-7">
                                        <div className="group-item__title">
                                        {/* <span class="location-list__item__icon icon-logo-symbol icon">
                                            <svg viewBox="0 0 226.3 380.1">
                                                <path d="M168.6 113.2c17.4-.1 25-13.7 30-22.1 5-8.4 14.1-18.4 14.1-18.4s-5.8-4.5-20.8-2.8c-15 1.6-21.4 7-29 18.2-7.7 11.3-11.2 24.9-11.2 24.9s-.5.3 16.9.2zM123.2 92c19.4 18.2 19.1 17.2 19.1 17.2s9.7-18 12.9-38.6c3.2-20.6 2.1-34.1-13-51.6S115.9.5 115.9.5s-.3 20.6-3.4 35.4c-3.1 14.7-8.7 37.8 10.7 56.1zM220.4 155.6s-14.3 2.3-40.5-3.6c-26-5.9-45.5-14-45.5-14l-.1-.1s-19.8-7.4-42.8-20.9c-23.1-13.6-32-25.1-32-25.1-1.4-1.7-3.5-.9-3.9.9-.2.6-29.8 131.2-45.3 199.4h-.1C4.5 317.7.6 335 .6 335c-1.9 8.2 14.3 27 40.9 37.5 26.6 10.6 51.3 7.9 55.6.7 0 0 10.8-18.4 26-44.1 13.3-22.4 99.3-169.7 99.5-170.1 1-1.7 0-3.7-2.2-3.4z"/><path d="M188.5 110.8c-5.3 4.5-13.5 6.2-22.7 6.2-20.3.1-18.9-1.1-18.9-1.1s1.9-10.7 8-22c-1.2-1-1.7-1.1-1.8-1.1-4.3 12.3-9.9 23.6-9.9 23.6s-1.9-1.5-23.5-21.8c-5.2-4.9-8.5-10.2-10.8-15.5-25.4-6.2-42.6-6-45.4 1-4.2 10.5 28.6 33.4 73.2 51 44.6 17.7 84.1 23.5 88.3 13 2.9-7.7-10.2-19.4-36.5-33.3z"/>
                                            </svg></span> */}
                                        
                                            { item["title"] }
                                        </div>
                                        <div className="group-item__address">{ item["address"] }</div>
                                        <div className="group-item__phone">{ item["phone"] }</div>
                                        <div className="group-item__hours"><span>Hours: </span>{ item["hours"] }</div>
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