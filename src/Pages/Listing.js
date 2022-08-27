import Footer from "../Components/Footer";
import Explore from "../Components/Explore";
import Zomato from "../Images/homepage/foot_logo.jpg"
import Delivery from "../Images/find/delivery.png";
import dine from "../Images/find/dining.png";
import nightlife from "../Images/find/nighylife.webp";
import Max from "../Images/find/max.webp"
import { Link } from "react-router-dom";


const Listing=()=>{
   
            function showfilter(e) {
              var el = document.getElementById("show_filters");
              console.log("fired");
              if (el.className === "show_filters") {
                el.className += " sho";
              } else {
                el.className = "show_filters";
              }
              document.getElementById("default").click();
            }
            function show(e,labelname)
            {
             var label_output=document.getElementsByClassName("label_output");
             for( var i=0;i<label_output.length;i++)
             {
                label_output[i].style.display ="none";
             }
             document.getElementById(labelname).style.display="block";
             var label=document.getElementsByClassName("label");
             for (i=0;i<label.length;i++)
             {
                    label[i].className=label[i].className.replace(" active","");
             }
             e.currentTarget.className += " active";
            }

            
    return(
        <>
            <div id="find_head">
                <div id="find_head_cont">
                    <div id="find_head_cont1">
                        <div id="find_head_cont1_1">
                        <Link to="/homepage">
                            <img src={Zomato} alt="logo"/>
                        </Link>
                        </div>
                        <div id="find_head_cont1_2">
                            <select>
                                <option>Sujanpur</option>
                                <option>Sujanpur</option>
                                <option>Sujanpur</option>
                            </select>
                            <input type="text" placeholder="Search for restaurants ,cousines or a dish"/>
                        </div>
                        <div id="find_head_cont1_3">
                            <i>Login</i>
                            <i>Sign up</i>
                        </div>
                    </div>
                    <div id="find_head_cont2">
                        <span id="path">Home / india / chandigarh / Mohali </span>
                    </div>
                    <div id="find_head_cont3">
                        <div id="find_head_cont3_1" className="find_options">
                            <span><div className="find_options_img" id="food"><img src={Delivery} alt="delivery"/></div><span style={{color: "red"}}>Delivery</span></span>
                        </div>
                        <div id="find_head_cont3_2" className="find_options">
                            <span><div className="find_options_img" id="dining"><img src={dine} alt="dining"/></div><span style={{color:"rgb(105, 105, 105)"}}>Dining</span></span>
                        </div>
                        <div id="find_head_cont3_3" className="find_options">
                            <span><div className="find_options_img" id="nightlife"><img src={nightlife} alt="night"/></div><span style={{color:"rgb(105, 105, 105)"}}>Night life</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="filters">
                <div id="find_head_cont4">
                    <div className="fiter_buttons" onClick={(e)=>showfilter(e)}>
                        <span><i className="fa fa-filter"></i>Filters</span>
                    </div>
                </div>
            </div>
            <div className="show_filters" id="show_filters">
                <div className="show_filters_2">
                    <h1>Filters</h1>
                    <i className="fa fa-remove" onClick={(e)=>showfilter(e)}></i>
                    <div className="tabs">
                        <div className="labels">
                            <div className="label" id="default"  onClick={(e)=>show(e,'sort_by')}>
                                <h1>Sort by</h1>
                            </div>
                            <div className="label"onClick={(e)=>show(e,'Cusines')}>
                                <h1>Cusines</h1>
                            </div>
                            <div className="label"  onClick={(e)=>show(e,'Rating')}>
                                <h1>Rating</h1>
                            </div>
                            <div className="label"   onClick={(e)=>show(e,'Cost_per_person')}>
                                <h1>Cost per person</h1>
                            </div>
                        </div>
                        <div className="label_output" id="sort_by">
                            <form>
                                <div className="radios">
                                    <input type="radio" name="sort_by" id="Popularity"/>
                                    <label htmlFor="Popularity">Popularity</label>
                                </div>
                                <div className="radios">
                                    <input type="radio" name="sort_by" id="Ratings"/>
                                    <label htmlFor="Ratings">Rating: High to Low</label>
                                </div>
                                <div className="radios">
                                    <input type="radio" id="Delivery_Time" name="sort_by" />
                                    <label htmlFor="Delivery_Time">Delivery Time</label>
                                </div>
                                <div className="radios">    
                                    <input type="radio" name="sort_by" id="Cost_Low_to_High" />
                                    <label htmlFor="Cost_Low_to_High">Cost: Low to High</label>
                                </div>
                                <div className="radios">    
                                    <input type="radio" name="sort_by" id="Cost_Hight_to_Low" />
                                    <label htmlFor="Cost_Hight_to_Low">Cost: Hight to Low</label>
                                </div>
                            </form>
                        </div>
                        <div className="label_output" id="Cusines">
                            <form id="rad">
                                <div className="checks">
                                    <input type="checkbox" name="Cousines" id="American"/>
                                    <label htmlFor="American">American</label>
                                </div>
                                <div className="checks">
                                    <input type="checkbox" name="Cousines" id="andhra"/>
                                    <label htmlFor="andhra">andhra</label>
                                </div>
                            </form>
                        </div>
                        <div className="label_output" id="Rating">
                            <h1 style={{color:"red" , margin: "1rem"}}> <span id="demo"></span></h1>
                            <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange"/>
                        </div>
                        <div className="label_output" id="Cost_per_person">
                            <h1 style={{color:"red" , margin: "1rem"}}>Value: <span id="demo1"></span></h1>
                            <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange1"/>
                        </div>
                        
                    </div>
                    
                    <div className="bottom_buttons">
                        <button id="apply">Apply</button>
                    </div>
                </div>
            </div>
            <div id="food_loading_area">
            <div className="food_loading_area_2">
                    <div className="food_item_card">
                        <div className="food_img">
                        </div>
                        <div className="food_item_info">
                            <div className="food_item_info_cont1">
                                <div className="food_name">
                                <p > Bhena da dhaba</p>
                                </div>
                                <div className="food_rating">
                                <p>4.0 <i className="fa fa-star"></i></p>
                                </div>
                            </div>
                            <div className="food_item_info_cont2">
                                <div className="food_cousine">
                                    <p> North indian fast food</p>
                                </div>
                                <div className="food_price">
                                    <p>₹100 for one</p>
                                </div>
                            </div>
                        </div>
                        <hr style={{backgroundColor:"lightgrey", border: "1px solid lightgray"}}/>
                        <div className="food_stats">
                            <p><i className="fa fa-line-chart" style={{color:"white",backgroundColor: "rgb(135, 158, 235)", borderRadius: "50%",padding:"6px",marginRight:"4px"}}></i>
                                23000 orders plced recently
                            </p>
                            <img src={Max} alt="safety"/>
                        </div>
                    </div>
                </div>
            </div>
            
            
        <Explore />
        <Footer />
        </>
    );
}

export default Listing;