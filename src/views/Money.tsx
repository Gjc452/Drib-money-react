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
const TypeWrapper = styled.div`
  background: #c4c4c4;
`;
type Type = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  type: '-' as Type,
  amount: 0,
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
    if (selected.amount === 0) {
      return alert('请输入金额');
    }
    if (selected.tagIds.length === 0) {
      return alert('请选择至少一个标签');
    }
    addRecord(selected);
    alert('保存成功');
    setSelected(defaultFormData);

  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}/>
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}/>
      <TypeWrapper>
        <TypesSection value={selected.type}
                      onChange={(type) => onChange({type})}/>
      </TypeWrapper>
      <NumberPadSection value={selected.amount} onOK={submit}
                        onChange={(amount) => onChange({amount})}/>
    </MyLayout>
  );
}

export default Money;
