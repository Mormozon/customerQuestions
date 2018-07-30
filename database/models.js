const Sequelize = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('user', {
  username: {type: Sequelize.STRING}
});

const Product = sequelize.define('product', {
  name: {type: Sequelize.STRING}
});

const Question = sequelize.define('question', {
  question: {type: Sequelize.STRING}
});

const Answer = sequelize.define('answer', {
  answer: {type: Sequelize.STRING}
});

module.exports = { User, Product, Question, Answer};
