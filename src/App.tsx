import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import Standard from './Pages/Standard';
import WithPopout from './Pages/WithPopout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/standard">
            <Standard />
          </Route>
          <Route path="/with-popout">
            <WithPopout />
          </Route>
          <Route path="/" exact>
            <nav>
              <Link to="/standard">
                Standard
              </Link>
              <br />
              <Link to="/with-popout">
                WithPopout
              </Link>
            </nav>
          </Route>
          <Route path="/">
            Not Found
            <br />
            <Link to="/">
              Go Home
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
