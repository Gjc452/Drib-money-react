import Layout from '../components/Layout';
import React, {useState} from 'react';
import TypesSection from '../components/TypesSection';
import styled from 'styled-components';
import useRecords from '../hooks/useRecords';
import useTags from '../hooks/useTags';
import dayjs from 'dayjs';

const TypeWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Tags() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <TypeWrapper>
        <TypesSection value={type}
                      onChange={(value) => setType(value)}/>
      </TypeWrapper>
      <div>
        {records.map(record => {
          return <Item>
            <div className='tags'>{record.tagIds.map(tagId => <span>{getName(tagId)}</span>)}</div>
            {record.note && <div className='note'>{record.note}</div>}
            <div>￥{record.amount}</div>
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export default Tags;