import React from 'react';
import axios from 'axios';
// import styles from './styles/qaListItem.css';

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      voted: false
    }
  }

  componentDidMount() {
    axios
      .get('/api/answer', {
        params: {
          questionId: this.props.question.id
        }
      })
      .then(res => {
        console.log(res.data);
        if (!res.data.length) {
          this.setState({answers: 'There are no answers.'});
        } else {
          this.setState({
            answers: res.data[0].answer
          });
        }
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
        <h3 className="question__text">{`Question: ${this.props.question.question}`}</h3>
        <h3 className="answer__text">{`Answer: ${this.state.answers}`}</h3>
      </div>
    )
  }
}

export default QuestionComponent;