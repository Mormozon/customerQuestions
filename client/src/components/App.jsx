import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles/app.css';
import Search from './Search.jsx';

class App extends React.Component {
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
      <div className="container">
        <h2>Customer questions & answers</h2>
        <Search />
      </div>
    )
  }
}

export default App;