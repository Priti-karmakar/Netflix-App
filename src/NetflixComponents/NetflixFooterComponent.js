import "./NetflixFooterComponent.css"
import NetflixLanguageSelectionComponent from "./SmallerComponent/NetflixLanguageSelectionComponent";

export default function NetflixFooterComponent(){
    return(
        <div className="text-white bg-black footerComp">
            Questions? Call <u>000-800-919-1694</u>
            <div className="row text-decoration-underline">
                <div className="col">
                    <ul className="list-unstyled">
                        <li>FAQ</li>
                        <li>Inverstor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-unstyled">
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal notices</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-unstyled">
                        <li>Accounts</li>
                        <li>Ways to Watch</li>
                        <li>Coorporate Information</li>
                        <li>Only on netflix</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-unstyled">
                        <li>Media Centre</li>
                        <li>Terms of use</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                
            </div>
            <div className="row">
                <NetflixLanguageSelectionComponent/>
            </div>
            <div className="row">
                <p>Netflix india</p>
            </div>
        </div>
    );
}