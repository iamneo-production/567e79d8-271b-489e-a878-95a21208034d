
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./user.css";
import img1 from "../../../assets/Propimg/icon-1.png"
import img2 from "../../../assets/Propimg/icon-building.png"
import img4 from "../../../assets/Propimg/icon-house.png"
import img5 from "../../../assets/Propimg/icon-housing.png"
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from "../../../Config";
function Prop() {
    const [properties, setProperties] = useState([]);
    const [propertyCount, setPropertyCount] = useState(6);
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedHouse, setSelectedHouse] = useState("");
    const [selectedBed, setSelectedBed] = useState("");
    const [selectedBath, setSelectedBath] = useState("");
    const [wishlistStatus, setWishlistStatus] = useState({});
    const [filteredProperties, setFilteredProperties] = useState([]);
    const location = useLocation()

console.log()

    useEffect(() => {
        
        // axios.get(`http://localhost:8080/prop/${q}`)
        axios.get(`${API_BASE_URL}/prop/${q}`)
          .then((response) => {
            setProperties(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

      useEffect(() => {
      if(location.state.location !== undefined){
        // axios.get("http://localhost:8080/properties")
        axios.get(`${API_BASE_URL}/api/property/all`)
        .then((response) => {
          setProperties(response.data.filter(data => data.location === location.state.location));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      }  
     
      }, [location.state.location]);




    const handleLoadMoreProperties = () => {
        setPropertyCount((prevCount) => prevCount + 4);
    };

  

    const handleSearchProperties = () => {
        const filters = {
            price: selectedPrice,
            type: selectedHouse,
            bed: selectedBed,
            bath: selectedBath,
        };

        let filteredProperties = properties.filter((property) => {
            let typeCondition = true;
            let bedCondition = true;
            let bathCondition = true;

            if (filters.type !== "") {
                typeCondition = property.type === filters.type;
            }
            if (filters.bed !== "") {
                if (filters.bed === "3") {
                    bedCondition = parseInt(property.bed + "+") >= parseInt(filters.bed);
                } else {
                    bedCondition = parseInt(property.bed) === parseInt(filters.bed);
                }

            }


            if (filters.bath !== "") {
                if (filters.bath === "3") {
                    bathCondition = parseInt(property.bath + "+") >= parseInt(filters.bath);
                } else {
                    bathCondition = parseInt(property.bath) === parseInt(filters.bath);
                }
            }

            return typeCondition && bedCondition && bathCondition;
        });
        if (filters.price === "High to Low") {
            filteredProperties = filteredProperties.sort(
                (a, b) =>
                    parseInt(b.price.replace(/\D/g, "")) -
                    parseInt(a.price.replace(/\D/g, ""))
            );
        } else if (filters.price === "Low to High") {
            filteredProperties = filteredProperties.sort(
                (a, b) =>
                    parseInt(a.price.replace(/\D/g, "")) -
                    parseInt(b.price.replace(/\D/g, ""))
            );
        }
        if (filteredProperties.length > 0) {
            console.log("Filtered Properties:", filteredProperties);
        } else {
            console.log("No properties match the selected filters.");

        }

        setFilteredProperties(filteredProperties);

    };

    const handleSellProperties = () => {
        const sellProperties = properties.filter((property) => property.rent === "For Sell");
        console.log("--------------------------", sellProperties);
        setFilteredProperties(sellProperties);
    };

    const handleRentProperties = () => {
        const rentProperties = properties.filter((property) => property.rent === "For Rent");
        console.log("--------------------------", rentProperties);
        setFilteredProperties(rentProperties);
    };
    const handleAddToWishlist = (propertyId) => {
        setWishlistStatus((prevStatus) => {
            return { ...prevStatus, [propertyId]: true };
        });
    };
    const params = new URLSearchParams(window.location.search)
    const q = params.get("query")


    return (
        <Fragment>
            <div>
                <nav className="navbar" id="navbarprop">
                    <div className="logo"><a href="/prop?">Elite Estates</a></div>
                    <div className="navdiv" id = "navdivprop">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Help">Help</a></li>
                        </ul>
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>

                <h4>Showing Results For {q}</h4>


                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                            <h1 className="mb-3">Property Types</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid abc" src={img1} alt="Icon" />
                                        </div>
                                        <h6 className="line">Apartment</h6>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid abc" src={img2} alt="Icon" />
                                        </div>
                                        <h6 className="line">Villa</h6>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid abc" src={img4} alt="Icon" />
                                        </div>
                                        <h6 className="line">Land</h6>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid abc" src={img5} alt="Icon" />
                                        </div>
                                        <h6 className="line">Building</h6>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <section className="search">
                    <div className="price">
                        <select name="price" id="price" value={selectedPrice}
                            onChange={(e) => setSelectedPrice(e.target.value)}>
                            <option value="">Price</option>
                            <option value="Any Price">Any Price</option>
                            <option value="High to Low">High to Low</option>
                            <option value="Low to High">Low to High</option>
                        </select>
                    </div>
                    <div className="house">
                        <select name="house" id="house" value={selectedHouse}
                            onChange={(e) => setSelectedHouse(e.target.value)}>
                            <option value="" >Type of House</option>
                            <option value="Villa">Villa</option>
                            <option value="Building">Building</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Land">Land</option>
                        </select>
                    </div>
                    <div className="bed">
                        <select name="bed" id="bed" value={selectedBed}
                            onChange={(e) => setSelectedBed(e.target.value)}
                            disabled={selectedHouse === "Land" || selectedHouse === "Building"}>
                            <option value="" >Beds</option>
                            <option value="1">1</option>
                            <option value="2">2 </option>
                            <option value="3">3+</option>

                        </select>
                    </div>
                    <div className="bath">
                        <select name="bath" id="bath" value={selectedBath}
                            onChange={(e) => setSelectedBath(e.target.value)}
                            disabled={selectedHouse === "Land" || selectedHouse === "Building"}>
                            <option value="" >Bath</option>
                            <option value="1">1</option>
                            <option value="2">2 </option>
                            <option value="3">3+ </option>
                        </select>
                    </div>
                    <button id="searchprop" className="text-success-emphasis" onClick={handleSearchProperties}>Search</button>
                </section>


                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-0 gx-5 align-items-end">
                            <div className="col-lg-6">
                                <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                    <h1 className="mb-3">Result</h1>
                                </div>
                            </div>
                            <div className="col-lg-6 text-start text-lg-end wow slideInRight" id = "rent-sell-block" data-wow-delay="0.1s">
                                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                    <li className="nav-item me-2" id = "rent-sell">
                                        <a type="button" className="btn btn-outline-primary active ghi poi" data-bs-toggle="pill" href="#tab-1">Featured</a>
                                    </li>
                                    <li className="nav-item me-2" id = "rent-sell">
                                        <a className="btn btn-outline-primary ghi" id= "sellrenthover" data-bs-toggle="pill" href="#tab-2" onClick={handleSellProperties}>For Sell</a>
                                    </li>
                                    <li className="nav-item me-0" id = "rent-sell">
                                        <a className="btn btn-outline-primary ghi" id= "sellrenthover" data-bs-toggle="pill" href="#tab-3" onClick={handleRentProperties}>For Rent</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">

                        {((filteredProperties.length > 0 ?
                            filteredProperties.slice(0, propertyCount) : properties.slice(0, propertyCount)
                        ).map((property, index) => (
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={`0.${index % 10 + 1}s`}
                                key={index}
                            >

                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" id="imgsize" src={property.img} alt="" /></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id= "sellrent">{property.rent}</div>
                                        <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{property.type}</div>
                                    </div>
                                    <div className="property-item rounded overflow-hidden" id= "propertydetails">
                                        <h5 className="text-primary-emphasis mb-3">{property.price}</h5>

                                        <a className="d-block h5 mb-2 text-primary-emphasis" href="">{property.title}</a>

                                        <a className="d-block h5 mb-2 text-primary-emphasis" href="#">{property.title}</a>

                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{property.location}</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{property.sqft}</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{property.bed}</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{property.bath}</small>
                                    </div>
                                    <div className="card text-center" id="wishlist" >
                                    {wishlistStatus[property.id] ? (
                                              <button className="btn btn-primary" id= "wishlisttext"  disabled>
                                                  Added to Wishlist
                                              </button>
                                          ) : (
                                              <button
                                                  className="btn btn-primary" id= "wishlisttext"
                                                  onClick={() => handleAddToWishlist(property.id)  }>
                                                  Add to Wishlist
                                              </button>
                                          )}
                                       
                                    </div>

                                </div>

                            </div>
                        )))}

                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <button className="btn btn-outline-secondary py-3 px-5" id= "browse" onClick={handleLoadMoreProperties}>Browse More Property</button>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                    {((filteredProperties
                            .filter((property) => property.rent === "For Sell")
                            .slice(0, propertyCount)
                            .map((property, index) => (
                                <div
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={`0.${index % 10 + 1}s`}
                                key={index}
                            >

                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" id="imgsize" src={property.img} alt="" /></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{property.rent}</div>
                                        <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{property.type}</div>
                                    </div>
                                    <div className="property-item rounded overflow-hidden">
                                        <h5 className="text-primary-emphasis mb-3">{property.price}</h5>
                                        <a className="d-block h5 mb-2 text-primary-emphasis" href={property.link}>{property.title}</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{property.location}</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{property.sqft}</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{property.bed}</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{property.bath}</small>
                                    </div>
                                    <div className="card text-center">
                                        <a className="btn btn-primary">Add to Wishlist</a>
                                    </div>

                                </div>

                            </div>
                        ))))}

                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <button className="btn btn-outline-secondary py-3 px-5" id= "browse" onClick={handleLoadMoreProperties}>Browse More Property</button>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                    {((filteredProperties
                            .filter((property) => property.rent === "For Rent")
                            .slice(0, propertyCount)
                            .map((property, index) => (
                                <div
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={`0.${index % 10 + 1}s`}
                                key={index}
                            >

                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" id="imgsize" src={property.img} alt="" /></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{property.rent}</div>
                                        <div className="bg-white rounded-top text-primary-emphasis position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{property.type}</div>
                                    </div>
                                    <div className="property-item rounded overflow-hidden">
                                        <h5 className="text-primary-emphasis mb-3">{property.price}</h5>
                                        <a className="d-block h5 mb-2 text-primary-emphasis" href={property.link}>{property.title}</a>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{property.location}</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{property.sqft}</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{property.bed}</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{property.bath}</small>
                                    </div>
                                    <div className="card text-center">
                                        <a className="btn btn-primary">Add to Wishlist</a>
                                    </div>

                                </div>

                            </div>
                        ))))}

                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <button className="btn btn-outline-secondary py-3 px-5" id="browse" onClick={handleLoadMoreProperties}>Browse More Property</button>
                        </div>
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
                            <a href="/prop"><i className="fa-brands fa-facebook"></i></a>
                            <a href="/prop"><i className="fa-brands fa-twitter"></i></a>
                            <a href="/prop"><i className="fa-brands fa-instagram"></i></a>
                            <a href="/prop"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col">
                        <input type="text" name="Name" placeholder="Your Name" required /> <br />
                        <input type="email" name="email" placeholder="Your email" required /> <br />
                        <textarea name="Message" row="6" placeholder="Your Message"></textarea> <br />
                        <button type="submit" id= "submitcp">Submit</button>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Prop;
