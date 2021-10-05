import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";

import NotFound from "./components/notFound/NotFound"
import Courses from "./components/courses/Courses";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="container-fluid">
      <Router>
        {/* header is used here to render in every page  */}
        <Header></Header>
        <Switch>
          {/* exact is used  */}
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
          <Route path="/contact" >
            <Contact></Contact>
          </Route>
          {/* notfonnd is added here  */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer is used here for rendered in every page  */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
