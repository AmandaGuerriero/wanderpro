import React, { useState } from "react";
import { Steps, Step } from 'react-step-builder';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import CreateItinerary from "./components/CreateItinerary/CreateItinerary";
import CreateActivityContainer from './components/Create-activity/CreateActivityContainer';
import Summary from "./components/Summary/Summary";
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

const Navigation = (props) => {
  return (
    <div>
      <button onClick={props.prev}>Back</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

function App() {
  const [ latitude, setLatitude ] = useState(0)
  const [ longitude, setLongitude] = useState(0)
  // setLatitude('-19.00')
  console.log(latitude, longitude)

  const config = {
    navigation: {
      component: Navigation,
      location: "before"
    }
  }
  return (
    <ApolloProvider client={client}>
      <Router>
      <StoreProvider>
        <div>
          <StoreProvider>
              <Nav />
              <Switch>
                <Steps config ={config}>
                  <Step exact path='/create' component={CreateItinerary} setLatitude={setLatitude} setLongitude={setLongitude}/>
                  <Step exact path='/activity' component = {CreateActivityContainer} />
                  <Step exact path='/summary' component = {Summary} latitude={latitude} longitude={longitude} />
                </Steps>
                {/* <Route path="/create">
                  <CreateItinerary setLatitude={setLatitude} setLongitude={setLongitude} />
                </Route>
                <Route exact path="/activity" component={CreateActivity} />
                <Route path="/summary">
                  <Summary latitude={latitude} longitude={longitude}/>
                </Route> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
               
              </Switch>
            </StoreProvider>
        </div>
      </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}
export default App;