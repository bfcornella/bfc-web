import React from "react";

/* Dejo los articles por si más adelante se quiere poner debajo de la descripción algún combo de notícias historicas o algo con fotos y demás */
const KnowUs = ({ articles, history }) => {

  return (
    <div>
        <article className="uk-article"  style={{color: '#333'}}>
          <h1 ca="uk-article-title"><a className="uk-link-reset" href="">jalsdjfa</a></h1>
          <p>{history.description}</p>

        </article>
        
    </div>
  );
};

export default KnowUs;
