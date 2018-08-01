const router = require('express').Router();
const controller = require('./controller');

router.route('/product')
  .get(controller.getProduct);

router.route('/question')
  .get(controller.getQuestion);

router.route('/answer')
  .get(controller.getAnswer);

module.exports = router;