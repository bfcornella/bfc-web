import React, { useState, useEffect } from 'react';
import Nav from "./nav";
import SideNav from "./sidenav";
import FooterApp from "./footerApp";
import { fetchAPI } from "../lib/api";

const Layout = ({ children, categories }) => {
  const [data, setData] = useState(null);
  console.log(categories)
  useEffect(() => {
    const asyncAction = async () => {
      const globalRes = await fetchAPI("/global", {
        populate: {
          favicon: "*",
          defaultSeo: {
            populate: "*",
          },
        },
      });
      setData(globalRes.data);
    }
    asyncAction();
  }, []);
 
  return( <>
    <Nav categories={categories}/>
    <SideNav categories={categories}/>
    {children}
    {data && <FooterApp global={data}/>}
  </>);

 
  };

export default Layout;
