import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Chats from "./Chats"
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/* header -- has to be inside router or it'll never appear */}
      <Router>
        {/* route with "/" is last because JS reads the code from top to bottom */}
        {/* otherwise it would mark "/" as true because that's always the first step of other paths */}
        {/* backButton is true only if we're in /chat route so it's only true then and when it's false
        then we render the profile icon (see Header file, ternary part) */}
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <h1>Messages </h1>
            <Chats/>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router> 
        {/* cards */}
        {/* bottom buttons */}
        {/* chats screen */}
        {/* individual chat screen */}
    </div>
  );
}

export default App;
