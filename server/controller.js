const { Product, Question, Answer } = require ('../database/models');

const controller = {
  getProduct: (req, res) => {
    const { productName } = req.query;

    Product.find({
      name: productName
    }, (err, data) => {
      if (err) {console.error(err)}
      else {res.status(200).send(data)}
    });
  },
  getQuestion: (req, res) => {
    const { question, productId } = req.query;

    if (productId) {
      Question.findAll({
        where: {
          productId: productId
        }
      }, (err, data) => {
        if (err) {console.error(err)}
        else {res.status(200).send(data)}        
      });
    } else {
      Question.find({
        question: question
      }, (err, data) => {
        if (err) {console.error(err)}
        else {res.status(200).send(data)}
      });
  }
  },
  postQuestion: (req, res) => {
    const { question } = req.body;

    new Question({
      question: question
    }).save((err, data) => {
      if (err) {console.error(err)}
      else {res.status(201).send(data)}
    });
  },
  getAnswer: (req, res) => {
    const { answer, questionId } = req.query;

    if (questionId) {
      Answer.findAll({
        where: {
          questionId: questionId
        }
      }, (err, data) => {
        if (err) {console.error(err)}
        else {res.status(200).send(data)}        
      });
    } else {
      Answer.find({
        answer: answer
      }, (err, data) => {
        if (err) {console.error(err)}
        else {res.status(200).send(data)}
      });  
    }
  },
  postAnswer: (req, res) => {
    const { answer, username } = req.body;

    Answer.create({
      answer: answer,
      username: username
    }, (err, data) => {
      if (err) {console.error(err)}
      else {res.status(201).send(data)}
    });
  }
}

module.exports = controller;