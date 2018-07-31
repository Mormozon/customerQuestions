import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles/app.css';

import Search from './Search.jsx';
// import QAList from './QAList.jsx';


class QAModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <div class="container">
        <h2>Customer questions & answers</h2>
        <div class={ styles.widget }>
          <div>
            <Search />
          </div>
        </div>
      </div>
    )
  }
}

export default QAModule;