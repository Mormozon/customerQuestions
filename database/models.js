const Sequelize = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
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
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

Question.belongsTo(Product);
Product.hasMany(Question, {as: 'Questions'});

Answer.belongsTo(Question);
Question.hasMany(Answer, {as: 'Answers'});

sequelize.sync({force: false});

module.exports = { User, Product, Question, Answer};
