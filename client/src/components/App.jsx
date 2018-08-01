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
      productId: 2
    }
  }

  componentDidMount() {
    axios
      .get('/api/product', {
        params: {
          id: productId
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err)
      });
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
            <QAContainerComponent productId={this.state.productId}/>
          </div>
        </div>
      </div>
    )
  }
}

export default QAModule;