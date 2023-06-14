import React from "react";
import Link from "next/link";

const SideNav = ({ categories }) => {
  return (
<div id="sidenav" navbar-toggle-icon="true" uk-offcanvas="flip: true" className="uk-offcanvas">
    <div className="uk-offcanvas-bar">
        <ul className="uk-nav">
        {categories.map((category) => {
              return (
                <li key={category.id} >
                  <Link className="uk-link-reset" href={category.attributes.slug == 'home'? `/`:`/category/${category.attributes.slug}`}>
                    {category.attributes.name}
                  </Link>
                  {category.attributes.subcategories.data.length>0 &&
                      <div className="uk-navbar-dropdown-black">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                            {category.attributes.subcategories.data.map((subcategory) => {
                              return (
                                <li key={subcategory.attributes.id}>
                                  <Link  className="uk-link-reset"  style={{fontSize: 16}} href={category.attributes.slug == 'home'? `/`:`/subcategory/${subcategory.attributes.slug}`}>
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
  );
};

export default SideNav;
