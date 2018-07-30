const router = require('express').Router();
const controller = require('./controller');

router.route('/users')
  .get(controller.get);

router.route('/products')
  .get(controller.get);

router.route('/questions')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

  module.exports = router;