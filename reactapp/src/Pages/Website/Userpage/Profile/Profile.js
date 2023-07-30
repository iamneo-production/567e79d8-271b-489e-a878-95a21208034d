import classes from "./profile.module.css"

function Profile(){
    return(
        <div className={classes.main}>
            <div className={classes.box}>
                <div className={classes.top}>Profile Details</div>
                <div className={classes.bottom}>
                   <ul> 
                    <li><a href="#">MyProfile</a></li>
                    <li><a href="#">Favourites</a></li>
                    <li><a href="#">Logout</a></li>
                   </ul> 
                </div>
            </div>
        </div>
    );
}

export default Profile