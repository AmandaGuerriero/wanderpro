import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Steps, Step } from 'react-step-builder';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Donate from "./pages/Donate";
import Nav from "./components/Nav";
import CreateItinerary from "./components/CreateItinerary/CreateItinerary"
import CreateActivityContainer from './components/Create-activity/CreateActivityContainer'
import Summary from "./components/Summary/Summary";
import Footer from "./components/Footer/Footer"
import Map from "./components/Map"
import './App.css'
import CreateActivity from "./components/Create-activity/Create-activity";

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

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Navigation = (props) => {
  return (
    <div className="flex-row space-between btn-container">
      <div>
        <button className="previous-btn" onClick={props.prev}>Previous</button>
      </div>
      <div>
        <button className="next-btn" onClick={props.next}>Next</button>
      </div>
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
      <Elements stripe={stripePromise}>
      <StoreProvider>
        <div>
          <StoreProvider>
              <Nav />
              <Switch>  
                <Route exact path="/donate" component={Donate} />
                            
                <Route exact path ='/create'>
                  <Steps config ={config}>
                    <Step exact path='/create' component={CreateItinerary} setLatitude={setLatitude} setLongitude={setLongitude}/>
                    <Step exact path='/activity' component = {CreateActivityContainer} />
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
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/itinerary/:id" component={Summary} />
                <Route exact path="/edititinerary/:id" component={CreateItinerary} />
                <Route exact path="/activity/:id" component={CreateActivityContainer} />
                <Route exact path="/map" component={Map} />
              </Switch>
              <Footer/>
            </StoreProvider>
        </div>
      </StoreProvider>
      </Elements>
      </Router>
    </ApolloProvider>
  );
}
export default App;