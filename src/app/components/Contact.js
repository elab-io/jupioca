import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">Give us a call or send us an email and we will get back to you as soon as possible!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div><a href="tel:16463848108">+1 (929) 380 - 7777</a></div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="mailto:contact@yourwebsite.com">lin@mogeteeusa.com</a>
            </div>
          </div>

          {/* <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="http://placehold.it/450x350" alt="Slide 1" />
                <div className="carousel-caption">
                  Caption Slide 1
      </div>
              </div>
              <div className="item">
                <img src="http://placehold.it/450x350" alt="Slide 2" />
                <div className="carousel-caption">
                  Caption Slide 2
      </div>
              </div>
              <div className="item">
                <img src="http://placehold.it/450x350" alt="Slide 3" />
                <div className="carousel-caption">
                  Caption Slide 3
      </div>
              </div>
            </div>

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}




        </div>



      </section>
    );
  }
}

export default Contact;