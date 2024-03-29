import Home from "../components/frontend/Home";
import About from "../components/frontend/About.js";
import Contact from "../components/frontend/Contact.js";
const PublicRouteList = [
  { path: "/", exact: true, name: "Home", component: Home },
  {
    path: "/about",
    exact: true,
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    exact: true,
    name: "Contact",
    component: Contact,
  },
];

export default PublicRouteList;
