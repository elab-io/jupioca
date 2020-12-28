import React from 'react';

class Franchise extends React.Component {
  render() {
    return (
      <section className="page-section bg-dark text-white" id="franchise">
        <div id="contact-area">

          <div className="container">
            <h2>Franchise</h2>
            <p>Interested in franchise with us? Please fill out below form and we will contact you.</p>
            <br/>
            <form id="contact-form" action="/submitFranchise" method="post">

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input name="name" id="name" className="form-control" placeholder="" aria-label="Name" />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input name="phoneNo" id="phoneNo" className="form-control" placeholder="" aria-label="Phone Number" />
              </div>

              <div className="form-group">
                <label htmlFor="area">Interest Area</label>
                <input name="area" id="area" className="form-control" placeholder="" aria-label="Interest Area" />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input name="address" id="address" className="form-control" placeholder="" aria-label="Address" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" id="email" className="form-control" placeholder="" aria-label="Email" />
              </div>

              <div className="form-group">
                <label htmlFor="msg">Your Message</label>
                <textarea name="msg" id="msg" className="form-control" rows="3" aria-label="Your Message"></textarea>
              </div>

              <fieldset>
                <button id="submitData" type="submit" className="btn btn-primary">SUBMIT</button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Franchise;