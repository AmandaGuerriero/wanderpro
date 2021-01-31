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
import CreateItinerary from "./components/CreateItinerary/CreateItinerary"
import CreateActivity from './components/Create-activity/Create-activity'
import Summary from "./components/Summary/Summary";
import Footer from "./components/Footer/Footer"
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
      <button onClick={props.prev}>Global Previous</button>
      <button onClick={props.next}>Global Next</button>
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
                <Route exact path ='/test1'>
                  <Steps config ={config}>
                    <Step exact path='/create' component={CreateItinerary} setLatitude={setLatitude} setLongitude={setLongitude}/>
                    <Step exact path='/activity' component = {CreateActivity} />
                    <Step exact path='/summary' component = {Summary} latitude={latitude} longitude={longitude} />
                  </Steps>
                </Route>
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
              <Footer/>
            </StoreProvider>
        </div>
      </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}
export default App;