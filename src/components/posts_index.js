import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
  //컴포넌트가 DOM 위에 만들어지기 전에 실행
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <Link to="/posts/new" className="btn btn-primary">
          Add a post
        </Link>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

// 이거 지우고 아래처럼 줄일 수 있다
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch)
// }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
