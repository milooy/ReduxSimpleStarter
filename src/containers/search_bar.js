import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this); //이거 안하면 아래 onInputChange에서 this가 안먹는다
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// null 이유: state는 필요 없고 뭐가 오든지 mapDispatchToProps로 보낸다
export default connect(null, mapDispatchToProps)(SearchBar)
