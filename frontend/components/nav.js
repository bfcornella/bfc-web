import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container uk-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link legacyBehavior href="/">
                <a>Basquet Femení Cornellà</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-visible@s">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link legacyBehavior href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
        <div className="uk-offcanvas-bar">
            <ul className="uk-nav">
                <li><a className="uk-text-large" href="https://shubhamjain.co/about/">about</a></li>
                <li><a className="uk-text-large" href="https://shubhamjain.co/">blog</a></li>
            </ul>
        </div>
      </div>

    </div>
  );
};

export default Nav;
