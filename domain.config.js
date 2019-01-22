let hostname;

if (process.env.NODE_ENV !== 'production') {
	hostname = 'https://staging.skynix.co';
} else {
	hostname = 'https://skynix.co';
}

export default hostname

