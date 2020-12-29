import React from 'react';

class AppInfo extends React.Component {
    render() {
        return (
<section className="page-section bg-secondary" id="appinfo">
        <div className="container">
          <div className="text-dark">
            <div className="col-12 text-center">
              <h2 className="text-dark mt-0">App Info</h2>
              <hr className="divider dark my-4" />

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img src="/img/moge/about-us.jpg" alt="About Us" style={{ width: '100%' }} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-dark text-left appdownload">
                  <img src="/img/app_download.png" alt="Download App" style={{ width: '30%' }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
        ) ;
    }
}

export default AppInfo;