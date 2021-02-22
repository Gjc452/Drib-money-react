import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';
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
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/money">
            <Icon name='money'/>
            <span>记账</span>
          </Link>
        </li>
        <li>
          <Link to="/tags">
            <Icon name='label'/>
            <span>标签</span>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name='statistics'/>
            <span>统计</span>
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;