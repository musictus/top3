import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Row from "./components/Row";
import Search_page from "./pages/Search_page";
import Food from "./pages/Food";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        {/* <Wrapper> */}
          <Route exact path="/" component={Search_page} />
          <Route exact path="/search" component={Search_page} />
          <Route exact path="/:name" component={Food} />
          <Route exact path="/api/food" component={Food} />
        {/* </Wrapper> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;