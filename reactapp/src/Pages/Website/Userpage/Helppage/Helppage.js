import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./helppage.module.css"
import img1 from "../../../../assets/userpageimg/i1.png"
import img2 from "../../../../assets/userpageimg/i2.png"
import img3 from "../../../../assets/userpageimg/i3.png"



function Helppage(){
    return(
        <div className={classes.main}>
            <div>
                <Navbar/>   
            </div>
            <div className={classes.top}>Get in touch with us for more information</div>
            <div className={classes.middle}>If you have any questions or inquiries, we're here for you</div>
            <div className={classes.bottom}>
                <div className={classes.left}>
                    <img src={img1} alt=""/>
                    <div className={classes.name}>Customer Support</div>
                    <div className={classes.email}>Email : support@sample.com</div>
                    <div className={classes.phone}>Phone : +91 XXXXXXXXX</div>
                </div>
                <div className={classes.center}>
                    <img src={img2} alt=""/>
                    <div className={classes.name}>Sales Enquiries</div>
                    <div className={classes.email}>Email : support@sample.com</div>
                    <div className={classes.phone}>Phone : +91 XXXXXXXXX</div>
                </div>
                <div className={classes.right}>
                    <img src={img3} alt=""/>
                    <div className={classes.name}>Media Enquiries</div>
                    <div className={classes.email}>Email : support@sample.com</div>
                    <div className={classes.phone}>Phone : +91 XXXXXXXXX</div>
                </div>
            </div>
        </div>
    );
}
export default Helppage