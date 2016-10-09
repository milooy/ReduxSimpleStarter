// const Component = React.Component 랑 같음
import React, { Component } from 'react';

/* Functional Component
const SearchBar = () => {
  return <input />;
};
*/

// Class based Component
// React.Component가 갖는 모든 속성을 extends받는 클래스
class SearchBar extends Component {
  render() { // function이라 써주지 않았지만 함수다. normal function 대신 render function 써준것.
    return <input onChange={event => console.log(event.target.value)}/>; // JSX에선 js 변수 쓸때 {}로 싸서 씀
  }
}

export default SearchBar;
