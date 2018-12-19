import React from 'react';
import LazyLoad from "../LazyLoad";
import Particle from "../Particle";

export default function BugFixing() {
    return (
        <LazyLoad className='ec-bugfixing'>
            <h2 className='section-heading'>Bug Fixing, Security Monitoring and Maintenance</h2>
            <h4 className='paragraph ec-bugfixing__paragraph'>
                Sleep tight knowing your online store is out of risk with<br />
                the backup of our thorough Magento and Woocommerce<br />
                developers, who can:
            </h4>
            <p><b>•  ffectively</b> configure your server and platform</p>
            <p><b>•  quickly</b> detect and fix any vulnerabilities</p>
            <p><b>•  regularly</b> apply security patches</p>
            <div className='ec-bugfixing__particle'>
                <Particle/>
            </div>
            <div className="ec-bugfixing__padding-bottom"></div>
        </LazyLoad>
    )
}
