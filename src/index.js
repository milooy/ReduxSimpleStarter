// 자바스크립트 모듈. 모든 js 라이브러리들 캡슐화한다.
import React from 'react' // 리액트를 쓰고싶어요~ (node_modules 안에 있음). 리액트 컴포넌트 만드는데 쓰고
import ReactDOM from 'react-dom' // 돔 만드는데 쓴다

// 컴포넌트 만들기. HTML을 만들어낸다. 이건 컴포넌트 인스턴스 아니고 클래스.
const App = function() { // const: 상수
  return <div>Hi</div>; // JSX를 반환하는 js function
}

// 이 컴포넌트로 만들어진 HTML을 페이지(의 DOM)으로 넣어라
ReactDOM.render(<App />, document.querySelector('.container')); //리액트야! 렌더해줘! 앱을! JSX태그 </>로 감싸서 클래스를 인스턴스화 하였다.
