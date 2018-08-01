import React from 'react';
import axios from 'axios';
import QuestionComponent from './QuestionComponent.jsx';

class QAContainerComponent extends React.Component {
  constructor({ productId }) {
    super({ productId })
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/question', {
        params: {
          productId: productId
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          // determine format of data returned from db
          questions: res.data.questions
        });
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="question__list">
        {this.state.questions.map(question => {
          return <QuestionComponent question={question} />
        })}
      </div>
    )
  }
}

export default QAContainerComponent;