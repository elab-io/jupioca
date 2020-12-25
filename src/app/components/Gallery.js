import React from 'react';
import localData from '../data/item.json';


class Gallery extends React.Component {
  constructor(props) {
    super();
    // this.categoryButtons = '#locations .filter-group li a';
    // this.shuffleGrid = '#locations #shuffle-grid';
    // this.itemSelector = '#locations .category';
    // this.sizer = '#locations .sizer';
    // console.log("here isthe gallery info");
    // console.log(props.data.gallery);
    this.state = {
      'gallery': (typeof props.data !== 'undefined') ? props.data.gallery : localData.gallery                       

    };
  }


  componentDidMount() {
      this.handleTabEvent();
  }
  handleTabEvent() {
    var galleryItems = document.querySelectorAll('.gallery-box');

    galleryItems.forEach((button) => {
    button.addEventListener('keyup', (e) => {
        if( e.which == 13 ) {
          event.preventDefault();
          e.target.click(); 
        }
      });
    });
  }  


  render() {
    return (
      <section id="gallery" className="page-section">
        <div className="container-fluid p-0">
          <div className="row no-gutters">


            {this.state.gallery.map((imageInfo, i) => {
              return <GalleryPiece info={imageInfo} key={i} />
            })}

            {/* <div className="col-lg-4 col-sm-6">
              <a className="gallery-box" href="/img/gallery/fullsize/1.jpg" title="Text Here">
                <img className="img-fluid" src="/img/gallery/thumbnails/1.jpg" alt="" />
                <div className="gallery-box-caption">
                  <div className="project-category text-white-50">
                    Category
              </div>
                  <div className="project-name">
                    Project Name
              </div>
                </div>
              </a>
            </div>
  
            <div className="col-lg-4 col-sm-6">
              <a className="gallery-box" href="/img/gallery/fullsize/3.jpg">
                <img className="img-fluid" src="/img/gallery/thumbnails/3.jpg" alt="" />
                <div className="gallery-box-caption">
                  <div className="project-category text-white-50">
                    Category
              </div>
                  <div className="project-name">
                    Project Name
              </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="gallery-box" href="/img/gallery/fullsize/4.jpg">
                <img className="img-fluid" src="/img/gallery/thumbnails/4.jpg" alt="" />
                <div className="gallery-box-caption">
                  <div className="project-category text-white-50">
                    Category
              </div>
                  <div className="project-name">
                    Project Name
              </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="gallery-box" href="/img/gallery/fullsize/5.jpg">
                <img className="img-fluid" src="/img/gallery/thumbnails/5.jpg" alt="" />
                <div className="gallery-box-caption">
                  <div className="project-category text-white-50">
                    Category
              </div>
                  <div className="project-name">
                    Project Name
              </div>
                </div>
              </a>
            </div> */}
            {/* <div className="col-lg-4 col-sm-6">
              <a className="gallery-box" href="/img/gallery/fullsize/6.jpg">
                <img className="img-fluid" src="/img/gallery/thumbnails/6.jpg" alt="" />
                <div className="gallery-box-caption p-3">
                  <div className="project-category text-white-50">
                    Category
              </div>
                  <div className="project-name">
                    Project Name
              </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

class GalleryPiece extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // {
    //   "id": "001",
    //   "caption": "Great",
    //   "t1": "Category",
    //   "t2": "Project",
    //   "img": "/img/gallery/thumbnails/1.jpg"
    //           /// "img": "https://via.placeholder.com/650x350.png?text=Test"
    // }
    // console.log("here is the info yy");
    // console.log(this.props.info);

    return (
      <div className="col-lg-4 col-sm-6">
        <a className="gallery-box" href={this.props.info.img} title={this.props.info.caption} tabIndex="-1">
          <img className="img-fluid" src={this.props.info.img2} alt={this.props.info.caption} tabIndex="0" />
          <div className="gallery-box-caption">
            <div className="gallery-category text-white-50">
              {this.props.info.t1}
            </div>
            <div className="gallery-name">
              {this.props.info.t2}
            </div>
          </div>
        </a>
      </div>
    );
  }
}



export default Gallery;