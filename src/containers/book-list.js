import React, { Component } from 'react'; // Component 대신 container쓴다. Redux에서 쓰는 react component임. React랑 redux랑 연결하려면 react-redux써야됨!
import { connect } from 'react-redux'

class BookList extends Component {
renderList() {
	return this.props.books.map((book) => {
		return (
			<li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
