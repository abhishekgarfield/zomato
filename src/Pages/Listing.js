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
                        <div id="find_head_cont3_1" class="find_options">
                            <span><div class="find_options_img" id="food"><img src={Delivery} alt="delivery"/></div><span style={{color: "red"}}>Delivery</span></span>
                        </div>
                        <div id="find_head_cont3_2" class="find_options">
                            <span><div class="find_options_img" id="dining"><img src={dine} alt="dining"/></div><span style={{color:"rgb(105, 105, 105)"}}>Dining</span></span>
                        </div>
                        <div id="find_head_cont3_3" class="find_options">
                            <span><div class="find_options_img" id="nightlife"><img src={nightlife} alt="night"/></div><span style={{color:"rgb(105, 105, 105)"}}>Night life</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="filters">
                <div id="find_head_cont4">
                    <div class="fiter_buttons" onClick={(e)=>showfilter(e)}>
                        <span><i class="fa fa-filter"></i>Filters</span>
                    </div>
                </div>
            </div>
            <div class="show_filters" id="show_filters">
                <div class="show_filters_2">
                    <h1>Filters</h1>
                    <i class="fa fa-remove" onClick={(e)=>showfilter(e)}></i>
                    <div class="tabs">
                        <div class="labels">
                            <div class="label" id="default"  onClick={(e)=>show(e,'sort_by')}>
                                <h1>Sort by</h1>
                            </div>
                            <div class="label"onClick={(e)=>show(e,'Cusines')}>
                                <h1>Cusines</h1>
                            </div>
                            <div class="label"  onClick={(e)=>show(e,'Rating')}>
                                <h1>Rating</h1>
                            </div>
                            <div class="label" Cost_per_person  onClick={(e)=>show(e,'Cost_per_person')}>
                                <h1>Cost per person</h1>
                            </div>
                        </div>
                        <div class="label_output" id="sort_by">
                            <form>
                                <div class="radios">
                                    <input type="radio" name="sort_by" id="Popularity"value="Popularity"/>
                                    <label for="Popularity">Popularity</label>
                                </div>
                                <div class="radios">
                                    <input type="radio" name="sort_by" id="Ratings" value="Rating"/>
                                    <label for="Ratings">Rating: High to Low</label>
                                </div>
                                <div class="radios">
                                    <input type="radio" id="Delivery_Time" name="sort_by" value="Delivery_Time"/>
                                    <label for="Delivery_Time">Delivery Time</label>
                                </div>
                                <div class="radios">    
                                    <input type="radio" name="sort_by" id="Cost_Low_to_High" value="Cost_Low_to_High"/>
                                    <label for="Cost_Low_to_High">Cost: Low to High</label>
                                </div>
                                <div class="radios">    
                                    <input type="radio" name="sort_by" id="Cost_Hight_to_Low" value="Cost_Hight_to_Low"/>
                                    <label for="Cost_Hight_to_Low">Cost: Hight to Low</label>
                                </div>
                            </form>
                        </div>
                        <div class="label_output" id="Cusines">
                            <form id="rad">
                                <div class="checks">
                                    <input type="checkbox" name="Cousines" id="American"/>
                                    <label for="American">American</label>
                                </div>
                                <div class="checks">
                                    <input type="checkbox" name="Cousines" id="andhra"/>
                                    <label for="andhra">andhra</label>
                                </div>
                            </form>
                        </div>
                        <div class="label_output" id="Rating">
                            <h1 style={{color:"red" , margin: "1rem"}}>Value: <span id="demo"></span></h1>
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                        </div>
                        <div class="label_output" id="Cost_per_person">
                            <h1 style={{color:"red" , margin: "1rem"}}>Value: <span id="demo1"></span></h1>
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange1"/>
                        </div>
                        
                    </div>
                    
                    <div class="bottom_buttons">
                        <button id="apply">Apply</button>
                    </div>
                </div>
            </div>
            <div id="food_loading_area">
            <div class="food_loading_area_2">
                    <div class="food_item_card">
                        <div class="food_img">
                        </div>
                        <div class="food_item_info">
                            <div class="food_item_info_cont1">
                                <div class="food_name">
                                <p > Bhena da dhaba</p>
                                </div>
                                <div class="food_rating">
                                <p>4.0 <i class="fa fa-star"></i></p>
                                </div>
                            </div>
                            <div class="food_item_info_cont2">
                                <div class="food_cousine">
                                    <p> North indian fast food</p>
                                </div>
                                <div class="food_price">
                                    <p>₹100 for one</p>
                                </div>
                            </div>
                        </div>
                        <hr style={{backgroundColor:"lightgrey", border: "1px solid lightgray"}}/>
                        <div class="food_stats">
                            <p><i class="fa fa-line-chart" style={{color:"white",backgroundColor: "rgb(135, 158, 235)", borderRadius: "50%",padding:"6px",marginRight:"4px"}}></i>
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