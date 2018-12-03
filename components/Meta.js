import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'


export default function Meta(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description"        content={props.description}/>
            <meta property="og:url"         content={props.ogURL}/>
            <meta property="og:type"        content={props.ogType}/>
            <meta property="og:title"       content={props.ogTitle}/>
            <meta property="og:description" content={props.ogDescription}/>
            <meta property="og:image"       content={props.ogImage}/>
            <meta property="og:site_name"   content={props.ogSiteName}/>
            <meta property="og:image:alt"   content={props.ogImgAlt}/>
        </Head>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ogURL: PropTypes.string,
    ogType: PropTypes.string,
    ogTitle: PropTypes.string,
    ogDescription: PropTypes.string,
    ogImage: PropTypes.string,
    ogSiteName: PropTypes.string,
    ogImgAlt: PropTypes.string
};

Meta.defaultProps = {
    ogType: 'website',
    ogSiteName: 'Skynix LLC'
};