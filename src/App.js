import {BrowserRouter,Route,Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Listing from "./Pages/Listing";

const App =() =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/listing" element={<Listing/>}/>
                 </Routes>
            </BrowserRouter>
        </>
    );
}

export  default App;