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
                    <iframe key={article.name} src={getStrapiMedia(article.attributes.cover)} />
        );
      })}
        
    </div>


  );
};

export default Campus;

