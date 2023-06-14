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
                                </li>
              );
            })}
        </ul>
    </div>
</div>
  );
};

export default SideNav;
