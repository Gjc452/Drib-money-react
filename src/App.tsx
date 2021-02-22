import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
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
  return <h2>记账</h2>;
}

function Tags() {
  return <h2>标签</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

export default App;
