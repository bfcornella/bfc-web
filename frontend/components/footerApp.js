import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterApp = () => {
  return (
    <footer className="uk-background-primary">
      <div className="uk-container uk-background-light-primary uk-width-1-1">
      <div uk-grid className="uk-grid-small uk-child-width-expand@s uk-text-small">
          <div className="uk-width-1-3@m uk-align-left"> 
            <Image src="/AF_Tram_NegColor.jpg"
                        width={100}
                        height={100}
                        alt="Home"
                      />
               <Image src="/ajcornella_color_cen.png"
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
                        width={150}
                        height={150}
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
          <div className="uk-width-1-3@m uk-align-right">
            <b>Telèfon</b><br/>
            <a href="tel:934711207">934711207</a> / <a href="tel:654385344">654385344</a><br/><br/>
            <b>Email</b><br/>
            <a href="mailto:federacio@basquetfemenicornella.com">federacio@basquetfemenicornella.com</a><br/><br/>
            <Link href={`https://www.instagram.com/bfcornella/`} target="_blank" alt="Instagram">
            <Image src="/instagram.png"
                          width={32}
                          height={32}
                          alt="Instagram"
                        />
            </Link>
           
          </div>
          <div className="uk-width-1-3@m uk-align-center">
          <Link href={`https://goo.gl/maps/bHpdg8CZT2wcsCb26`} target="_blank"><b>Localització</b></Link>
            <br></br>
            Carrer de Marià Benlliure S/N<br></br>(Poliesportiu Can Carbonell)<br/>
            08940 Cornellà de Llobregat, Barcelona
            <br/><br/>
            <b>Horari secretaria</b>
            <br/>
            Dilluns, Dimecres i Divendres
            18:00h a 20:00h
          </div>
        
      </div>
      </div>
      <div className="uk-background-primary uk-padding-small">Bàsquet Femení Cornellà © 2023</div>
    </footer>
  );
};

export default FooterApp;
