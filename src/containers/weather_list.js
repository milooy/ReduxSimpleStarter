import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Chart from '../components/chart'

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart data={temps} color="orange" />
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>온도</th>
						<th>기압</th>
						<th>습도</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

// function mapStateToProps(state) {
// 	return { weather: state.weather }; // 이 문장은 아래와 같이 줄일 수 있다
// }
function mapStateToProps({weather}) {
	console.log(weather)

	return { weather }; // {weather} === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
