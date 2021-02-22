import {Link} from 'react-router-dom';
import React from 'react';

function NoMatch() {
  return (
    <div>
      <div>当前页面不存在</div>
      <Link to="/">返回首页</Link>
    </div>
  );
}

export default NoMatch;