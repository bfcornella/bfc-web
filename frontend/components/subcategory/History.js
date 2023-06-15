import React from "react";
import { getStrapiMedia } from "../../lib/media";
/* Dejo los articles por si más adelante se quiere poner debajo de la descripción algún combo de notícias historicas o algo con fotos y demás */
const History = ({ articles, history , subcategory}) => {
  console.log('history')
  console.log(history)
  return (
    <div  class="uk-padding uk-panel" >

        <div class="uk-height-small uk-flex uk-flex-middle">
            <h1><span class="uk-text-muted"> {subcategory.attributes.name}</span></h1>
        </div>
        <article className="uk-article"  style={{color: '#808080', fontFamily: 'Lucida Handwriting', fontSize: 16, lineHeight: 2}}>
          <img class="uk-align-left uk-margin-remove-adjacent" src={getStrapiMedia(history.photo_1)} width="225" height="150" alt=""/>
          <img class="uk-align-right uk-margin-remove-adjacent" src={getStrapiMedia(history.photo_2)} width="225" height="150" alt=""/>
          <span dangerouslySetInnerHTML={{__html:history.description_1}}></span>
          <img class="uk-align-left uk-margin-remove-adjacent" src={getStrapiMedia(history.photo_3)} width="225" height="150" alt=""/>
          <img class="uk-align-right uk-margin-remove-adjacent" src={getStrapiMedia(history.photo_4)} width="225" height="150" alt=""/>
          <span dangerouslySetInnerHTML={{__html:history.description_2}}></span>
         
        </article>
        
    </div>
  );
};

export default History;
