import Nav from "./nav";
import SideNav from "./sidenav";

const Layout = ({ children, categories }) => (
  <>
    <Nav categories={categories}/>
    <SideNav categories={categories}/>
    {children}
  </>
);


/*
 <>
    <Nav categories={categories}/>
    <SideNav categories={categories}/>
    {children}
  </>
 */
export default Layout;
