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
    console.log(req.query);
    const { question } = req.query;

    Question.find({
      question: question
    }, (err, data) => {
      if (err) {console.error(err)}
      else {res.status(200).send(data)}
    });
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
    console.log(req.query);
    const { answer } = req.query;

    Answer.find({
      answer: answer
    }, (err, data) => {
      if (err) {console.error(err)}
      else {res.status(200).send(data)}
    });
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