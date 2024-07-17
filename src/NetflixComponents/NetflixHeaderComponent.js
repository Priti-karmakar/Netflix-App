import "./NetflixHeaderComponent.css";
import NetflixLanguageSelectionComponent from "./SmallerComponent/NetflixLanguageSelectionComponent";


export default function NetflixHeaderComponent(){
    return(
        <div className="netflix_header text-white">
            <div className="d-flex justify-content-between">
                <div>
                    <img alt="Netflix_Logo" width="180"/>
                </div>
                <div className="d-flex">
                    <NetflixLanguageSelectionComponent/>
                    <button className="signin-btn">Sign In</button>
                </div>
            </div>
        </div>
    );
}