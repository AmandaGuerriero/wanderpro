import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

import Home from "./pages/Home";
import Nav from "./components/Nav";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={SinglePost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
