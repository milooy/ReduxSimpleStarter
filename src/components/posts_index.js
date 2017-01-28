import React, { Component } from 'react';

class PostsIndex extends Component {
componentWillMount() {
  console.log('액션크리에이터가 fetch posts할때 불린다');
}

  render() {
    return (
      <div>리스트</div>
    );
  }
}

export default PostsIndex;
