import React from "react";

/* Dejo los articles por si más adelante se quiere poner debajo de la descripción algún combo de notícias historicas o algo con fotos y demás */
const History = ({ articles, history , subcategory}) => {

  return (
    <div  class="uk-padding uk-panel" >

        <div class="uk-height-small uk-flex uk-flex-middle">
            <h1><span class="uk-text-muted"> {subcategory.attributes.name}</span></h1>
        </div>
        <article className="uk-article"  style={{color: '#808080', fontFamily: 'Lucida Handwriting', fontSize: 16, lineHeight: 2}}>
         
          <span dangerouslySetInnerHTML={{__html:history.description}}></span>
        </article>
        
    </div>
  );
};

export default History;
