// remember to install nodemon : npm i -D nodemon. D mean development mode so not deployed
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();


// initialise middlware
// app.use(logger);

// Get all members
app.get('/api/members', (req, res) => {
	res.json(members);

});

// Get single member
app.get('/api/members/:id',(req, res) => {
	res.json(members.filter(memberk => member.id === req.params.id));
});

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

	

// the deployment server will prob have the port number in an environment variable
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));