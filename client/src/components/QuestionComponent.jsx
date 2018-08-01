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
            answers: res.data,
            answer: res.data[0].answer,
            username: res.data[0].username,
            date: res.data[0].date
          });
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className={ styles.question__body }>
        <div className={ styles.question__vote }>
          <ul className={ styles.vote__list }>
            <li className={ styles.upvote }></li>
            <li>0</li>
            <li className={ styles.downvote }></li>
          </ul>
        </div>
        <div className={ styles.text__body }>
          <div>
            <h3 className={ styles.question__text }>{`Question: ${this.props.question.question}`}</h3>
          </div>
          <div>
            <h3 className={ styles.answer__text }>{`Answer: ${this.state.answer}`}</h3>
            <h2 className={ styles.submit_info }>{`By ${this.state.username} on ${this.state.date.slice(0, 10)}`}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionComponent;