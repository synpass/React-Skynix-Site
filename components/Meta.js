import React from 'react';
import PropTypes from 'prop-types';
import GoogleTagManager from './GoogleTagManager';
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
            <meta property="og:site_name"   content='Skynix LLC'/>
            <meta property="og:image:alt"   content={props.ogImgAlt}/>

            <meta property="og:locale"   content={props.ogLocale}/>
            <meta property="og:updated_time"   content={props.metaModifiedTime}/>
            <meta property="og:image:width"   content={props.ogWidth}/>
            <meta property="og:image:height"   content={props.ogHeight}/>
            {
                props.ogType == 'article'
                    ? <React.Fragment>
                        <meta property="article:tag"   content={props.metaTag}/>
                        <meta property="article:section"   content={props.metaSection}/>
                        <meta property="article:published_time"   content={props.metaPublishedTime}/>
                        <meta property="article:modified_time"   content={props.metaModifiedTime}/>
                       </React.Fragment>
                    : null
            }
            <meta property="twitter:card"        content={props.twitterCard}/>
            <meta property="twitter:site"        content={props.twitterSite}/>
            <meta property="twitter:title"       content={props.twitterTitle}/>
            <meta property="twitter:description" content={props.twitterDescription}/>
            <meta property="twitter:image"       content={props.twitterImage}/>
            <meta property="twitter:image:alt"   content={props.twitterImageAlt}/>
            <meta name="keywords"   content={props.keywordsSeo}/>
            <link rel="canonical" href={props.canonicalUrl}/>
            <GoogleTagManager gtmId='GTM-N6CK5NF' />
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
    ogImgAlt: PropTypes.string,
    twitterCard: PropTypes.string,
    twitterSite: PropTypes.string,
    twitterTitle: PropTypes.string,
    twitterDescription: PropTypes.string,
    twitterImage: PropTypes.string,
    twitterImageAlt: PropTypes.string,
    keywordsSeo: PropTypes.string,
    canonicalUrl: PropTypes.string,

    ogLocale: PropTypes.string,
    metaModifiedTime: PropTypes.string,
    ogWidth: PropTypes.string,
    ogHeight: PropTypes.string,
    metaTag: PropTypes.string,
    metaSection: PropTypes.string,
    metaPublishedTime: PropTypes.string
};

Meta.defaultProps = {
    ogType: 'website',
    twitterSite: '@SkynixLLC',
    twitterCard: 'summary_large_image'
};