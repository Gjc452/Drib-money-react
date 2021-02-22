import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from '../components/TagsSection';
import NumberPadSection from '../components/NumberPadSection';
import TypesSection from '../components/TypesSection';
import NotesSection from '../components/NotesSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Type = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    type: '-' as Type,
    amount: '0',
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}/>
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}/>
      <TypesSection value={selected.type}
                    onChange={(type) => onChange({type})}/>
      <NumberPadSection value={selected.amount} onOK={() => {}}
                        onChange={(amount) => onChange({amount})}/>
    </MyLayout>
  );
}

export default Money;