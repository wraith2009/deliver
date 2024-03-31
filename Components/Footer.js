import logofooter from '../images/food app footer.jpg'

const Footer = () => {
    return(
        <div className="Footer-main">
             <div className="upper-section">
                <span className="text-1">For better experience , download the app now</span>
                <div className="googleplay">
                    <div className="left">
                        <img src="https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png"/>
                    </div>
                    <div className="right">
                        <span className="upperspan">GET IT ON</span>
                        <span className="lowerspan">Google Play</span>
                    </div>
                </div>
                <div className="appstore">
                <div className="left">
                        <img src="https://purepng.com/public/uploads/large/purepng.com-app-store-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596490omztf.png"/>
                    </div>
                    <div className="right">
                        <span className="upperspan">Download on the</span>
                        <span className="lowerspan">App Store</span>
                    </div>
                </div>
             </div>
             <div className="lower-section">
                <div className="credit-sec">
                    <img src={logofooter}/>
                    <p>created by <span>Rahul Bhardwaj</span></p>
                </div>
                <div className="Company">
                    <h3>Company</h3>
                    <ul className="company-ul">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>App One</li>
                        <li>Instamart</li>
                        {/* <l1>Genie</l1> */}
                    </ul>
                </div>
                <div className="Contact">
                    <h3>Contact us</h3>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>
                <div className="delivery">
                    <h3>We deliver to:</h3>
                    <ul>
                        <li>Delhi</li>
                        <li>Gurgaon</li>
                        <li>Hydrabad</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                </div>
             </div>
        </div>
    )
}

export default Footer;