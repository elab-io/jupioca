import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section className="page-section bg-secondary" id="about">
        <div className="container">
          <div className="text-dark">
            <div className="col-12 text-center">
              <h2 className="text-dark mt-0">About</h2>
              <hr className="divider dark my-4" />

              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img src="/static/img/moge/about-us.jpg" alt="About Us" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-dark about-text">
                MOGE TEE is dedicated to delivering the finest Bubble Tea in America, using only natural and fresh ingredients to deliver new and fashionable drinks that are extremely rich in flavor for our customers! With over 300 outlets worldwide,  Moge Tee has won the hearts of tea lovers around the world all the way from China,  Japan, Vietnam, Malaysia to Australia, and is now expanding its reach to the United States of America.
                <br/><br/>
                MOGE TEE makes each cup of tea with care and no detail is overlooked, including the ambiance of each of our meticulously designed locations. We are determined to offer our best to our customers, and we truly live our motto: WE NEVER COMPROMISE THE QUALITY OF OUR PRODUCTS.
                </div>


              </div>
              {/* <p className="text-white-50 mb-4"> */}
              {/* MÖGE TEE is dedicated to create an unique and innovative beverage with well-balanced and rich flavor to present customers the most natural and fresh taste. It wins the title of “Fresh” due to the famous processing called “Every Minute”. It is a creative and advanced 60-second extractive technology with high pressure which ideally retains the essence of the tea, gets rid of the bitter flavor, presents a fresher experience and brings you the most alluring tea scent and natural lingering.  */}
                {/* </p> */}
              {/* <p className="text-white-50 mb-4">
              We stick to the applying of the essence of the tea extracted within one minute, which means that it will be discarded if more than one minute to ensure the freshness of MÖGE TEE. We aim to promote and guarantee a healthy life, choosing the fresh and high qualify cheese with exclusive formula and presenting a completely fat-free and fresh beverage. Moreover, the adding of authentic Yuzhi Matcha brings out a more fresh and natural fragrance. We integrate the research and development of Ruan Ou Bao technology with desktop style, cooperation and training system, the supply of materials from the origin, brand management and service into a powerful combination, to create a new tea beverage with Ou Bao brand based on “Fashion and Ideas, Convenience and Health”.
                </p>
              <p className="text-white-50 mb-4">
              MÖGE TEE insists on attentively creating each cup of tea, seriously paying attention to details, elaborately decorating every store, to provide customers the best and remove any doubts, and we strive for moving ahead with the products all the time.              
             </p> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;