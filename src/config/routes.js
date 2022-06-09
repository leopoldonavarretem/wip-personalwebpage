//Imports
import * as PATHS from "../utils/paths";


function routes(props) {
  return [
    {
      path: PATHS.HOME,
      element: <>Home</>,
    },

    {
      path: PATHS.PORTFOLIO,
      element: <>Portfolio</>,
    },

    {
      path: PATHS.ABOUTME,
      element: <>About me</>,
    },

    {
      path: PATHS.CONTACT,
      element: <>Contact</>,
    },
  ];
}

export default routes;
