import React from "react";

/* Dejo los articles por si más adelante se quiere poner debajo de la descripción algún combo de notícias historicas o algo con fotos y demás */
const Organization = ({ organization , subcategory}) => {
  console.log('organization')
  console.log(organization)
  return (
    <div class="uk-padding uk-panel" >

        <div class="uk-height-small uk-flex uk-flex-middle">
            <h1><span class="uk-text-muted"> {subcategory.attributes.name}</span></h1>
        </div>
        <div uk-grid className="uk-grid-small uk-child-width-expand@s uk-text-small">
        {organization.data.attributes.positions.data.map((position, i) => {
          return (
          
          
            <div key={position.attributes.name} className="uk-width-1-3@m uk-align-left uk-margin-remove"> 
              <div class="uk-margin uk-card uk-card-default uk-card-body">
                <div className="uk-align-center" style={{backgroundColor: '#daa99a', borderRadius: 50, padding: 15, width: 60}}>
                  <span uk-icon="icon: tag; ratio: 3"></span>
                </div>
                <div class="uk-text-center" style={{padding: 15, fontSize: 17}}>
                  <span style={{color: '#daa99a'}} ><b>{position.attributes.position}</b></span>
                  <br/>
                  <span>{position.attributes.name}</span>
                </div>
              </div>
            </div>
                  
                  );
        })}
        </div>
        
    </div>
  );
};

export default Organization;
