import { createBrowserRouter } from "react-router";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Activities from "./pages/Activities";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: Home },
      { path: "activities", Component: Activities },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
