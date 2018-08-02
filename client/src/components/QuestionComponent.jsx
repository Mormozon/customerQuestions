import React from 'react';
import axios from 'axios';
import styles from './styles/questionComponent.css';

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      answer: '',
      username: '',
      date: '',
      voted: false,
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
          this.setState({answers: []});
        } else {
          this.setState({
            answers: res.data,
            answer: res.data[0].answer,
            username: res.data[0].username,
            date: serializeDate(res.data[0].date)
          });
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    console.log(this.state.answer.length);
    if (!this.state.answers.length) {
      return (
        <span></span>
      )
    }
    return (
      <div className={ styles.qaItemContainer }>
        <div className={ styles.questionVote }>
          <ul className={ styles.voteList }>
            <li className={ styles.upvote }></li>
            <li className={ styles.voteCount }>0</li>
            <li className={ styles.voteCountText}>votes</li>
            <li className={ styles.downvote }></li>
          </ul>
        </div>
        <div className={ styles.textBody }>
          <div className={ styles.questionComponent }>
            <div className={ styles.questionStatic }>Question: </div>
            <div className={ styles.questionText }>{this.props.question.question}</div>
          </div>
          <div className={ styles.answerComponent }>
            <div className={ styles.answerStatic }>Answer: </div>
            <div className={ styles.answerTextBody }>
              <div className={ styles.answerText }>{this.state.answer}</div>
              <div className={ styles.answerInfo }>{`By ${this.state.username} on ${this.state.date}`}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function serializeDate(date) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [ year, month, day ] = date.slice(0, 10).split('-');
  return `${months[(parseInt(month) - 1)]} ${day}, ${year}`;
}

export default QuestionComponent;