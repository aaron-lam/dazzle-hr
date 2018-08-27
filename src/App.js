import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  /**
   * Initialize firebase
   */
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBCt1MF2aSe52sQC1iAU1e1vAZ7ORrJm1I",
      authDomain: "manager-114b9.firebaseapp.com",
      databaseURL: "https://manager-114b9.firebaseio.com",
      projectId: "manager-114b9",
      storageBucket: "",
      messagingSenderId: "40172075943"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
