import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>책을 선택해 주시옵소서</div>
		}
		return (
			<div>
				<h3>책 상세:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
