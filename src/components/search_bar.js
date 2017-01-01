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
  // 새 클래스 만들어지면 처음에 한 번 불림.
  constructor(props) {
    // extends받은 Component의 props를 불름
    super(props);
    // function component는 state 없고 class based component만 state 있다
    this.state = { term: '첫 밸류' };
  }

  render() { // function이라 써주지 않았지만 함수다. normal function 대신 render function 써준것.
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
