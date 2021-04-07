import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Statistics from 'views/Statistics';
import Money from './views/Money';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import Tag from './views/Tag';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/tags" exact={true}>
          <Tags/>
        </Route>
        <Route path='/tags/:id' exact={true}>
          <Tag/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from='/' to='/money'/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
