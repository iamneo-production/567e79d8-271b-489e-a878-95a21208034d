import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import FormGroup from "react-bootstrap/esm/FormGroup";
import * as Yup from 'yup';
import { useFormik } from "formik";

function AddProperty() {
  let navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    Price: "",
    PropertyAddress: "",
    sqft: ""
  });
  
  const validationSchema = Yup.object().shape({
    Price : Yup.string().required('Price is required'),
    PropertyAddress : Yup.string().required('Property Address is required'),
    sqft: Yup.string().required('sqft is required'),

  });
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      onSubmit(values);
    },
  });

  const [propertyType, setPropertyType] = useState("");

  const { Price, PropertyAddress, sqft ,floorPlan , fNobNo ,BlockfNobNo} = initialValues;
 

  const onInputChange = (e) => {
    //spread operator (since we are giving only name field)
    //new update will keep on adding
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
    //check in components
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //we are sending user so User
    console.log(initialValues);
    await axios.post("http://localhost:8080/agent", initialValues);
    // console.log(res);
    navigate("/");  
  }
  
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  // const [contactNumber, setContactNumber] = useState('');
  // const handleContactNumberChange = (event) => {
  //   setContactNumber(event.target.value);
  // };

  const [videoUrl, setVideoUrl] = useState('');
  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(options);
  };

  return ( 
    <div className="container">
      <div className="row">
        {/*col-md-6 : colums of medium size with 6 span */}
        <div
          className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}
        >
          <h2 className={"text-center m-4"}>Add Property</h2>

          <form onSubmit={ formik.onSubmit}>
            {/* <div className={"mb-3"}>
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
            </div> */}

            {/* <div className={"mb-3"}>
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
            </div> */}

            {/* <div className={"mb-3"}>
              <label htmlFor={"contactNumber"} className={"form-label"}>
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
            </div> */}

            <div className={"mb-3"}>
              <Form.Group as={Col} controlId="formGridType">
                <Form.Label>Transaction Type</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Transaction Type</option>
                  <option>Sale</option>
                  <option>Rent</option>
                  <option>Lease</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className={"mb-3"}>
              <Form.Group as={Col} controlId="formGridType">
                <Form.Label>Property</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e) => { setPropertyType(e.target.value); console.log("==============", e.target.value); }}>
                  <option>Property</option>
                  <option>Building</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Land</option>

                </Form.Select>
              </Form.Group>
            </div>

            {propertyType === "Villa" ? 
            <><div className={"mb-3"}>
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
              <label htmlFor={"Name"} className={"form-label"}>
                Sq.Ft
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Sq.Ft "}
                value={sqft}
                onChange={(e) => onInputChange(e)}
              />
              </div>

              <div className={"mb-3"}>
              <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>No. of Toilets</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className={"mb-3"}>
              <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Parking Space</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose</option>
                    <option>Available</option>
                    <option>Not Available</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div>
              <label htmlFor={"Name"} className={"form-label"}>
                Floor Plan
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter no. of floor "}
                name={"floorPlan"}
                value={floorPlan}
                onChange={(e) => onInputChange(e)}
              />
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

              </>

            : null }  


            {propertyType === "Building" ? 
            <>
            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Sq.Ft
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Sq.Ft "}
                name={"sqft"}
                value={sqft}
                onChange={(e) => onInputChange(e)}
              />
              </div>

              <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Floor No, Building No
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Ex - GF,1 "}
                name={"fNobNo"}
                value={fNobNo}
                onChange={(e) => onInputChange(e)}
              />
              </div>

              <div className={"mb-3"}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Floor Plan</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            </>
            :null}
            

            {propertyType === "Land" ? 
            <>
            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Sq.Ft
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Sq.Ft "}
                value={initialValues.sqft}
                onChange={(e) => onInputChange(e)}
              />
              {formik.touched.sqft && formik.errors.sqft && (
                      <div>
                        <span role="alert" style={{ color: "red" }}>
                          {formik.errors.sqft}
                        </span>
                      </div>
              )}
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
            </>

            :null}

            {propertyType === "Apartment" ? 
            <>
            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Block, Floor No, Door No
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Ex - A, GF, 1 "}
                name={"BlockfNobNo"}
                value={BlockfNobNo}
                onChange={(e) => onInputChange(e)}
               />
            </div>

            <div className={"mb-3"}>
              <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Parking Space</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose</option>
                    <option>Available</option>
                    <option>Not Available</option>
                  </Form.Select>
                </Form.Group>
            </div>

            </>
            :null}

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
              <label htmlFor={"Name"} className={"form-label"}>
                Price
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"INR"}
                value={initialValues.Price}
                onChange={(e) => onInputChange(e)}
              />
              {formik.touched.Price && formik.errors.Price && (
                      <div>
                        <span role="alert" style={{ color: "red" }}>
                          {formik.errors.Price}
                        </span>
                      </div>
              )}
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
              <label htmlFor={"Name"} className={"form-label"}>
                Property Address
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Property address"}
                value={initialValues.PropertyAddress}
                onChange={(e) => onInputChange(e)}
              />
              {formik.touched.PropertyAddress && formik.errors.PropertyAddress && (
                      <div>
                        <span role="alert" style={{ color: "red" }}>
                          {formik.errors.PropertyAddress}
                        </span>
                      </div>
              )}
            </div>

            <div className={"mb-3"}>
              <Form.Label>Amenities</Form.Label>
              <Form.Check 
               type={"checkbox"}
               label={"Water Supply"}
              />
              <Form.Check 
               type={"checkbox"}
               label={"Swimming Pool"}
              />
              <Form.Check 
               type={"checkbox"}
               label={"Gym"}
              />
              <Form.Check 
               type={"checkbox"}
               label={"Play Ground"}
              />
              <Form.Check 
               type={"checkbox"}
               label={"Elevators"}
              />
              <Form.Check 
               type={"checkbox"}
               label={"Garden"}
              />
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
            
            <div className="row">
              <div className={"mb-3"}>
              <Form.Group as={Col} controlId="formGridNearbyLocation">
              <Form.Label>Nearby Location</Form.Label>
              <Form.Control />
              </Form.Group>
              </div>
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