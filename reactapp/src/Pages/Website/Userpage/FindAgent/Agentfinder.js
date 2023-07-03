import Navbar from "../../../../Components/Navbar/Navbar";
import classes from "./agent.module.css"

function Agentfinder() {
  return (
    <div className={classes.main}>
        <div>
                <Navbar/>   
        </div>
        <div className={classes.innerbox}>
            <div className={classes.toptxt}>
                <h3 className={classes.heading}>FIND THE AGENT YOUR LOOKING FOR </h3>
            </div>
            <div className={classes.bottom}>
                <div className={classes.bottomtop}>
                    <div className={classes.form}>
                        <form action="./" className={classes.format}>
                            <input type="text" placeholder="Agent"/>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="city or pincode" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className={classes.para}>
                        <p className={classes.parain}><br />
                        Why our Agents are the one for you
                        <br />
                        <br />
                        At our website,Your trust and satisfication are our top priorities. We go the extra mile to ensure that all our real
                        <br />
                        estate agents and properties are throughly verified by our diligent admin team before being displayed to you, our
                        <br />
                        valued user. With our stringent verification process, you can rest assured that you are browsing through a curated
                        <br />
                        selection of reliable and trustworthy agents and properties.
                        </p>
                    </div>
                </div>
                <div className={classes.bottommiddle}></div>
                <div className={classes.bottomlast}></div>
            </div>
        </div>
    </div>
  );
}

export default Agentfinder;