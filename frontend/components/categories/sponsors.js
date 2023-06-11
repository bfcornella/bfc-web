import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { getStrapiMedia } from "../../lib/media";

const Sponsors = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (



<div>
    {articles.map((article, i) => {
              return (
                <div class="uk-card uk-card-default uk-card-body uk-width-1@m">
                    <div class="uk-column-1-2">
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
              );
            })}
    
</div>


  );
};

export default Sponsors;
