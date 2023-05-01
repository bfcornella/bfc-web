import React from "react";
import Articles from "../components/articles";


const HomePageInfo = ({ homePageInfo }) => {
  console.log(homePageInfo);
  
  return (
    <div class="uk-container">
      <div class="uk-child-width-1-2 uk-child-height-1-2 uk-grid" uk-grid>
        <div class="uk-first-column">
          <div>
            <h1>
              <span style={{color: '#d62933'}}>BF </span>
              <span style={{color: 'white'}}>CORNELLÀ </span>
            </h1>
          </div>
          <div>
            <span style={{ fontSize: '45px', fontFamily: 'Mistral'}} class="uk-text-lead">{homePageInfo.attributes.description}</span>
          </div>
        </div>
        <div>
          <div class="uk-grid-collapse uk-child-width-2-2@l uk-grid" uk-grid>
            <div class="uk-first-column uk-grid-item-match">
              <div class="uk-panel uk-padding-small">
              <div>
                  <article class="uk-article">    
                    <div class="uk-card uk-card-default uk-card-body uk-width-2-2@m">
                          <h3 class="uk-card-title">Default</h3>
                          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </article>
            </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="uk-padding-large" />
      <div class="uk-container">    
        <Articles articles={homePageInfo.attributes.articles.data}></Articles>
      </div>
    </div>
  );
};



export default HomePageInfo;
