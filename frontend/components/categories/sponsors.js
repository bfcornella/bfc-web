import React from "react";
import { getStrapiMedia } from "../../lib/media";

const Sponsors = ({ category, articles }) => {

  return (
    <div   class="uk-padding uk-panel" >
          <div class="uk-height-small uk-flex uk-flex-middle">
            <h1><span class="uk-text-muted"> {category.attributes.name}</span></h1>
        </div>
        {articles.map((article, i) => {
                  return (
                    <article  class="uk-card uk-card-default uk-card-body uk-width-1@m uk-comment" role="comment"  style={{marginBottom: 25}} >
                      <div className="uk-container uk-width-1-1">
                        <div uk-grid className="uk-grid-small uk-child-width-expand@s uk-text-small">
                            
                              {i%2==0 &&
                            
                                <div uk-grid className="uk-grid-small">
                                  <div className="uk-width-1-3@m uk-align-left uk-margin-remove uk-padding">
                                    <div class="uk-width-auto">
                                      <img src={getStrapiMedia(article.attributes.cover)} width="300" height="300" alt=""/>
                                    </div>
                                  </div>
                                  <div className="uk-width-2-3@m uk-align-left uk-margin-remove uk-padding">
                                    <div class="uk-width-auto">
                                      <span dangerouslySetInnerHTML={{__html:article.attributes.description}}></span>
                                    </div>   
                                  </div>
                                </div>
                              }
                              {i%2!=0 &&
                            
                            <div uk-grid className="uk-grid-small">
                              <div className="uk-width-2-3@m uk-align-left uk-margin-remove uk-padding">
                                <div class="uk-width-auto">
                                  <span dangerouslySetInnerHTML={{__html:article.attributes.description}}></span>
                                </div>
                              </div>
                              <div className="uk-width-1-3@m uk-align-left uk-margin-remove uk-padding">
                                <div class="uk-width-auto">
                                  <img src={getStrapiMedia(article.attributes.cover)} width="300" height="300" alt=""/>
                                </div>   
                              </div>
                            </div>
                          }
                            
                        </div>
                      </div>
                    </article>
        );
      })}
        
    </div>


  );
};

export default Sponsors;


/*









              <article  class="uk-card uk-card-default uk-card-body uk-width-1@m uk-comment" role="comment"  style={{marginBottom: 25}} >
                    {i%2==0 &&
                    <table class="uk-table">
                      <tbody>
                        <tr>
                          <td  style={{width: '25%'}}>
                            <div class="uk-width-auto">
                                <img class="uk-preserve-width"  src={getStrapiMedia(article.attributes.cover)} width="300" height="300" alt=""/>
                            </div>
                          </td>
                          <td   style={{width: '75%'}}>
                            <span dangerouslySetInnerHTML={{__html:article.attributes.description}}></span>
                          </td>
                      </tr>
                      </tbody>
                  </table>
                    }
                    {i%2!=0 &&
                    <table class="uk-table">
                      <tbody>
                        <tr>
                          
                        <td  style={{width: '75%'}}>
                            <span dangerouslySetInnerHTML={{__html:article.attributes.description}}></span>
                          </td>
                          <td  style={{width: '25%'}}>
                            <div class="uk-width-auto">
                                <img class="uk-preserve-width"  src={getStrapiMedia(article.attributes.cover)} width="300" height="300" alt=""/>
                            </div>
                          </td>
                      </tr>
                      </tbody>
                    </table>
                    }   
              </article>

*/


/*
        <div key={article.name} class="uk-card uk-card-default uk-card-body uk-width-1@m">
                    <div class="uk-column-1-3">
                        <div class="uk-card-media-left uk-cover-container">
                          <img src={getStrapiMedia(article.attributes.cover)}  width="300" height="200"/>
                              <canvas width="300" height="200"></canvas>
                        </div>
                        <div>
                            <div class="uk-card-body">
                                  <p>{article.attributes.description}</p>
                            </div>
                        </div>
                    </div>    
                  </div>      
*/
