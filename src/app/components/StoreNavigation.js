import React from 'react';

class StoreNavigation extends React.Component {

  componentDidMount() {

      this.handleTabEvent();
  }

  handleTabEvent() {
    var menuItems = document.querySelectorAll('.navbar #navbarResponsive li');

    menuItems.forEach((button) => {
    button.addEventListener('keyup', (e) => {
        if( e.which == 13 ) {
          event.preventDefault();
          e.target.getElementsByClassName('nav-link')[0].click();
        }
      });
    });
  }    

  // https://stackoverflow.com/questions/54006038/background-colorrgba-problem-in-safari-12-0-2
    render() {
        return (            
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">            
            <div className="container">            
              <a className="navbar-brand js-scroll-trigger" href="/" tabIndex="-1">
                <img src="/img/moge/logo.png" height="60" alt="company logo" tabIndex="0" />
                  </a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive" >
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                  <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" href="#about" tabIndex="-1">About</a>
                  </li>
                  <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" tabIndex="-1" href="#shuffle-menu">Menu</a>
                  </li>
                  {/* <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                  </li> */}
                  <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" href="#locations" tabIndex="-1">Locations</a>
                  </li>                  
                  <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" href="#appinfo" tabIndex="-1">App</a>
                  </li>
                  <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" href="#contact" tabIndex="-1">Contact</a>
                  </li>
                  <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" href="#jobs" tabIndex="-1">Jobs</a>
                  </li>                  

                  <li className="nav-item" tabIndex="0">
                    <a className="nav-link js-scroll-trigger" href="#franchise" tabIndex="-1">Franchise</a>
                  </li>          
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default StoreNavigation;