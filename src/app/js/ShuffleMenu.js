import React from 'react';
import Shuffle from 'shufflejs';


class ShuffleMenu extends React.Component {
    constructor(props) {
        super();
        this.categoryButtons = '.filter-group li a';
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
        const grid = document.querySelector('#shuffle-grid');
        this.shuffle = new Shuffle(grid, {
            itemSelector: '.category',
            sizer: '.sizer',
            group: this.setDefaultGroup()
          }); 
    }

    setDefaultGroup() {

        let defaultGroup = this.state.menu.filter((group)=> group["default"] == true )[0];
        
        if (defaultGroup.length == 0) defaultGroup = this.state.menu[0];
        
        document.querySelectorAll(this.categoryButtons).forEach((button)=>{
            if (button.dataset['filter'] == defaultGroup["menu-group-name"]) 
                this.setItemActiveState(button);
        });


        return defaultGroup["menu-group-name"];
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
                        return <li className="nav-item" key={i}><a className="nav-link" data-filter={menu["menu-group-name"]}>{menu["menu-group-name"]}</a></li>
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
                <ul className="category row" data-groups={ '["' + this.props.menu['menu-group-name'] + '"]' }>
                    {this.props.menu["menu-items"].map((item, i)=>{
                        return ( 
                        <li key={i} className="menu-item col-lg-6 col-sm-12">
                            <div className="menu-item__wrapper">
                                <div className="row">
                                    <div className="menu-item__image col-sm-12 col-md-3">
                                        <img src={ item["image"] } alt="Food & Drink" />
                                    </div>
                                    <div className="menu-item__text_container col-sm-12  col-md-7">
                                        <div class="menu-item__title">{ item["title"] }</div>
                                        <div class="menu-item__description">{ item["description"] }</div>
                                    </div>
                                    <div className="menu-item__price  col-sm-12 col-md-2">{ item["price"] }</div>
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