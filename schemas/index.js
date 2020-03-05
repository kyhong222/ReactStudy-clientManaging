const mongoose = require('mongoose');

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = `mongoDB://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

module.exports = () => {
	const connect = () => {
		if (NODE_ENV !== 'production') {
			mongoose.set('debug', true);
		}
		mongoose.connect(
			MONGO_URL,
			{
				dbName: 'reactdb',
			},
			error => {
				if (error) {
					console.log('mongoDB connection error', error);
				} else {
					console.log('mongoDB connection success');
				}
			},
		);
	};

	connect();

	mongoose.connection.on('error', error => {
		console.error('mongoDB connection error', error);
	});
	mongoose.connection.on('disconnected', () => {
		console.log('mongoDB disconnected, retrying...');
		connect();
	});

	require('./user');
};
