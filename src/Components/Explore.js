const Explore=()=>{
    const handleClick = (e,option,arrow_pos)=>{
                   const el=document.getElementById(option);
                   const arrow=document.getElementsByClassName("arrows");
                   const temp=arrow[arrow_pos];
                   console.log(arrow);
                   console.log("triggered");
                   if(el.className==="option")
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
            </>
    );
}


export default Explore;