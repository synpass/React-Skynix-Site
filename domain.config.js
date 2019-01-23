let hostname = 'https://<hostName>'; //production: skynix.co, staging: staging.skynix.co
let cmsHost = 'https://<cmsHost>'; //production: cms.skynix.co, staging: staging.cms.skynix.co
let gtmId = '<gtmId>'; // production: GTM-MV4FKFF, staging: GTM-N6CK5NF

hostname = 'https://staging.skynix.co'
cmsHost = 'https://staging.cms.skynix.co'

let contactFormid;

if (hostname == 'https://skynix.co') {
    contactFormid = '1252'
}else if (hostname == 'https://staging.skynix.co') {
    contactFormid = '1841'
}

export {contactFormid}
export {cmsHost} 
export {gtmId}

export default hostname

