//Imports
import * as PATHS from "../utils/paths";

//import pages
import About from "../pages/About/About"
import Portfolio from "../pages/Portfolio/Portfolio"
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"


function routes(props) {
  return [
    {
      path: PATHS.HOME,
      element: <Home/>,
    },

    {
      path: PATHS.PORTFOLIO,
      element: <Portfolio/>
    },

    {
      path: PATHS.ABOUT,
      element: <About/>
    },

    {
      path: PATHS.CONTACT,
      element: <Contact/>
    },
  ];
}

export default routes;
