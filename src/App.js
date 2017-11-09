import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Switch,Route,BrowserRouter} from 'react-router-dom'

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact/xxx/xxx/xxxxx">Contact</Link>
    <Link to="/1234">1234</Link>
  </nav>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <div>
            <Links/>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route  path="/about" render={() => <h1>About</h1>} />
          <Route 
            path="/:itemid"
            render={({match}) => (
              <h1>itemid: {match.params.itemid}</h1>
            )} />``
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
          </div>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
