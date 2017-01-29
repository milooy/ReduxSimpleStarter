import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
  //컴포넌트가 DOM 위에 만들어지기 전에 실행
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Link to="/posts/new" className="btn btn-primary">
          Add a post
        </Link>
        <div>리스트</div>
      </div>
    );
  }
}

// 이거 지우고 아래처럼 줄일 수 있다
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch)
// }

export default connect(null, { fetchPosts })(PostsIndex)
