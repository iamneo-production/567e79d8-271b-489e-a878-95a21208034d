import React, { useEffect } from "react";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import MapLink from "../../../Components/MapLink";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Header.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { API_BASE_URL } from "../../../Config";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { del, get,post } from "../../../Config/services";
const Header = ({ property,Id}) => {
  // current page url
  const currentPageUrl = window.location.href;
  //const currentPageUrl = "http://192.168.195.123:3000/";
  const token = localStorage.getItem("token");
  //fav icon
  const [addToFav, setAddToFav] = useState(false);
  const [favLoad, setFavLoad] = useState(true);
  const userId=10;
  //const GET_URL="http://localhost:7070/favourites/";
  const GET_URL=`${API_BASE_URL}/api/userwishlist/`;
  const handleFavClick = () => {
    //setAddToFav(!addToFav);
    if(addToFav){
      const getFavId=async ()=>{
        try{
          const res=await get(GET_URL+userId+"/"+Id);
          const responseFav=await res;
          const DEL_URL=`${API_BASE_URL}/api/userwishlist/`+responseFav.id;
            const deleteOptions={
              method:"DELETE"
            }
            const result=await del(DEL_URL);
        }
        catch(err){
          console.log(err.stack);
        }
      }
      getFavId();
    }  
    else{
      const API_URL=`${API_BASE_URL}/api/userwishlist`;
      const addNewFav = async () =>{
        const newFav={"propertyId":Id,"userId":userId};
        const postOptions={
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(newFav)
        };
        const result=await post(API_URL,newFav);
      }
      addNewFav();
    }
    toast(
      !addToFav ? "Added to your favourites" : "Removed from your favourites",
      {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
    setAddToFav(!addToFav);
  };
  var title,status,address;
  const Property_URL = `${API_BASE_URL}/api/properties/`;
  const [loadDisplay,setLoadDisplay]=useState({});
  useEffect(()=>{
    const fetchItems=async () => {
      try{
        const response= await get(Property_URL+Id);
        const listItems=await response;
        console.log(listItems);
        const display={
          title:listItems.title,
          status:listItems.status,
          address:listItems.address
        }
        setLoadDisplay(display);
      }
      catch(err){
        console.log(err.stack);
      }
    };
    fetchItems();
  },[]);
  useEffect(() => {
    const getFavId=async ()=>{
      try{
        const response=await get(GET_URL+userId+"/"+Id);
        const responseFav=await response;
        if(responseFav!=null){
          setAddToFav(true);
        }
        else{
          setAddToFav(false);
        }
      }
      catch(err){
        console.log(err.stack);
      }
    }
    getFavId();
  }, []);
  //share icon
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCopy(false);
  };
  const handleShow = () => setShow(true);
  const [copy, setCopy] = useState(false);
  return (
    <>
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>
            {loadDisplay.title} for {loadDisplay.status}
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "15%",
              alignItems: "center",
            }}
          >
            {addToFav ? (
              <p
                className="remove-from-fav-icon"
                style={{ fontSize: "30px" }}
                onClick={() => handleFavClick()}
              >
                <AiFillHeart
                  role="button"
                  title="Remove from your favourites"
                />
              </p>
            ) : (
              <p
                className="add-to-fav-icon"
                style={{ fontSize: "30px" }}
                onClick={() => handleFavClick()}
              >
                <AiOutlineHeart role="button" title="Add to your favourites" />
              </p>
            )}
            <p style={{ fontSize: "30px" }}>
              <AiOutlineShareAlt
                role="button"
                title="Share now"
                onClick={handleShow}
              />
            </p>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Share Now</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <EmailShareButton url={currentPageUrl}>
                    <EmailIcon style={{ width: "90%" }} />
                  </EmailShareButton>
                  <WhatsappShareButton url={currentPageUrl}>
                    <WhatsappIcon style={{ width: "90%" }} />
                  </WhatsappShareButton>
                  <FacebookShareButton url={currentPageUrl}>
                    <FacebookIcon style={{ width: "90%" }} />
                  </FacebookShareButton>
                  <TelegramShareButton url={currentPageUrl}>
                    <TelegramIcon style={{ width: "90%" }} />
                  </TelegramShareButton>
                  <TwitterShareButton url={currentPageUrl}>
                    <TwitterIcon style={{ width: "90%" }} />
                  </TwitterShareButton>
                  <LinkedinShareButton url={currentPageUrl}>
                    <LinkedinIcon style={{ width: "90%" }} />
                  </LinkedinShareButton>
                </div>
                <InputGroup
                  className="mb-3 border border-dark rounded"
                  style={{
                    marginTop: "2%",
                  }}
                >
                  <Form.Control value={currentPageUrl} readOnly />
                  <CopyToClipboard
                    text={currentPageUrl}
                    onCopy={() => setCopy(true)}
                  >
                    <Button
                      variant={copy ? "dark" : "outline-dark"}
                      className="copy-button"
                    >
                      {copy ? "Copied" : "Copy"}
                    </Button>
                  </CopyToClipboard>
                </InputGroup>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="header-detail">
            <BiMap />
            <span>
              {loadDisplay.address} 
            </span>
          </p>
          <section>
            <MapLink />
          </section>
        </div>
        <p>Posted by {property.Agent.agentName}</p>
      </header>
      <ToastContainer newestOnTop={true} />
    </>
  );
};

export default Header;
