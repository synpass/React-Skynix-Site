let hostname;
let cmsHost;

if (process.env.NODE_ENV === 'development') {
    hostname = 'https://staging.skynix.co';
    cmsHost = 'https://staging.cms.skynix.co';
} else {
    hostname = 'https://skynix.co';
    cmsHost = 'https://cms.skynix.co';
}
export {cmsHost} 

export default hostname

