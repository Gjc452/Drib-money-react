import React from 'react';
import {useParams} from 'react-router-dom';
import useTags from '../useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Button from '../components/Button';
import Center from '../components/Center';
import styled from 'styled-components';


type Params = {
  id: string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <TopBar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <div>
        <label>
          <span>备注</span>
          <input defaultValue={tag.name} type="text" placeholder='请输入备注'/>
        </label>
      </div>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};
export default Tag;