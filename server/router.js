const router = require('express').Router();
const controller = require('./controller');

router.route('/product')
  .get(controller.getProduct);

router.route('/question')
  .post(controller.postQuestion)
  .get(controller.getQuestion);

router.route('/answer')
  .post(controller.postAnswer)
  .get(controller.getAnswer);

module.exports = router;