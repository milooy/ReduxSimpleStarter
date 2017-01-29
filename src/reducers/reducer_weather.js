import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]); // 이런 식으로 해도 되고 아래처럼 해도 됨. state는 항상 새로운 인스턴스를 반환해야 하기 때문에 state.push이렇게 추가하지 말고 concat으로 새 array를 만들어라
			return [action.payload.data, ...state]; // [city, city, city]가 됨. [city, [city, city]]이런게 아니고.
	}
	return state;
}
