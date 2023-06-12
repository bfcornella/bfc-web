import React, { useState, useEffect } from 'react';
import { fetchAPI } from "../../lib/api";
import Link from "next/link";

const Contact = ({ category }) => {
  const [data, setData] = useState(null);
  console.log(category)
  
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
        <div>
       <div class="uk-inline">

        <img src="images/photo.jpg" width="1800" height="200" alt=""/>

        <div class="uk-position-top uk-overlay uk-overlay-default uk-text-center">Top</div>
       
        </div>
        <div class="uk-column-1-3">
          <div class="uk-margin uk-card uk-card-default uk-card-body">
            <div className="uk-margin-right" style={{backgroundColor: '#daa99a', borderRadius: 50, padding: 15, width: 60}}>
              <span uk-icon="icon: clock; ratio: 3"></span>
            </div>
            <div style={{padding: 15}}>
            <span style={{color: '#daa99a'}} ><b>Horari secretaria</b></span>
              <br/>
              <span dangerouslySetInnerHTML={{__html:data.attributes.hours}}></span>
            </div>
          </div>
          <div class="uk-margin uk-card uk-card-default uk-card-body">
            <div className="uk-margin-right" style={{backgroundColor: '#daa99a', borderRadius: 50, padding: 15, width: 60}}>
            <span uk-icon="icon: receiver; ratio: 3"></span>
            </div>
            <div style={{padding: 15}}>
              <span style={{color: '#daa99a'}} ><b>Telèfon</b><br/></span>
              <span dangerouslySetInnerHTML={{__html:data.attributes.phone_1}}></span> / <span dangerouslySetInnerHTML={{__html:data.attributes.phone_2}}></span>
            </div>
          </div>
          <div class="uk-margin uk-card uk-card-default uk-card-body">
            <div className="uk-margin-right" style={{backgroundColor: '#daa99a', borderRadius: 50, padding: 15, width: 60}}>
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
      )}
    </>
  );

 
};




export default Contact;
