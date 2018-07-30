const router = require('express').Router();
const controller = require('./controller');

router.route('/user')
  .get(controller.getUser)
  .post(controller.postUser);

router.route('/product')
  .get(controller.getProduct)
  .post(controller.postProduct);

router.route('/question')
  .get(controller.getQuestion)
  .post(controller.postQuestion);

router.route('/answer')
  .get(controller.getAnswer)
  .post(controller.postAnswer);

module.exports = router;