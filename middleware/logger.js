
const moment = require('moment');


// TIP: using next so that we can use next middleware function in the stack. Middleware functions can access
// the req and res of a route
const logger = (req, res, next) => {

	//  This function logs the protocol,host and the route that was hit. and the time
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
	next();
}

module.exports = logger;