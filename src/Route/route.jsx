import { createBrowserRouter } from "react-router-dom";

import { ABOUT, HOME, MainLayout, Projects} from "../constant/Lazyload";
import App from "../App";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,  // MainLayout now only renders Navbar once
        children: [
          { element: <ABOUT />, path: "about" },
          { element: <Projects />, path: "projects" },
        ],
      },
    ],
  },
]);
