const router = require('express').Router();
const controller = require('./controller');

router.route('/product')
  .get(controller.getProduct)
  .post(controller.postProduct);

router.route('/question')
  .post(controller.postQuestion);

router.route('/answer')
  .post(controller.postAnswer);

module.exports = router;