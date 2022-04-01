import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages";
import LeaveFeedback from "./pages/feedback";




function App() {
    return (

    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route exact path="/feedback" element={<LeaveFeedback/>}  />
            </Routes>
            
        </Router>
    </>   
    );
}

export default App;

