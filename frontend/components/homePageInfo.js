import React from "react";
import Articles from "../components/articles";
import Link from "next/link";
import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const HomePageInfo = ({ homePageInfo }) => {
  console.log(homePageInfo)
  return (
    <div className="uk-container">


     <div className="uk-container">
          <div uk-grid className="uk-grid-small uk-child-width-expand@s">
              <div className="uk-align-left uk-margin-remove"> 
                      <div className="uk-grid">
                            <div className="uk-width-1-3@m uk-align-center"> 
                            <div className="uk-text-large uk-text-bolder uk-text-nowrap uk-margin-top">
                                <h1>
                                  <span style={{color: '#A42A04'}}>BF </span>
                                  <span style={{color: 'white'}}>CORNELLÀ </span>
                                </h1>
                              </div>
                              <div className="uk-text-lead uk-text-italic uk-text-nowrap">{homePageInfo.attributes.description}</div>
                            </div>
                            <div className="uk-width-expand@m ">
                            <div uk-grid className="uk-card uk-card-default uk-card-body uk-margin-top  uk-visible@s"  style={{opacity: '0.90'}}>
                                  <Link key={homePageInfo.attributes.articleSalient.data.attributes.name} className="uk-link-reset" href={`/article/${homePageInfo.attributes.articleSalient.data.attributes.slug}`}>

                                      <div className="uk-align-left uk-margin-remove"> 
                                              <div className="uk-grid">
                                                   
                                                    <div className="uk-width-expand@m">
                                                        <h3 className="uk-card-title">{homePageInfo.attributes.articleSalient.data.attributes.title}</h3>
                                                            <div className="uk-panel"  style={{width: 550, display: 'block'}}>
                                                              <span  class="salient"  style={{width: 400}} dangerouslySetInnerHTML={{__html:homePageInfo.attributes.articleSalient.data.attributes.description}}></span>
                                                            </div>
                                                    </div>
                                                    <div className="uk-width-1-3@m uk-align-center"> 
                                                    <NextImage
                                                        priority
                                                        width={300}
                                                        height={300}
                                                        src={getStrapiMedia(homePageInfo.attributes.articleSalient.data.attributes.cover)}
                                                        alt={homePageInfo.attributes.articleSalient.data.attributes.cover.data.attributes || ""} />

                                                    </div>
                                              </div>
                                      </div>
                                      </Link> 
                                  </div>
                                  
                            </div>
                      </div>
              </div>
          </div>
      </div>

      <div id="article" className="uk-hidden@s">
      <Link key={homePageInfo.attributes.articleSalient.data.attributes.name} className="uk-link-reset" href={`/article/${homePageInfo.attributes.articleSalient.data.attributes.slug}`}>
        <div className="uk-padding-large" />
        <div className="uk-card uk-card-default uk-card-body uk-margin-top" style={{opacity: '0.90'}}>
          <h3 className="uk-card-title">{homePageInfo.attributes.articleSalient.data.attributes.title}</h3>
          <div class="uk-panel">
          <span  class="salient"  style={{marginBottom: 15}} dangerouslySetInnerHTML={{__html:homePageInfo.attributes.articleSalient.data.attributes.description}}></span>
                        <NextImage
                                    priority
                                    width={300}
                                    height={300}
                                    src={getStrapiMedia(homePageInfo.attributes.articleSalient.data.attributes.cover)}
                                    alt={homePageInfo.attributes.articleSalient.data.attributes.cover.data.attributes || ""} />
          </div>
        </div>
        </Link> 
      </div>
      <div className="uk-padding" />
          <div className="uk-container">    
            <Articles articles={homePageInfo.attributes.articles.data}></Articles>
          </div>
    </div>
  );
};



export default HomePageInfo;
