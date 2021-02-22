import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/tags">
          <Tags/>
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

function NoMatch() {
  return (
    <div>
      <div>当前页面不存在</div>
      <Link to="/">返回首页</Link>
    </div>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计</h2>
    </Layout>
  );
}

export default App;
