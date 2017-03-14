const Router = require('express').Router;
const router = new Router();

const event  = require('./model/event/event-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to server API!' });
});

router.use('/event', event);


module.exports = router;
