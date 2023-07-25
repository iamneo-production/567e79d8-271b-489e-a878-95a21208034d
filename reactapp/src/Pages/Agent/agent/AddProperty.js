import React, { useState } from "react";
// import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


  

  


function AddProperty() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
      name: "",
      email: "",
      Price: "",
      PropertyAddress: "",
    });

    
    const { name, email, Price, PropertyAddress } = user;
    
    const onInputChange = (e) => {
      //spread operator (since we are giving only name field)
      //new update will keep on adding
      setUser({ ...user, [e.target.name]: e.target.value });
      //check in components
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      //we are sending user so User
      console.log(user);
    //   await axios.post("http://localhost:8080/agent", user);
      // console.log(res);
      navigate("/");
    };

   
    const [imageUrl, setImageUrl] = useState('');

    const handleInputChange = (event) => {
    setImageUrl(event.target.value);
    };

    const [contactNumber, setContactNumber] = useState('');
    const handleContactNumberChange = (event) => {
      setContactNumber(event.target.value);
    };
 
    const [videoUrl , setVideoUrl] = useState('');
    const handleVideoUrlChange = (event) => {
      setVideoUrl (event.target.value);
    };

    return (
      <div className="container">
        <div className="row">
          {/*col-md-6 : colums of medium size with 6 span */}
          <div
            className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}
          >
            <h2 className={"text-center m-4"}>Add Property</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className={"mb-3"}>
                <label htmlFor={"Name"} className={"form-label"}>
                  Name
                </label>
                <input
                  type={"text"}
                  className={"form-control"}
                  placeholder={"Enter Name"}
                  name={"name"}
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  required />
              </div>

              <div className={"mb-3"}>
                <label htmlFor={"Name"} className={"form-label"}>
                  Email
                </label>
                <input
                  type={"text"}
                  className={"form-control"}
                  placeholder={"Enter email address"}
                  name={"email"}
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  required />
              </div>

              <div className={"mb-3"}>
                <label htmlFor={"contactNumber"} className = {"form-label"}>
                Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter your contact number"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                  required // Mark the field as required
                />
              </div>

              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Property</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Property</option>
                    <option>Building</option>
                    <option>Villa</option>
                    <option>Appartment</option>
                    <option>Land</option>
                  </Form.Select>
                </Form.Group>
              </div>
              


              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Property Type</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Property Type</option>
                    <option>Sale</option>
                    <option>Rent</option>
                    <option>Lease</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Direction</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Direction</option>
                    <option>North</option>
                    <option>South</option>
                    <option>East</option>
                    <option>West</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>No. of Bedrooms</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className={"mb-3"}>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Endorsements</Form.Label>
                  <Form.Select defaultValue="Choose..">
                    <option>Choose..</option>
                    <option>Attached</option>
                    <option>No Attachments</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className={"mb-3"}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Testimonials if any</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </div>

              <div className={"mb-3"}>
                <label htmlFor={"Name"} className={"form-label"}>
                  Price
                </label>
                <input
                  type={"text"}
                  className={"form-control"}
                  placeholder={"INR"}
                  name={"Price"}
                  value={Price}
                  onChange={(e) => onInputChange(e)}
                  required />
              </div>

              <div className={"mb-3"}>
                <label htmlFor={"Name"} className={"form-label"}>
                  Property Address
                </label>
                <input
                  type={"text"}
                  className={"form-control"}
                  placeholder={"Enter Property address"}
                  name={"PropertyAddress"}
                  value={PropertyAddress}
                  onChange={(e) => onInputChange(e)}
                  required />
              </div>

              <div className={"mb-3"}>
                  <Form.Group controlId="formImageUrl">
                    <Form.Label>Add Image 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the image URL"
                      value={imageUrl}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
              </div>

              <div className={"mb-3"}>
                  <Form.Group controlId="formImageUrl">
                    <Form.Label>Add Image 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the image URL"
                      value={imageUrl}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
              </div>

              <div className={"mb-3"}>
                  <Form.Group controlId="formImageUrl">
                    <Form.Label>Add Image 3</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the image URL"
                      value={imageUrl}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
              </div>

              <div className={"mb-3"}>
                  <Form.Group controlId="VideoUrl">
                    <Form.Label>Add Video Url</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the video URL"
                      value={videoUrl}
                      onChange={handleVideoUrlChange}
                    />
                  </Form.Group>
              </div>

              <div className={"mb-3"}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chhattisgarh</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Odisha</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                      <option>Uttar Pradesh</option>
                      <option>Uttarakhand</option>
                      <option>West Bengal</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Pin</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>
              </div>

              <button type={"submit"} className={"btn btn-outline-primary"}>
                Submit
              </button>

              <Link className={"btn btn-outline-danger mx-2"} to={"/"}>Cancel</Link>

            </form>
          </div>
        </div>
      </div>
    );
  }
export default AddProperty;