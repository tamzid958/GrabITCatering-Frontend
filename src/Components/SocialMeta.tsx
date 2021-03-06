import {Helmet, HelmetProvider} from "react-helmet-async";
import React from "react";
import {Iseo} from "../Interfaces/SEOInterface";

export default function SocialMeta(props : { social : Iseo }){
    return(
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Grabit Catering | {props.social.title}</title>
                <meta name="description" content={props.social.description} />
                <meta property="og:title" content={props.social.title} />
                <meta property="og:description" content={props.social.description}/>
                <meta property="og:image:url" content={props.social.img} />
            </Helmet>
        </HelmetProvider>
    );

}