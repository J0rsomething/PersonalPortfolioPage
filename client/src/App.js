import React, { Component } from 'react'
import Footer from './components/Footer'
import Routes from './routes'
import { browserHistory } from 'react-router'

import styles from './styles/App.scss'

class App extends Component {
  _onChange = ()=>{
    console.log('asdf');
  }
  render() {
    return (
      <div className={styles.app_container}>
        <div className={styles.app_body_container}>
          <Routes history={browserHistory}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
