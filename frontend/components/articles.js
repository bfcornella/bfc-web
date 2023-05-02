import React from "react";
import Card from "./card";
import Link from "next/link";
import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="clsActivated: uk-transition-active; center: false">

    <ul className="uk-slider-items uk-grid">
	
			{articles.map((article, i) => {
              return (
                <Link key={article.name} className="uk-link-reset" href={`/article/${article.attributes.slug}`}>
                <li>
                  <div className="uk-panel">
                      <NextImage
                              priority
                              width={350}
                              height={350}
                              src={getStrapiMedia(article.attributes.cover)}
                              alt={article.attributes.cover.data.attributes || ""} />
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                      <p className="uk-margin-remove"> {article.attributes.title}</p>
                    </div>
                  </div>
                </li>
                </Link> 
              );
            })}
	
	
       
     
    </ul>

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous">
      <svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="white" strokeWidth="2.5" points="12.775,1 1.225,12 12.775,23"></polyline></svg>
    </a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next">
      <svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="white" strokeWidth="2.5" points="1.225,23 12.775,12 1.225,1"></polyline></svg>
    </a>

</div>
  );
};

export default Articles;
