import React, { Fragment } from "react";
import "./user.css";
import img1 from "../../../assets/Propimg/icon-1.png"
import img2 from "../../../assets/Propimg/icon-villa.png"
import img3 from "../../../assets/Propimg/icon-house.png"
import img4 from "../../../assets/Propimg/icon-housing.png"
import img5 from "../../../assets/Propimg/icon-building.png"
import img6 from "../../../assets/Propimg/icon-neighborhood.png"
import img7 from "../../../assets/Propimg/icon-shop.png"
import img8 from "../../../assets/Propimg/icon-garage.png"
import img9 from "../../../assets/Propimg/property-1.jpg"
import img10 from "../../../assets/Propimg/property-2.jpg"
import img11 from "../../../assets/Propimg/property-3.jpg"
import img12 from "../../../assets/Propimg/property-4.jpg"
import img13 from "../../../assets/Propimg/property-5.jpg"
import img14 from "../../../assets/Propimg/property-6.jpg"


function Prop(){
    return(
        <Fragment>
            <div>
    <nav className="navbar">
        <div className="logo"><a href="https://www.google.com/search?">WebsiteName</a></div>
        <div className="navdiv">
            <ul>
                <li><a href="https://www.google.com/search?">Home</a></li>
                <li><a href="https://www.google.com/search?">Buy</a></li>
                <li><a href="https://www.google.com/search?">Sell</a></li>
                <li><a href="https://www.google.com/search?">Rent</a></li>
                <li><a href="https://www.google.com/search?">Help</a></li>
            </ul>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

<h4>Showing Results For Chennai</h4>


    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                <h1 className="mb-3">Property Types</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img1} alt="Icon"/>
                            </div>
                            <h6 className="line">Apartment</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img2} alt="Icon"/>
                            </div>
                            <h6 className="line">Villa</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img3} alt="Icon"/>
                            </div>
                            <h6 className="line">Home</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img4} alt="Icon"/>
                            </div>
                            <h6 className="line">Office</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img5} alt="Icon"/>
                            </div>
                            <h6 className="line">Building</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img6} alt="Icon"/>
                            </div>
                            <h6 className="line">Townhouse</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img7} alt="Icon"/>
                            </div>
                            <h6 className="line">Shop</h6>
                            <span >123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="https://www.google.com/search">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid abc" src={img8} alt="Icon"/>
                            </div>
                            <h6 className="line">Garage</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <section className="search">
        <div className="price">
            <select name="price" id="price">
                <option value="price" selected>Price</option>
                <option value="ap">Any Price</option>
                <option value="hl">High to Low</option>
                <option value="lh">Low to High</option>
            </select>
        </div>
        <div className="house">
            <select name="house" id="house">
                <option value="toh" selected>Type of House</option>
                <option value="villa">Villa</option>
                <option value="mansion">Mansion</option>
                <option value="apartment">Apartment</option>
                <option value="farmhouse">Farmhouse</option>
            </select>
        </div>
        <div className="bed">
            <select name="bed" id="bed">
                <option value="beds" selected>Beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
            </select>
        </div>
        <div className="bath">
            <select name="bath" id="bath">
                <option value="bath" selected>Bath</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
            </select>
        </div>
        <button id="search" className="text-success-emphasis">Search</button>
    </section>


    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 className="mb-3">Result</h1>
                    </div>
                </div>
                <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li className="nav-item me-2">
                            <a  type="button" className="btn btn-outline-primary active ghi poi" data-bs-toggle="pill" href="#tab-1">Featured</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-primary ghi"  data-bs-toggle="pill" href="#tab-2">For Sell</a>
                        </li>
                        <li className="nav-item me-0">
                            <a className="btn btn-outline-primary ghi"  data-bs-toggle="pill" href="#tab-3">For Rent</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href="https://www.google.com/search"><img className="img-fluid" src={img9} alt=""/></a>
                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                    <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary-emphasis mb-3">Rs.12,34,500</h5>
                                    <a className="d-block h5 mb-2" href="https://www.google.com/search">House</a>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Location, City, Country</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                                <div className="card text-center">
                                    <a href="https://www.google.com/search" className="btn btn-primary">Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href="https://www.google.com/search"><img className="img-fluid" src={img10} alt=""/></a>
                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                    <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary-emphasis mb-3">Rs.12,34,500</h5>
                                    <a className="d-block h5 mb-2 text-primary-emphasis" href="https://www.google.com/search">House</a>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Location, City, Country</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                                <div className="card text-center">
                                    <a href="https://www.google.com/search" className="btn btn-primary">Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href="https://www.google.com/search"><img className="img-fluid" src={img11} alt=""/></a>
                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                    <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary-emphasis mb-3">Rs.12,34,500</h5>
                                    <a className="d-block h5 mb-2 text-primary-emphasis" href="https://www.google.com/search">House</a>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Location, City, Country</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                                <div className="card text-center">
                                    <a href="https://www.google.com/search" className="btn btn-primary">Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href="https://www.google.com/search"><img className="img-fluid" src={img12} alt=""/></a>
                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                    <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary-emphasis mb-3">Rs.12,34,500</h5>
                                    <a className="d-block h5 mb-2 text-primary-emphasis" href="https://www.google.com/search">House</a>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Location, City, Country</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                                <div className="card text-center">
                                    <a href="https://www.google.com/search" className="btn btn-primary">Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href="https://www.google.com/search"><img className="img-fluid" src={img13} alt=""/></a>
                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                    <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary-emphasis mb-3">Rs.12,34,500</h5>
                                    <a className="d-block h5 mb-2 text-primary-emphasis" href="https://www.google.com/search">House</a>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Location, City, Country</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                                <div className="card text-center">
                                    <a href="https://www.google.com/search" className="btn btn-primary">Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href="https://www.google.com/search"><img className="img-fluid" src={img14} alt=""/></a>
                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                    <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary-emphasis mb-3">Rs.12,34,500</h5>
                                    <a className="d-block h5 mb-2 text-primary-emphasis" href="https://www.google.com/search">House</a>
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>Location, City, Country</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                </div>
                                <div className="card text-center">
                                <a href="https://www.google.com/search" className="btn btn-primary">Add to Wishlist</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a className="btn btn-outline-secondary py-3 px-5" href="https://www.google.com/search">Browse More Property</a>
                        </div>
                    </div>
                </div>
                

                <div className="container text-center cat">
                    <div className="row">
                      <div className="col left">
                        <h2 className="title">Contact Us</h2>
                                <p>email : contact@example.com</p>
                                <p>ph no : 0123456789</p>
                                <div className="socialicons">
                                    <a href="https://www.google.com/search"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="https://www.google.com/search"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.google.com/search"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.google.com/search"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                      </div>
                      <div className="col">
                        <input type="text" name="Name" placeholder="Your Name" required/> <br/>
                        <input type="email" name="email" placeholder="Your email" required/> <br/>
                        <textarea name="Message" row="6" placeholder="Your Message"></textarea> <br/>
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                    </div>

</div>
</div>

        </Fragment>
    )
}

export default Prop;
