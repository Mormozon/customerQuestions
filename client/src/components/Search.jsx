import React from 'react';
import styles from './styles/search.css';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div className={ styles.searchbar }>
        <div className={ styles.searchLogo }></div>
        <input className={ styles.searchinput }type="search" maxlength="150" placeholder="Have a question? Search for   answers" onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Search;