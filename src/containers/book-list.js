import React, { Component } from 'react'; // Component 대신 container쓴다. Redux에서 쓰는 react component임. React랑 redux랑 연결하려면 react-redux써야됨!
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
				key={book.title}
				onClick={() => this.props.selectBook(book) }
				className="list-group-item">{book.title}</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
			{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// 리턴되는게 this.props가 됨
	return {
		books: state.books
	};
}

// 리턴되는게 this.props가 됨
function mapDispatchToProps(dispatch) {
	// selectBook(action)이 불릴때마다 결과값이 모든 reducers로 전달된다
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// BookList를 component로부터 container로 활성화시킴. prop이 되도록 한다.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
