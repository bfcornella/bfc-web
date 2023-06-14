import React, { useState, useEffect } from 'react';
import { fetchAPI } from "../../lib/api";
import Link from "next/link";
import NextImage from "next/image";
import { getStrapiMedia } from "../../lib/media";

const Contact = ({ category }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const asyncAction = async () => {
      const globalRes = await fetchAPI("/global", {
        populate: {
          favicon: "*",
          defaultSeo: {
            populate: "*",
          },
        },
      });
      setData(globalRes.data);
    }
    asyncAction();
  }, []);
 
 
  return (
    <>
      {data && (
        <div  class="uk-padding uk-panel" >

        <div class="uk-height-small uk-flex uk-flex-middle">
            <h1><span class="uk-text-muted"> {category.attributes.name}</span></h1>
        </div>
       




        <div className="uk-container uk-width-1-1">
        <div uk-grid className="uk-grid-small uk-child-width-expand@s uk-text-small">
            <div className="uk-width-1-3@m uk-align-left uk-margin-remove"> 
              <div class="uk-margin uk-card uk-card-default uk-card-body">
                <div className="uk-align-center" style={{backgroundColor: '#daa99a', borderRadius: 50, padding: 15, width: 60}}>
                  <span uk-icon="icon: clock; ratio: 3"></span>
                </div>
                <div style={{padding: 15}}>
                  <span style={{color: '#daa99a'}} ><b>Horari secretaria</b></span>
                  <br/>
                  <span dangerouslySetInnerHTML={{__html:data.attributes.hours}}></span>
                </div>
              </div>
            </div>
            <div className="uk-width-1-3@m uk-align-left uk-margin-remove"> 
              <div class="uk-margin uk-card uk-card-default uk-card-body">
                <div className="uk-align-center" style={{backgroundColor: '#daa99a', borderRadius: 50, padding: 15, width: 60}}>
                <span uk-icon="icon: receiver; ratio: 3"></span>
                </div>
                <div style={{padding: 15}}>
                  <span style={{color: '#daa99a'}} ><b>Telèfon</b><br/></span>
                  <span dangerouslySetInnerHTML={{__html:data.attributes.phone_1}}></span> / <span dangerouslySetInnerHTML={{__html:data.attributes.phone_2}}></span>
                </div>
              </div>
              </div>
              <div className="uk-width-1-3@m uk-align-left uk-margin-remove"> 
              <div class="uk-margin uk-card uk-card-default uk-card-body">
                <div className="uk-align-center" style={{backgroundColor: '#daa99a', borderRadius: 50, padding: 15, width: 60}}>
                <span uk-icon="icon: location; ratio: 3"></span>
                </div>
                <div style={{padding: 15}}>
                <Link href={data.attributes.google_location}  style={{color: '#daa99a'}} target="_blank"><b>Localització</b></Link>
                  <br></br>
                  <span dangerouslySetInnerHTML={{__html:data.attributes.address}}></span>
                  <br/><br/>
                
                </div>
              </div>
            </div>
      </div>
  </div>
</div>

      )}
    </>
  );

 
};




export default Contact;
