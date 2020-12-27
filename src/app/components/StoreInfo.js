import React from 'react';
import parse from 'html-react-parser';

class StoreInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      store: props.data
    };
}

  displayOpenHour() {
    return React.createElement("ul", {className: "hours"}); 
  }

  render() {
    return (
      <section className="page-section bg-secondary" id="about">
        <div className="container">
          <div className="text-dark">
            <div className="col-12 text-center">
              <h2 className="text-dark mt-0">Store Info</h2>
              <hr className="divider dark my-4" />

              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img src="/img/moge/about-us.jpg" alt="About Us" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-dark about-text text-left">
                  
                  { this.state.store.description ?
                  parse(this.state.store.description) : null }

                  <div className="storeAddress">
                    {this.state.store.title}<br />
                    {this.state.store.address}<br />
                    {this.state.store.phone}<br /><br />
                  </div>  


                <div className="hours">
                  Open hours:
                  <ul>
                    {Object.keys(this.state.store.hours).map((index) => {
                      return <li key={index}>{this.state.store.hours[index]}</li>
                    })}
                  </ul>
                </div>

                {
                this.state.store.social ?
                  <div className="social">
                    <ul>
                      {Object.keys(this.state.store.social).map((index) => {
                        return <li key={index}><a target="_blank" aria-label="Link to social media" href={this.state.store.social[index]}><i className={"fab fa-" + index}></i></a></li>

                      })}
                    </ul>
                  </div>
                : null
                }

              { this.state.store.order ?
                <a href={this.state.store.order} rel="noopener" className="btn btn-primary btn-lg" role="button">Order Now</a>
                : null
              }



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StoreInfo;