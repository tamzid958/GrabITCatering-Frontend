import {Helmet} from "react-helmet";
import React from "react";

export default function SocialMeta(props : any){
    return(
        <Helmet>
            <meta charSet="utf-8" />
            <title>Grabit Catering | {props.social.title}</title>
            <meta name="description" content={props.social.description} />
            <meta property="og:title" content={props.social.title} />
            <meta property="og:description" content={props.social.description}/>
            <meta property="og:image:url" content={props.social.img} />
        </Helmet>
    );

}