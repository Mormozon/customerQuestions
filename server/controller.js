const { Product, Question, Answer } = require ('../database/models');

const controller = {
  getProduct: (req, res) => {
    let { productName } = req.query;
    
    Product.find({
      where: {
        name: productName
      }})
      .then(product => {res.status(200).send(product)})
      .catch(err => {console.error(err)});
  },
  getQuestion: (req, res) => {
    let { productId } = req.query;

    Question.findAll({
      where: {
        productId: productId
      }
    })
    .then(question => {res.status(200).send(question)})
    .catch(err => {console.error(err)});
  },
  postQuestion: (req, res) => {
    let { question } = req.body;

    Question.findOrCreate({
      where: {
        question: question
      }
    })
    .then(data => {res.status(201).send(data)})
    .catch(err => {console.error(err)});
  },
  getAnswer: (req, res) => {
    let { questionId } = req.query;
    
    Answer.findAll({
      where: {
        questionId: questionId
      } 
    })
    .then(answer => {res.status(200).send(answer)})
    .catch(err => {console.error(err)});
  },
  postAnswer: (req, res) => {
    let { answer, username } = req.body;

    Answer.findOrCreate({
      where: {
        answer: answer,
        username: username
      }
    })
    .then(data => {res.status(201).send(data)})
    .catch(err => {console.error(err)});
  }
}

module.exports = controller;