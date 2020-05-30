import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <SignIn />
            <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
