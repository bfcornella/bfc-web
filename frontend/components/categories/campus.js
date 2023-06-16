import React from "react";
import { getStrapiMedia } from "../../lib/media";

const Campus = ({ category, articles }) => {

  return (
    <div class="uk-padding uk-panel" >
          <div class="uk-height-small uk-flex uk-flex-middle">
            <h1><span class="uk-text-muted"> {category.attributes.name}</span></h1>
        </div>
       
        {articles.map((article, i) => {
                  return (
                        <div className="uk-container uk-width-1-1">
                        <div uk-grid className="uk-child-width-expand@s">
                            <div className="uk-width-1-3@m uk-align-left uk-margin-remove"> 
                              <div class="uk-margin uk-card uk-card-default uk-card-body">
                                <div className="uk-align-center" style={{width: 350}}>
                                <img src={getStrapiMedia(article.attributes.cover)} width="500" height="500" alt=""/>
                                </div>
                                <div class="uk-text-center" style={{padding: 15}}>
                                  <span dangerouslySetInnerHTML={{__html:article.attributes.description}}></span>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
        );
      })}

    </div>


  );
};

export default Campus;

/*
   <div  className="uk-width-1-2@m uk-align-center">
                        <div class="uk-width-auto">
                      <img src={getStrapiMedia(article.attributes.cover)} width="500" height="500" alt=""/>
                      </div> 
                      <div class="uk-width-auto">
                        <span dangerouslySetInnerHTML={{__html:article.attributes.description}}></span>
                      </div> 
                    </div>  
                     <div  class="uk-padding uk-panel">


*/