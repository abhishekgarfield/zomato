import Apple from "../Images/homepage/apple.png";
import Google from "../Images/homepage/google_play.png";
import Zomato from "../Images/homepage/foot_logo.jpg"
const Footer =() =>{
    return(
        <>
            <footer>
                <div id="logo">
                    <img src={Zomato} alt="company logo"/>
                        <div id="foot_option">
                            <div id="foot_option_select1">
                                <select>
                                    <option>India</option>
                                    <option>India</option>
                                    <option>India</option>
                                    <option>India</option>
                                    <option>India</option>
                                </select>
                            </div>
                            <div id="foot_option_select2">
                                <select>
                                    <option>English</option>
                                    <option>India</option>
                                    <option>India</option>
                                    <option>India</option>
                                    <option>India</option>
                                </select>
                            </div>
                        </div>
                </div>
                <div className="foot_cont">
                    <ul>
                        <li><b>ABOUT ZOMATO</b></li>
                        <li>Who we are</li>
                        <li>Blog</li>
                        <li>Work with us</li>
                        <li>Invstor relatiosn</li>
                        <li>Report fraud</li>
                    </ul>
                </div>
                <div className="foot_cont">
                    <ul>
                        <li><b>ZOMAVERSE</b></li>
                        <li>Zomato</li>
                        <li>Feeding India</li>
                        <li>Hyperpure</li>
                        <li>Zomaland</li>
                    </ul>
                </div>
                <div className="foot_cont">
                    <ul>
                        <li><b>FOR RESTAURANTS</b></li>
                        <li>Partner with us</li>
                        <li>Apps for you</li>
                    </ul>
                    <ul>
                        <li><b> FOR ENTERPRISES</b></li>
                        <li>Zomato for work</li>
                    </ul>
                </div>
                <div className="foot_cont">
                    <ul>
                        <li><b>LEARN MORE</b></li>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="foot_cont" id="social_link">
                    <ul>
                        <li><b>SOCIAL LINKS</b></li>
                        <li><i className="fa fa-linkedin"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-facebook"></i>
                        </li>
                        <li><img src={Apple} alt="apple"/></li>
                        <li><img src={Google}  alt="GOOGLE"/></li>
                    </ul>
                </div>
                <hr style={{clear:"both"}}></hr>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and
                    Content Policies. All trademarks are properties of their respective owners.
                    2021-2022  &copy; abhishekgarfield Ltd. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;