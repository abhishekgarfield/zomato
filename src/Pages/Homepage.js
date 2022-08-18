import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Apple from "../Images/homepage/apple.png";
import Google from "../Images/homepage/google_play.png";
import Appdownload from "../Images/homepage/app_download.jpg";
import Explore from "../Images/homepage/explore.jpg";
import Title from "../Images/homepage/title_img.png"

const Homepage=()=>{
    const handleClick = (e,option,arrow_pos)=>{
 console.log(option);
            const el=document.getElementById(option);
            const arrow=document.getElementsByClassName("arrows");
            const temp=arrow[arrow_pos];
            console.log(arrow);
            console.log("triggered");
            if(el.className=="option")
            {
                el.className+=" sho";
                temp.className="arrows fa fa-angle-up";
            }
            else
            {
                el.className="option";
                temp.className="arrows fa fa-angle-down";
            }
        }

    return(
        <>
            <header>
                <div className="head_cont1">
                    <Navbar />
                    <div id="nav_title">
                        <img src={Title}/>
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
                <a href="html/find.html">
                    <div id="online_cont1">
                        <img src={Explore} />
                            <h5>Order online</h5>
                            <p>Stay home and order to your doorstep</p>
                    </div>
                </a>
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
                        <img src={Appdownload}/>
                    </div>
                    <div id="app_download_form">
                        <h1>Get the Zomato app</h1>
                        <h3>We will send you a link, open it on your phone to download the app</h3>
                        <input type="radio" name="choose" value="email"/><span style={{paddingLeft: "10px",paddingRight:"70px",fontSize: "18px"}}>Email</span>
                        <input type="radio" name="choose" value="phone"/><span style={{paddingLeft: "10px",paddingRight:"70px",fontSize: "18px"}}>Phone</span>
                        <input type="text" placeholder="Email"/><button>Share App link</button>
                        <h5>Download app from </h5>
                        <img src={Google}/>
                        <img src={Apple}/>
                    </div>
                </div>
            </div>
            <div id="explore">
                <div id="exp_cont1">
                    <h1>Explore options near me</h1>
                    <div id="exp_option" onClick={(e)=>handleClick(e,'option_1',0)}>
                        <h2> Popular cuisines near me <i className=" arrows fa fa-angle-down" style={{float: "right"}}></i></h2>
                        <div id="option_1" className="option">
                            Bakery food near meBeverages food near meBiryani food near meBurger food near
                            meChinese food near meContinental food near meDesserts food near meIce Cream food near
                            meItalian food near meMithai food near meMomos food near meMughlai food near meNorth Indian
                            food
                            near mePizza food near meRolls food near meSandwich food near meShake food near meSouth
                            Indian food near
                            meStreet food near meWraps food near me
                        </div>
                    </div>
                    <div id="exp_option2" onClick={(e)=>handleClick(e,'option_2',1)}>
                        <h2>Popular restaurant types near me <i className=" arrows fa fa-angle-down" style={{float: "right"}}></i>
                        </h2>
                        <div id="option_2" className="option">
                            Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual
                            Dining near meClubs near meConfectioneries near meDessert Parlors near meDhabas near meFine
                            Dining near meFood Courts near meFood Trucks near meKiosks
                            near meLounges near meMicrobreweries near mePaan Shop near mePubs near meQuick Bites near
                            meSweet Shops near me
                        </div>
                    </div>
                    <div id="exp_option3" onClick={(e)=>handleClick(e,'option_3',2)}>
                        <h2>Cities We Deliver To <i className=" arrows fa fa-angle-down" style={{float: "right"}}></i></h2>
                        <div id="option_3" className="option">
                            Dining near meClubs near meConfectioneries near meDessert Parlors near meDhabas near meFine
                            Dining near meFood Courts near meFood Trucks near meKiosks
                            near meLounges near meMicrobreweries near mePaan Shop near mePubs near meQuick Bites near
                            meSweet Shops near me

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Homepage;