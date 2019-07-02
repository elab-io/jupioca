import React from 'react';
import Shuffle from 'shufflejs';


class ShuffleMenu extends React.Component {
    constructor() {
        super();
        this.categoryButtons = '.filter-group li a';
        this.state = {
            'menu': 
                [
                    {
                        'menu-group-name': 'Category 1',
                        'menu-items': [
                            { 'item-name' : 'Category 1 - item 1'},
                            { 'item-name' : 'Category 1 - item 2'},
                            { 'item-name' : 'Category 1 - item 3'},
                        ]
                    },
                    {
                        'menu-group-name': 'Category 2',
                        'menu-items': [
                            { 'item-name' : 'Category 2 - item 1'},
                            { 'item-name' : 'Category 2 - item 2'},
                            { 'item-name' : 'Category 2 - item 3'},
                        ]
                    },
                    {
                        'menu-group-name': 'Category 3',
                        'menu-items': [
                            { 'item-name' : 'Category 3 - item 1'},
                            { 'item-name' : 'Category 3 - item 2'},
                            { 'item-name' : 'Category 3 - item 3'},
                        ]
                    },

                ]
            
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
        // console.log(this);
        this.shuffle = new Shuffle(grid, {
            itemSelector: '.category',
            sizer: '.sizer',
          }); 
    }

    setItemActiveState(element) {
        // console.log(document.querySelectorAll(this.categoryButtons));
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
                    <li className="nav-item"><a className="nav-link" data-filter="all">Reset</a></li>
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
                                    <div className="menu-item__image col-3">
                                        <img src="https://simpleqode.bitbucket.io/touche/assets/img/31.jpg" alt="Food" />
                                    </div>
                                    <div className="menu-item__text_container col-7">
                                        <div class="menu-item__title">Fusce id ante ut arcu</div>
                                        <div class="menu-item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</div>
                                    </div>
                                    <div className="menu-item__price col-2">$23</div>
                                </div>
                            </div>

                        {/* { item["item-name"] } */}
                        </li>
                        );
                    })}
                </ul>
        );
    }
}


export default ShuffleMenu;