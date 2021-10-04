import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";

import NotFound from "./components/notFound/NotFound"
import Courses from "./components/courses/Courses";


function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses" >
            <Courses></Courses>
          </Route>
          <Route path="/contact" ></Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
