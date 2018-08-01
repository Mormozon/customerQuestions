import React from 'react';
import axios from 'axios';
import styles from './styles/qaListItem.css';

class QuestionComponent extends React.Component {
  constructor({ question }) {
    super({ question })
    this.state = {
      questionId: question.id,
      answers: [],
      voted: false
    }
  }

  componentDidMount() {
    axios
      .get('/api/answer', {
        params: {
          questionId: questionId
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          // determine format of data returned from db
          answers: res.data.answers
        });
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="question__body">
        <div className="question__vote">
          <div className="question__upvote" onClick={() => {this.handleUpvote(a.id)}}></div>
          <div className="question__voteText"></div>
          <div className="question__downvote"></div>
        </div>
        <h3 className="question__text">{`Question: ${question.question}`}</h3>
        <h3 className="answer__text">{`Answer: ${this.state.answers[0]}`}</h3>
      </div>
    )
  }
}

export default QuestionComponent;