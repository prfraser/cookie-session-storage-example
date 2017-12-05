var express = require('express');
var router = express.Router();

/* GET auth page and set loggedIn to true. */
// router.get('/auth', function(req, res, next) {
// 	if (!req.session.loggedIn) {
// 		req.session.loggedIn = new Date().toISOString();
// 	}
// 	res.json({
// 		loggedIn: req.session.loggedIn || false
// 	})
// });

router.post('/auth', function(req, res, next) {
	const realPassword = 'heeyooooh'
	if ( req.body.password === realPassword ) {
		req.session.loggedIn = new Date().toISOString();
	}
	res.json({
		loggedIn: req.session.loggedIn || false
	})
});

router.delete('/auth', function(req, res, next) {
	if (req.session.loggedIn) {
		req.session.loggedIn = null
	}
	res.json({
		loggedIn: req.session.loggedIn || false
	})
});

/* GET secure page and check if loggedIn is true. */
router.get('/secure', function(req, res, next) {
	if (!req.session.secureVisits) {
		req.session.secureVisits = 0
	}
	++req.session.secureVisits
	if (req.session.loggedIn) {  
		const dateLoggedIn = new Date(req.session.loggedIn)
		res.json({
			loggedIn: req.session.loggedIn || false
		})
	} else { 
		res.json({
			loggedIn: req.session.loggedIn || false
		})
	}
});

module.exports = router;
