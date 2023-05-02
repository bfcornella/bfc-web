import React from "react";
import Articles from "../components/articles";


const HomePageInfo = ({ homePageInfo }) => {
  console.log(homePageInfo);
  
  return (
    <div className="uk-container">
      <div className="uk-child-width-1-2 uk-child-height-1-2 uk-grid" uk-grid>
        <div className="uk-first-column">
          <div>
            <h1>
              <span style={{color: '#d62933'}}>BF </span>
              <span style={{color: 'white'}}>CORNELLÀ </span>
            </h1>
          </div>
          <div>
            <span style={{ fontSize: '45px', fontFamily: 'Mistral'}} className="uk-text-lead">{homePageInfo.attributes.description}</span>
          </div>
        </div>
        <div>
          <div className="uk-grid-collapse uk-child-width-2-2@l uk-grid" uk-grid>
            <div className="uk-first-column uk-grid-item-match">
              <div className="uk-panel uk-padding-small">
              <div>
                  <article className="uk-article">    
                    <div className="uk-card uk-card-default uk-card-body uk-width-2-2@m">
                          <h3 className="uk-card-title">Default</h3>
                          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </article>
            </div>
              </div>
            </div>


          </div>
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
