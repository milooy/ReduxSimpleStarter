import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this); //이거 안하면 아래 onInputChange에서 this가 안먹는다
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit= {this.onFormSubmit} className="input-group">
				<input
					placeholder="좋아하는 도시를 입력하세요"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">제출</button>
				</span>
			</form>
		)
	}
}
