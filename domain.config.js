let hostname;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	hostname = 'https://staging.skynix.co';
} else {
	hostname = 'https://skynix.co';
}

export default hostname

