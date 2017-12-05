var express = require('express');
var router = express.Router();

/* GET auth page and set loggedIn to true. */
router.get('/auth', function(req, res, next) {
	if (!req.session.loggedIn) {
		req.session.loggedIn = new Date().toISOString();
	}
  res.send(req.session);
});

/* GET secure page and check if loggedIn is true. */
router.get('/secure', function(req, res, next) {
	if (!req.session.secureVisits) {
		req.session.secureVisits = 0
	}
	++req.session.secureVisits
	if (req.session.loggedIn) {  
		const dateLoggedIn = new Date(req.session.loggedIn)
		res.send(req.session) 
	} else { 
		res.send(req.session)
	}
});

module.exports = router;
