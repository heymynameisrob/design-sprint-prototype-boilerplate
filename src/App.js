import React, { useEffect } from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

const Home = () => (
  <>
    <Header as="h1">Home</Header>
    <Link to="/about">About</Link>
  </>
)

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />                  
        <Route path="/about">
          <h2>About</h2>
          <Link to="/">Home</Link>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
