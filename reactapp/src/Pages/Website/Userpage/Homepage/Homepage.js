import React,{useState} from "react"
import classes from "./homepage.module.css";
import Navbar from "../../../../Components/Navbar/Navbar";
import img1 from "../../../../assets/userpageimg/search.png";
import img2 from "../../../../assets/userpageimg/homepage1.jpg";
import img3 from "../../../../assets/userpageimg/homepage2.jpg";
import img4 from "../../../../assets/userpageimg/homepage3.jpg";
import r1 from "../../../../assets/userpageimg/r1.png";
import r2 from "../../../../assets/userpageimg/r2.png";
import r3 from "../../../../assets/userpageimg/r3.png";
import icon_1 from "../../../../assets/userpageimg/icon-1.png";
import icon_2 from "../../../../assets/userpageimg/icon-2.png";
import icon_3 from "../../../../assets/userpageimg/icon-3.png";
import icon_4 from "../../../../assets/userpageimg/icon-4.png";
import icon_5 from "../../../../assets/userpageimg/icon-5.png";
import icon_6 from "../../../../assets/userpageimg/icon-6.png";
import { useNavigate } from "react-router-dom";
function Homepage() {
    const[query,setQuery]=React.useState("");
    const history=useNavigate();

    const handleSearch = () => {
        
        history(`/results?query=${encodeURIComponent(query)}` ,{state:{location:query}});
      };


  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <Navbar />
      </div>
      <div className={classes.welcome}>Welcome to Sample</div>
      <div className={classes.quote}>Find your dream property with ease</div>
      <div className={classes.container}>
        <form className={classes.search_bar}>
        
          <input type="search" placeholder="Search Location"
                    onChange={(e)=>setQuery(e.target.value)}></input>
                    <button type="submit" onClick={handleSearch}><img src={img1} alt=""/></button>
        
        </form>
      </div>
      <div className={classes.display}>
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className={classes.lines}>
        <div className={classes.img2}>
          Unlock the door to your new beginning.
        </div>
        <div className={classes.img3}>Discover the joy of homeownership.</div>
        <div className={classes.img4}>
          Your perfect home is waiting to embrace you.
        </div>
      </div>
      <div className={classes.why}>Why choose us?</div>
      <div className={classes.r}>
        <div className={classes.r1}>
          <img src={r1} alt="" />
          <div className={classes.heading}>Wide Selection</div>
          <div className={classes.text}>
            Explore a diverse range of properties for sale or rent. Find your
            dream home, whether it's a cozy apartment, a spacious family house,
            or an elegant luxury property. Discover the perfect property that
            matches your preferences and budget in desirable locations.{" "}
          </div>
        </div>
        <div className={classes.r2}>
          <img src={r2} alt="" />
          <div className={classes.heading}>User-friendly interface</div>
          <div className={classes.text}>
            Effortlessly navigate through our extensive property listings. Find
            your ideal home or investment opportunity with ease. Explore and
            discover properties that match your preferences and requirements.
          </div>
        </div>
        <div className={classes.r3}>
          <img src={r3} alt="" />
          <div className={classes.heading}>Expert Agents</div>
          <div className={classes.text}>
            Connect with experienced real estate agents for personalized
            assistance. Our team of professionals is here to guide you through
            the buying or renting process. Benefit from their expertise and make
            informed decisions with their support.
          </div>
        </div>
      </div>
      <div className={classes.options}>
        <div className={classes.our_services}>Our services</div>
        <div className={classes.t}>
          <div className={classes.t1}>
            <img src={icon_1} alt="" />
            <h1>Buy House</h1>
          </div>
          <div className={classes.t2}>
            <img src={icon_2} alt="" />
            <h1>Rent House</h1>
          </div>
          <div className={classes.t3}>
            <img src={icon_3} alt="" />
            <h1>Sell House</h1>
          </div>
        </div>
        <div className={classes.b}>
          <div className={classes.b1}>
            <img src={icon_4} alt="" />
            <h2>Flats And Buildings</h2>
          </div>
          <div className={classes.b2}>
            <img src={icon_5} alt="" />
            <h2>Shops And Malls</h2>
          </div>
          <div className={classes.b3}>
            <img src={icon_6} alt="" />
            <h1>24/7 Service</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
