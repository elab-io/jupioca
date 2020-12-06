import React from 'react';

class Job extends React.Component {
  render() {
    return (
      <section className="page-section" id="jobs">
        {/* <div className="container text-center">
            <h2 className="mb-4">Sr Account</h2>
            <h2 className="mb-4">Sr Account</h2>
            <h2 className="mb-4">Sr Account</h2>
            <h2 className="mb-4">Sr Account</h2>
            <h2 className="mb-4">Sr Account</h2>
            <h2 className="mb-4">Sr Account</h2>
            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
          </div> */}

        <div className="jumbotron jumbotron-fluid bg-secondary">

			      {/* <video autoPlay muted loop poster="/static/img/moge/video.jpg" aria-label="video">
            <source src="" data-src="http://144.202.12.76/mogeVideo.mp4" type="video/mp4" />
          </video> */}


          <div className="container text-dark">

            <h2 className="display-4">We're hiring!</h2>
            <p className="lead">MOGE TEE with over 300 outlets worldwide and counting has won the hearts of tea lovers around the world . Moge Tee is dedicated to deliver the finest, most deliciously interesting and rich flavors unlike any other. If you are a dedicated bubble tea lover, welcome to join our team and start a new journey with us!</p>
            <hr className="my-4" />
            {/* <p>Fresh and organic ingredients</p> */}
            <a href="https://form.jotform.com/91954135212150" target="_blank" rel="noopener" className="btn btn-primary btn-lg" role="button">Apply Now</a>

          </div>
        </div>
      </section>
    );
  }
}

export default Job;
