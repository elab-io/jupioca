import React from 'react';
import Shuffle from 'shufflejs';
import localData from '../data/item.json';


class ShuffleMenu extends React.Component {
    constructor(props) {
        super();
        // this.categoryButtons = '#shuffle-menu .filter-group a.dropdown-item';
        // this.shuffleGrid = '#shuffle-menu #shuffle-grid';
        // this.itemSelector = '#shuffle-menu .category';
        // this.sizer = '#shuffle-menu .sizer';
        // this.state = {
        //     'menu': props.data.menu
        // };
        // console.log('type of this menu is: ');
        // console.log((typeof props.data === 'undefined') ? 'yes' : 'no');
        this.categoryButtons = '#shuffle-menu .filter-group li a';
        this.shuffleGrid = '#shuffle-menu #shuffle-grid-menu';
        this.itemSelector = '#shuffle-menu .category';
        this.sizer = '#shuffle-menu .sizer';
        this.state = {
            // 'menu': props.data.menu
            'menu': (typeof props.data !== 'undefined') ? props.data.menu : localData.menu
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

    updateMenuDropdownLable(element) {        
        document.querySelector('.menu-dropdown-button').innerHTML = element.text;
    }

    setGroupImage(element) {        
        // document.querySelector('.category-image').style.backgroundImage="url('/img/moge/"+element.dataset.groupid+".jpg'),url('/img/moge/milkshake.jpg')";
    }

    setDefaultGroup() {

        let defaultGroup = this.state.menu.filter((group) => group["default"] == true)[0];

        // console.log(defaultGroup);

        if (typeof defaultGroup == 'undefined') defaultGroup = this.state.menu[0];

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
                <div className="page-section" id="shuffle-menu">
                    <div className="container">

                        {/* <div className="row">
                            <div className="dropdown col-sm-12 col-md-4">
                                <button className="btn btn-secondary dropdown-toggle menu-dropdown-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
                                <div className="dropdown-menu filter-group" aria-labelledby="dropdownMenuButton">
                                    {this.state.menu.map((menu, i) => {
                                        return <a className="nav-link dropdown-item" data-filter={menu["group-name"]} data-groupid={menu["id"]} key={i}>{menu["group-name"]}</a>
                                    })}
                                </div>
                            </div> 
                        </div> */}


                <div className="row">
                    <ul className="filter-group col-sm-12 nav justify-content-center">
                    
                    { this.state.menu.map((menu, i)=>{
                        return <li className="nav-item" key={i}><a tabIndex="0" className="nav-link" data-filter={menu["group-name"]}>{menu["group-name"]}</a></li>
                    }) }
                    {/* <li className="nav-item"><a className="nav-link" data-filter="all">Reset</a></li> */}
                    </ul>
                </div>


                        {/* <div className="row">
                            <ul className="filter-group col-sm-12 nav justify-content-center">

                                {this.state.menu.map((menu, i) => {
                                    return <li className="nav-item" key={i}><a className="nav-link" data-filter={menu["group-name"]}>{menu["group-name"]}</a></li>
                                })}
                            </ul>
                        </div> */}


{/*
                        <div id="carouselExampleIndicators" className="carousel slide mt-3 md-3" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://mogeteeusa.com/imgad.jpeg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://mogeteeusa.com/imgad.jpeg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://mogeteeusa.com/imgad.jpeg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

*/}

{/* 
                        <div className="category-image">
                        </div> */}
               

                        <div id="shuffle-grid-menu">
                            {this.state.menu.map((menu, i) => {
                                return <MenuGroup menu={menu} key={i} />
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
        return (

            <ul className="category row" data-groups={'["' + this.props.menu['group-name'] + '"]'}>
                {this.props.menu["group-items"].map((item, i) => {
                    // console.log("MY id is " + i);
                    // console.log(this.props.menu["id"]);
                    const uniquKey = this.props.menu["id"] + i;
                    // console.log(uniquKey);
                    // const uniquKey  = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    // console.log(uniquKey);
                    return (
                        <li key={uniquKey} className="group-item col-lg-6 col-sm-12">
                            <div className="group-item__wrapper">
                                <div className="row">
                                    <div className="group-item__image col-sm-12 col-md-3">
                                        <img src={item["image"]} alt={item["title"] + item["n2"]} />
                                    </div>
                                    <div className="group-item__text_container col-sm-12  col-md-9">
                                        <div className="group-item__title">{item["title"]}<br/>{item["n2"]}</div>
                                        <div className="group-item__description">{item["description"]}</div>

                                        {item["calories"] ?
                                            <div className="group-item__calories">Calories: {item["calories"]}</div>
                                            : null
                    
                                        }
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


export default ShuffleMenu;