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
    tags: [] as string[],
    note: '',
    type: '-' as Type,
    amount: '0',
  });
  return (
    <MyLayout>
      <TagsSection selected={selected.tags}
                   onChange={(tags) => setSelected({
                     ...selected,
                     tags: tags
                   })}/>
      <NotesSection value={selected.note}
                    onChange={(note) => setSelected({
                      ...selected,
                      note: note
                    })}/>
      <TypesSection value={selected.type}
                    onChange={(type) => {
                      setSelected({
                        ...selected,
                        type: type
                      });
                    }}/>
      <NumberPadSection value={selected.amount} onOK={() => {}}
                        onChange={(amount) => {
                          setSelected({
                            ...selected,
                            amount: amount
                          });
                        }}/>
    </MyLayout>
  );
}

export default Money;