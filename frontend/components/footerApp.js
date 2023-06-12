import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterApp = ({ global }) => {
  return (
    <footer className="uk-background-primary">
      <div className="uk-container uk-background-light-primary uk-width-1-1">
      <div uk-grid className="uk-grid-small uk-child-width-expand@s uk-text-small">
          <div className="uk-width-1-3@m uk-align-left uk-margin-remove"> 
              <div uk-grid className="uk-grid-small uk-align-center">
                  <Image src="/AF_Tram_NegColor.jpg"
                    width={100}
                    height={100}
                    alt="Home"
                  />
                  <Image src="/ajcornella_color_negatiu_cen.png"
                    width={180}
                    height={180}
                    alt="Home"
                  />
                  <Image src="/logo_esports_cornella_sense_fons.png"
                    width={150}
                    height={150}
                    alt="Home"
                  />
                  <Image src="/logo_clinica_dental_eucaliptus.png"
                    width={120}
                    height={120}
                    alt="Home"
                  />
                  <Image src="/logo-montserrat.svg"
                    width={150}
                    height={150}
                    alt="Home"
                  />
                    <Image src="/megagame.png"
                    width={150}
                    height={150}
                    alt="Home"
                  /> 
              </div>
          </div>
          <div className="uk-width-1-3@m uk-align-right">
            <b>Telèfon</b><br/>
            <span dangerouslySetInnerHTML={{__html:global.attributes.phone_1}}></span> / <span dangerouslySetInnerHTML={{__html:global.attributes.phone_2}}></span><br/><br/>
            <b>Email</b><br/>
            <a href={"mailto:"+global.attributes.mail}>{global.attributes.mail}</a><br/><br/>
            <Link href={global.attributes.instagram} target="_blank" alt="Instagram">
            <Image src="/instagram.png"
                          width={32}
                          height={32}
                          alt="Instagram"
                        />
            </Link>
           
          </div>
          <div className="uk-width-1-3@m uk-align-center">
          <Link href={global.attributes.google_location} target="_blank"><b>Localització</b></Link>
            <br></br>
            <span dangerouslySetInnerHTML={{__html:global.attributes.address}}></span>
            <br/><br/>
            <b>Horari secretaria</b>
            <br/>
            <span dangerouslySetInnerHTML={{__html:global.attributes.hours}}></span>
          </div>
        
      </div>
      </div>
      <div className="uk-background-primary uk-padding-small">Bàsquet Femení Cornellà © 2023</div>
    </footer>
  );
};

export default FooterApp;
