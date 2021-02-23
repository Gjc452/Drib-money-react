import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from '../components/TagsSection';
import NumberPadSection from '../components/NumberPadSection';
import TypesSection from '../components/TypesSection';
import NotesSection from '../components/NotesSection';
import useRecords from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Type = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  type: '-' as Type,
  amount: '0',
};
function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {records, addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    addRecord(selected);
    alert('保存成功');
    setSelected(defaultFormData);
  };
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}/>
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}/>
      <TypesSection value={selected.type}
                    onChange={(type) => onChange({type})}/>
      <NumberPadSection value={selected.amount} onOK={submit}
                        onChange={(amount) => onChange({amount})}/>
    </MyLayout>
  );
}

export default Money;