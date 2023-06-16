import React from "react";
import { getStrapiMedia } from "../../lib/media";

const Campus = ({ category, articles }) => {

  return (
    <div class="uk-padding uk-panel" >
          <div class="uk-height-small uk-flex uk-flex-middle">
            <h1><span class="uk-text-muted"> {category.attributes.name}</span></h1>
        </div>
        
       <div  className=" uk-visible@s">
          <div className="uk-align-left uk-margin-remove"> 
              <div class="uk-text-left" style={{padding: 15}} >
                      <span dangerouslySetInnerHTML={{__html:category.attributes.description}}></span>
              </div>
              <div class="uk-text-center" style={{padding: 15}} >
                  <iframe
                          src="/images/Campus_bfc_2023.pdf"
                          title="Async & Performance"
                          width="800"
                          height="600"
                        />
              </div>
          </div>  
       </div>
       <div  className="uk-width-auto uk-hidden@s uk-text-muted">
                <div className="uk-align-left uk-margin-remove"> 
                    <div class="uk-text-left" style={{padding: 15}} >
                            <span dangerouslySetInnerHTML={{__html:category.attributes.description}}></span>
                    </div>
                    <div class="uk-text-center" style={{padding: 15}} >
                    <a
                          style={{color: '#daa99a', fontWeight: 600}}
                          href="/images/Campus_bfc_2023.pdf"
                          alt="Descarregar informació campus"
                          target="_blank"
                        >Descarregar informació campus</a>
                      </div>
                </div>  
       </div>
        
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