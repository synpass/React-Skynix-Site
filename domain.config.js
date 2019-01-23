let hostname = 'https://<hostName>'; //production: skynix.co, staging: staging.skynix.co
let cmsHost = 'https://<cmsHost>'; //production: cms.skynix.co, staging: staging.cms.skynix.co
let gtmId = '<gtmId>'; // production: GTM-MV4FKFF, staging: GTM-N6CK5NF

hostname = 'https://staging.skynix.co'
cmsHost = 'https://staging.cms.skynix.co'

let contactFormId;

if (hostname == 'https://skynix.co') {
    contactFormId = '1841'
}else if (hostname == 'https://staging.skynix.co') {
    contactFormId = '1252'
}

export {contactFormId}
export {cmsHost} 
export {gtmId}

export default hostname

