const Navbar=()=>{
    const handleClick=(e)=>{
        e.preventDefault();
        const el=document.getElementById("Nav-Bar");
        if(el.className==="Nav-Bar")
        {
            el.className+=" responsive";
            e.target.className+="fa fa-remove";
        }
        else{
            el.className="Nav-Bar";
            e.target.className="fa fa-bars";
        }
    }
    return(
        <>
            <div className="Nav-Bar" id="Nav-Bar">
                <ul>
                    <li id="download">Get the app</li>
                    <li id="Phone-Nav" className="fa fa-bars" onClick={handleClick}></li>
                    <li>Investor relations</li>
                    <li>Add restaurant</li>
                    <li>Login</li>
                    <li>Sign up</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;