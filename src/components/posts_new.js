import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

// 폼이 전송되면 handleSubmit가 폼 컨텐츠와 함께 불린다. 그리고 createPost액션을 부르는데 title, ctg, cnt의 값을 담아 부른다. 그럼 createPost액션에서 props로 이들을 받아 서버로 POST한다

class PostNew extends Component {
  // Props가 부모에서 자식으로 전달되는 반면 context는 어디든 가능. 웬만하면 안쓰는게 낫다
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    // createpost에서 블로그포스트가 다 만들어지면 promise를 반환함
    this.props.createPost(props).then(
      () => {
        this.context.router.push('/');
      }
    )
  }

  render() {
    // const handleSubmit = this.props.handleSubmit; // es6버전은 const { handleSubmit } = this.props;
    // const title = this.props.fields.title 이랑 아래랑 같다
    // 밑에서 reduxForm으로 fields:['title', 'categories']넘겨서 여기서 this.props.fields.title 로 접근할 수 있는거다
    const { fields: { title, categories, content}, handleSubmit } = this.props;

    // {...title}하면 태그에 reduxform의 요소인 onChange={title.onChange}등등 모두 안써줘도 온갖거 다 들어간다

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>새로 만들기</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error: ''}
          </div>
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
            <div className="text-help">
              {categories.touched ? categories.error: ''}
            </div>
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
            <div className="text-help">
              {content.touched ? content.error: ''}
            </div>
        </div>
        <button type="submit" className="btn btn-primary">전송</button>
        <Link to="/" className="btn btn-danger">취소</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Username 입력해줘용';
  }
  if (!values.categories) {
    errors.categories = 'categories 입력해줘용';
  }
  if (!values.content) {
    errors.content = 'content 입력해줘용';
  }

  return errors;
}

// connect: 첫번째인자가 mapStateToProps, 두번째 인자가 mapDispatchToProps
// reduxForm: 첫번째인자가 form config, 두번째가 mapStateToProps, 세번째가 mapDispatchToProps

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate: validate
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
