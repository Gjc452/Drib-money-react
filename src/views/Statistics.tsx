import Layout from '../components/Layout';
import React, {useState} from 'react';
import TypesSection from '../components/TypesSection';
import styled from 'styled-components';
import useRecords, {RecordItem} from '../hooks/useRecords';
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Tags() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [k: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(record => record.type === type);
  selectedRecords.map(r => {
    const key = dayjs(r.createAt).format('YY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <TypeWrapper>
        <TypesSection value={type}
                      onChange={(value) => setType(value)}/>
      </TypeWrapper>
      {array.map(([date, records]) => <div key={date}>
        <Header>
          {date}
        </Header>
        {records.map(record => {
          return <Item key={record.createAt}>
            <div className='tags'>{record.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}</div>
            <div className='note'>{record.note}</div>
            <div>￥{record.amount}</div>
          </Item>;
        })}
      </div>)}
    </Layout>
  );
}

export default Tags;