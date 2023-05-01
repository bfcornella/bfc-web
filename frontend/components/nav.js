import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = ({ categories }) => {
  return (
    <div>
       <div className="uk-position-top-center uk-position-fixed estilo-logo">
       <Link href={`/`}>
       <Image src="/Logo_w.jpg" className="logo"
                    width={100}
                    height={100}
                    alt="Home"
                  />
       
        </Link>
        </div>
       

        <nav className="uk-navbar-container uk-background-primary uk-navbar">
      
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav uk-visible@s">
            {categories.map((category) => {
              return (
                <li key={category.id} >
                  <Link className="uk-link-reset" href={`/category/${category.attributes.slug}`}>
                    {category.attributes.name}
                  </Link>
                </li>
              );
            })}
          </ul>
         
        </div>
        
        <div className="uk-navbar-right">
            <a href="#" class="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon uk-toggle="target: #sidenav">
            <svg class="uk-navbar-toggle-animate" fill="white" width="20" height="20" viewBox="0 0 20 20"><rect class="line-1" y="3" width="20" height="2"></rect><rect class="line-2" y="9" width="20" height="2"></rect><rect class="line-3" y="9" width="20" height="2"></rect><rect class="line-4" y="15" width="20" height="2"></rect></svg>
          </a>
        </div>
       
      </nav>
      
    </div>
  );
};

export default Nav;
