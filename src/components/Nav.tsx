import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Icon from './Icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow:  0 0 3px rgba(0,0,0,0.25);
  > ul{
    display: flex;
    > li{
      width: 33.3333%;
      text-align: center;
      > a{
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: red;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName='selected'>
            <Icon name='money'/>
            <span>记账</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName='selected'>
            <Icon name='label'/>
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name='statistics'/>
            <span>统计</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;