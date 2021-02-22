import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import TagsSection from '../components/TagsSection';
import NotesSection from '../components/NotesSection';
import NumberPadSection from '../components/NumberPadSection';
import TypesSection from '../components/TypesSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>
      <TypesSection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;