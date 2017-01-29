import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

// 폼이 전송되면 handleSubmit가 폼 컨텐츠와 함께 불린다. 그리고 createPost액션을 부르는데 title, ctg, cnt의 값을 담아 부른다. 그럼 createPost액션에서 props로 이들을 받아 서버로 POST한다

class PostNew extends Component {
  render() {
    // const handleSubmit = this.props.handleSubmit; // es6버전은 const { handleSubmit } = this.props;
    // const title = this.props.fields.title 이랑 아래랑 같다
    // 밑에서 reduxForm으로 fields:['title', 'categories']넘겨서 여기서 this.props.fields.title 로 접근할 수 있는거다
    const { fields: { title, categories, content}, handleSubmit } = this.props;

    // {...title}하면 태그에 reduxform의 요소인 onChange={title.onChange}등등 모두 안써줘도 온갖거 다 들어간다

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>새로 만들기</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>
        <button type="submit" className="btn btn-primary">전송</button>
      </form>
    );
  }
}

// connect: 첫번째인자가 mapStateToProps, 두번째 인자가 mapDispatchToProps
// reduxForm: 첫번째인자가 form config, 두번째가 mapStateToProps, 세번째가 mapDispatchToProps

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostNew);

// user가 타이핑을 하면 application state에 다음과 같이 들어간다
/*
state === {
  form: {
    PostsNewForm: {
      title: 'aa',
      categories: 'bb',
      content: 'cc'
    }
  }
}
*/
