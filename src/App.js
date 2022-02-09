import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';



import NavBar from "./Components/NavBar/index.js";
import Footer from "./Components/Footer/index.js";

//    Pages 
import MainPage from "." 
import Car_Parc from "./Pages/Car_Parc"
import Contact from "./Pages/Contact/index.js";
import For_Business from "./Pages/For_Busines/index.js";
import Personal_Area from "./Pages/Personal_Area/index.js"
import Rent from "./Pages/Rent"
import without_a_driver from "./Pages/mini_pages/without _a_ driver/index.js";
import with_a_drive from "./Pages/mini_pages/with_a_driver/index.js";
import for_special from "./Pages/mini_pages/for_special/index.js";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact/>
          <Route path="/carParc" component={Car_Parc} exact/>
          <Route path="/rent" component={Rent} exact />
          <Route path="/forBusiness" component={For_Business} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/personalArea" component={Personal_Area} exact/>
          <Route path="/without_a_drive" component={without_a_driver} exact />
          <Route path="/with_a_drive" component={with_a_drive} exact />
          <Route path="/for_special" component={for_special} exact/>
        </Switch>
        <Redirect/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
