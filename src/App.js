import React from 'react';
// import { Menu, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
