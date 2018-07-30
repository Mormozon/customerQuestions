const Sequelize = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('user', {
  username: {type: Sequelize.STRING}
});

const Product = sequelize.define('product', {
  name: {type: Sequelize.STRING}
});

const Question = sequelize.define('question', {
  question: {
    type: Sequelize.STRING,
    allowNull: false
  },
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

const Answer = sequelize.define('answer', {
  answer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE
  }
});

Answer.belongsTo(Question);
Question.hasMany(Answer, {as: 'Answers'});


module.exports = { User, Product, Question, Answer};
