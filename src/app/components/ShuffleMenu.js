import React from 'react';
import Shuffle from 'shufflejs';


class ShuffleMenu extends React.Component {
    constructor(props) {
        super();
        this.categoryButtons = '#shuffle-menu .filter-group li a';
        this.shuffleGrid = '#shuffle-menu #shuffle-grid';
        this.itemSelector = '#shuffle-menu .category';
        this.sizer = '#shuffle-menu .sizer';
        this.state = {
            'menu': props.data.menu
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

        let defaultGroup = this.state.menu.filter((group)=> group["default"] == true )[0];
        
        if (typeof defaultGroup == 'undefined') defaultGroup = this.state.menu[0];
        
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
            <div className="page-section" id="shuffle-menu">
            <div className="container">
                <div className="row">
                    <ul className="filter-group col-sm-12 nav justify-content-center">
                    
                    { this.state.menu.map((menu, i)=>{
                        return <li className="nav-item" key={i}><a className="nav-link" data-filter={menu["group-name"]}>{menu["group-name"]}</a></li>
                    }) }
                    {/* <li className="nav-item"><a className="nav-link" data-filter="all">Reset</a></li> */}
                    </ul>
                </div>


            <div id="shuffle-grid">
                { this.state.menu.map((menu, i)=>{
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
                <ul className="category row" data-groups={ '["' + this.props.menu['group-name'] + '"]' }>
                    {this.props.menu["group-items"].map((item, i)=>{
                        return ( 
                        <li key={i} className="group-item col-lg-6 col-sm-12">
                            <div className="group-item__wrapper">
                                <div className="row">
                                    <div className="group-item__image col-sm-12 col-md-3">
                                        <img src={ item["image"] } alt="Food & Drink" />
                                    </div>
                                    <div className="group-item__text_container col-sm-12  col-md-7">
                                        <div className="group-item__title">{ item["title"] }</div>
                                        <div className="group-item__description">{ item["description"] }</div>
                                    </div>
                                    <div className="group-item__price  col-sm-12 col-md-2">{ item["price"] }</div>
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