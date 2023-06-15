import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = ({ categories }) => {
  return (
    <div>    
        <nav className="uk-navbar-container uk-background-primary uk-navbar uk-visible@s">
          <div className="uk-position-top-center uk-position-fixed estilo-logo">
            <Link href={`/`}>
              <Image src="/Logo_w.jpg" className="logo"
                          width={100}
                          height={100}
                          alt="Home"
                        />
            </Link>
          </div>  

          <div className="uk-navbar-center"> 
          <div uk-navbar="mode: click">    
            <ul className="uk-navbar-nav uk-visible@s">
              {categories.map((category) => {
                return (
                  <li key={category.id} >
                  {category.attributes.subcategories.data.length==0 &&
                     <Link className="uk-link-reset" href={category.attributes.slug == 'home'? `/`:`/category/${category.attributes.slug}`}>
                      {category.attributes.name}
                    </Link>
                    }
                  {category.attributes.subcategories.data.length>0 &&
                    <Link className="uk-link-reset" href="#">
                      {category.attributes.name}
                    </Link>
                  }
                    
                    {category.attributes.subcategories.data.length>0 &&
                    
                      <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                            {category.attributes.subcategories.data.map((subcategory) => {
                              return (
                                <li key={subcategory.attributes.id}>
                                  <Link  className="uk-link-reset"  style={{fontSize: 15, fontFamily: 'Arial,Helvetica,Arial,Lucida,sans-serif', fontWeight: 600}} href={category.attributes.slug == 'home'? `/`:`/subcategory/${subcategory.attributes.slug}`}>
                                    {subcategory.attributes.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                    }
                    
                  </li>
                );
              })}

            </ul>
          </div> 
          </div> 
      </nav>
      
      <nav className="uk-navbar-container-tight uk-background-primary uk-navbar uk-hidden@s">
        <div className="uk-child-width-1-2 uk-child-height-1-2 uk-grid">
          <div className="uk-position-top-left uk-padding-small uk-padding">
            <Link href={`/`}>
              <Image src="/Logo_w.jpg" className="logo"
                          width={64}
                          height={64}
                          alt="Home"
                        />
            </Link>
          </div>

          <div className="uk-position-top-right">
              <a href="#" className="uk-navbar-toggle uk-navbar-toggle-animate uk-position-right uk-padding uk-margin-top uk-hidden@s" uk-toggle="target: #sidenav">
              <svg className="uk-navbar-toggle-animate" fill="white" width="30" height="30" viewBox="0 0 20 20"><rect className="line-1" y="3" width="20" height="2"></rect><rect className="line-2" y="9" width="20" height="2"></rect><rect className="line-3" y="9" width="20" height="2"></rect><rect className="line-4" y="15" width="20" height="2"></rect></svg>
            </a>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Nav;
