import React from 'react';

class Franchise extends React.Component {
    render() {
        return (
          <section class="page-section" id="franchise">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="mt-0">Franchise!</h2>
                <hr class="divider my-4" />
                <p class="text-muted mb-5">Franchise with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+1 (202) 555-0149</div>
              </div>
              <div class="col-lg-4 mr-auto text-center">
                <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a class="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
              </div>
            </div>
          </div>
        </section>  
        ) ;
    }
}

export default Franchise;