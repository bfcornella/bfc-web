import React from "react";
import Articles from "../components/articles";


const HomePageInfo = ({ homePageInfo }) => {
  console.log(homePageInfo);
  
  return (
    <div className="uk-container">
      <div className="uk-child-width-1-2 uk-child-height-1-2 uk-grid">
        <div>
          <div className="uk-text-large uk-text-bolder">
            <h1>
              <span style={{color: '#d62933'}}>BF </span>
              <span style={{color: 'white'}}>CORNELLÀ </span>
            </h1>
          </div>
          <div className="uk-text-lead">{homePageInfo.attributes.description}</div>
        </div>
        <div>
          <article className="uk-article">    
            <div className="uk-card uk-card-default uk-card-body uk-width-2-2@m">
              <h3 className="uk-card-title">Default</h3>
              <div class="uk-panel uk-text-truncate uk-height-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
         </article>

        </div>
      </div>
      <div className="uk-padding-large" />
      <div className="uk-container">    
        <Articles articles={homePageInfo.attributes.articles.data}></Articles>
      </div>
    </div>
  );
};



export default HomePageInfo;
