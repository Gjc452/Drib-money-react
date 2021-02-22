import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const TypesSection = ()=>{
  return(
    <Wrapper>
      <ul>
        <li className='selected'>支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  )
}
export default TypesSection