import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles/app.css';

import Search from './Search.jsx';
import QAContainerComponent from './QAContainerComponent.jsx';


class QAModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: Math.floor(Math.random() * 10) + 1
    }
  }

  render() {
    return (
      <div className={ styles.container }>
        <h2>Customer questions & answers</h2>
        <div className={ styles.widget }>
          <div>
            <Search />
          </div>
          <br />
          <div>
            <QAContainerComponent productId={this.state.productId} />
          </div>
        </div>
      </div>
    )
  }
}

export default QAModule;