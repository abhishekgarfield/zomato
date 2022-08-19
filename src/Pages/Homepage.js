import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Apple from "../Images/homepage/apple.png";
import Google from "../Images/homepage/google_play.png";
import Appdownload from "../Images/homepage/app_download.jpg";
import Order from "../Images/homepage/explore.jpg";
import Title from "../Images/homepage/title_img.png"
import Explore from "../Components/Explore";
import { Link } from "react-router-dom";

const Homepage=()=>{
    return(
        <>
            <header>
                <div className="head_cont1">
                    <Navbar />
                    <div id="nav_title">
                        <img src={Title} alt="company logo"/>
                    </div>
                    <div id="nav_info">
                        <h1>Discover the best food & drinks in Chhindwara</h1>
                    </div>
                    <div id="nav_options" >
                        <select>
                            <option>--Select city--</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                        </select>
                        <select >
                            <option>--Select Food--</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                            <option>Sujanpur tira</option>
                        </select>
                    </div>
                </div>

            </header>
            <div id="order_online">
                <Link to="/Listing">
                    <div id="online_cont1">
                        <img src={Order} alt="Order food"/>
                            <h5>Order online</h5>
                            <p>Stay home and order to your doorstep</p>
                    </div>
                </Link>
                <div id="online_cont2">
                    <h2>Popular localities in and around Chhindwara</h2>
                    <div id="popular_local">
                        <h4>Chondwara locality</h4>
                        <p>250 places</p>
                    </div>
                </div>
            </div>
            <div id="app_download">
                <div id="app_download_cont1">
                    <div id="app_download_img">
                        <img src={Appdownload} alt="Download"/>
                    </div>
                    <div id="app_download_form">
                        <h1>Get the Zomato app</h1>
                        <h3>We will send you a link, open it on your phone to download the app</h3>
                        <input type="radio" name="choose" value="email"/><span style={{paddingLeft: "10px",paddingRight:"70px",fontSize: "18px"}}>Email</span>
                        <input type="radio" name="choose" value="phone"/><span style={{paddingLeft: "10px",paddingRight:"70px",fontSize: "18px"}}>Phone</span>
                        <input type="text" placeholder="Email"/><button>Share App link</button>
                        <h5>Download app from </h5>
                        <img src={Google} alt="google play store"/>
                        <img src={Apple} alt="apple" />
                    </div>
                </div>
            </div>
            <Explore />
            <Footer />
        </>
    );
}

export default Homepage;