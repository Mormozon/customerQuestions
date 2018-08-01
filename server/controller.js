const { Product, Question, Answer } = require ('../database/models');

const controller = {
  getProduct: (req, res) => {
    const { productName } = req.query;
    
    Product.find({
      where: {
        name: productName
      }})
      .then(product => {res.status(200).send(product)})
      .catch(err => {console.error(err)});
  },
  getQuestion: (req, res) => {
    const { productId } = req.query;

    Question.findAll({
      where: {
        productId: productId
      }
    })
    .then(question => {res.status(200).send(question)})
    .catch(err => {console.error(err)});
  },
  getAnswer: (req, res) => {
    const { questionId } = req.query;
    
    Answer.findAll({
      where: {
        questionId: questionId
      } 
    })
    .then(answer => {res.status(200).send(answer)})
    .catch(err => {console.error(err)});
  }
}

module.exports = controller;