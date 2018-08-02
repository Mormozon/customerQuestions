import React from 'react';
import styles from './styles/search.css';

const Search = () => (
  <div className={ styles.searchbar }>
    <div className={ styles.searchLogo }></div>
    <input className={ styles.searchinput }type="search" maxlength="150" placeholder="Have a question? Search for answers"/>
  </div>
);

export default Search;