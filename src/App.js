import {BrowserRouter,Route,Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Listing from "./Pages/Listing";

const App =() =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" >
                        <Route path="Homepage" index element={<Homepage /> }/>
                        <Route path="listing" element={ <Listing /> }/>
                    </Route>
                 </Routes>
            </BrowserRouter>
        </>
    );
}

export  default App;