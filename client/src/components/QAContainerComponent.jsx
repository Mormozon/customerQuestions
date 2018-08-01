import React from 'react';
import axios from 'axios';
import QuestionComponent from './QuestionComponent.jsx';
import styles from './styles/qaContainerComponent.css';

class QAContainerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/question', {
        params: {
          productId: this.props.productId
        }
      })
      .then(res => {
        this.setState({
          questions: res.data
        });
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="question__list">
        {this.state.questions.map((question, i) => {
          return <QuestionComponent question={question} key={i} />
        })}
      </div>
    )
  }
}


export default QAContainerComponent;