import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    text-align: right;
    background: white;
    font-size: 36px;
    line-height: 72px;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25)
  }
  > .pad{
    > button{
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;
      &.ok{
        height: 128px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5){
        background: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: #d3d3d3;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background: #c1c1c1;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: #b8b8b8;
      }
      &:nth-child(12){
        background: #a9a9a9;
      }
      &:nth-child(14){
        background: #9a9a9a;
      }
    }
  }
`;

type Props = {
  value: number;
  onChange: (amount: number) => void;
  onOK: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput;
    if (output.length >= 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onClickButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null || output.length >= 16) {return;}
    if ('0123456789'.indexOf(text) >= 0) {
      if (output === '0') {
        setOutput(text);
      } else {
        setOutput(output + text);
      }
    } else if (text === '.') {
      if (output.indexOf(text) >= 0) {
        return;
      } else {
        setOutput(output + text);
      }
    } else if (text === '删除') {
      if (output.length === 1) {
        setOutput('0');
      } else {
        setOutput(output.slice(0, -1));
      }
    } else if (text === '清空') {
      setOutput('0');
    } else if (text === 'OK') {
      props.onOK();
    }
  };
  return (
    <Wrapper>
      <div className='output'>
        {output}
      </div>
      <div onClick={onClickButton} className='pad clearfix'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};
export default NumberPadSection;