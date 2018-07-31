const faker = require('faker');
const { Product, Question, Answer } = require('./models');

for (let i = 0; i < 10; i++) {
  Product.create({
    name: faker.commerce.productName()
  }, (err, data) => {
    if (err) {console.error(err)}
    else {console.log(data)}
  });
}

for (let j = 0; j < 50; j++) {
  Question.create({
    productId: faker.random.number({min: 1, max: 10, precision: 1}),
    question: faker.lorem.sentence()
  }, (err, data) => {
    if (err) {console.error(err)}
    else {console.log(data)}
  });
}

for (let k = 0; k < 100; k++) {
  Answer.create({
    questionId: faker.random.number({min: 1, max: 50, precision: 1}),
    answer: faker.lorem.sentence(),
    username: faker.internet.userName()
  }, (err ,data) => {
    if (err) {console.error(err)}
    else {console.log(data)}
  });
}