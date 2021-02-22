import styled from 'styled-components';
import React, {useState} from 'react';
import useTags from '../useTags';

const Wrapper = styled.section`
  background: #FFF;
  flex-grow: 1;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol{
    margin: 0 -12px;
    >li{
      background: #D9D9D9; border-radius: 18px;
      display: inline-block; padding: 3px 18px;
      font-size: 14px; margin: 8px 8px;
      &.selected{
        background: #F60;
      }
    }
  }
  > button{
    background: none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666; margin-top: 8px;
  }
`;
type Props = {
  value: number[];
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      let tagList = tags.map(tag => tag.name);
      if (tagList.indexOf(tagName) >= 0) {
        window.alert('标签已存在');
      } else {
        setTags([...tags, {id: Math.random(), name: tagName}]);
      }
    }
  };
  const onToggleTag = (tagId: number) => {
    if (selectedTagIds.indexOf(tagId) >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li onClick={() => {onToggleTag(tag.id);}} key={tag.id}
                             className={(getClass(tag.id))}>{tag.name}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export default TagsSection;