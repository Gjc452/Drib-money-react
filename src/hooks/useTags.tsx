import {useEffect, useState} from 'react';
import createId from '../lib/createId';
import useUpdate from './useUpdate';

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
      let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
      if (localTags.length === 0) {
        localTags = [
          {id: createId(), name: '衣'},
          {id: createId(), name: '食'},
          {id: createId(), name: '住'},
          {id: createId(), name: '行'}
        ];
      }
      setTags(localTags);
    }, []);
    useUpdate(() => {
      window.localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags]);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const addTag = () => {
      const tagName = window.prompt('新标签的名称为');
      if (tagName !== null && tagName !== '') {
        let tagList = tags.map(tag => tag.name);
        if (tagList.indexOf(tagName) >= 0) {
          window.alert('标签已存在');
        } else {
          setTags([...tags, {id: createId(), name: tagName}]);
          console.log(tags);
        }
      }
    };
    const findTagIndex = (id: number) => {
      let result = -1;
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].id === id) {
          result = i;
        }
      }
      return result;
    };
    const updateTag = (id: number, {name}: { name: string }) => {
      setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
    };
    const deleteTag = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
      window.history.back();
    };
    return {tags: tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag};
  }
;
export default useTags;