<<<<<<< HEAD
// 자바스크립트 모듈. 모든 js 라이브러리들 캡슐화한다.
import _ from 'lodash'
import React, { Component } from 'react' // 리액트를 쓰고싶어요~ (node_modules 안에 있음). 리액트 컴포넌트 만드는데 쓰고
import ReactDOM from 'react-dom' // 돔 만드는데 쓴다
import SearchBar from './components/search_bar' // 라이브러리는 이름만 써도 되고, 컴포넌트는 상세 경로 써줘야 함.
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
>>>>>>> react_2

const API_KEY = 'AIzaSyB5xh3OSMPQmo1L8CdFXBbYO4HvDilhn1E';

<<<<<<< HEAD
// 컴포넌트 만들기. HTML을 만들어낸다. 이건 컴포넌트 인스턴스 아니고 클래스.
// 한 파일당 한 컴포넌트만 만든다!
class App extends Component { // const: 상수
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }
=======
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
>>>>>>> react_2

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container')
);
