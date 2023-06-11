import Nav from "./nav";
import SideNav from "./sidenav";
import FooterApp from "./footerApp";

const Layout = ({ children, categories }) => (
  <>
    <Nav categories={categories}/>
    <SideNav categories={categories}/>
    {children}
    <FooterApp/>
  </>
);

export default Layout;
