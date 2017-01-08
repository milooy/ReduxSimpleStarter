// state는 applicaiton state가 아니고 reducer가 책임갖고 있는 state를 말함.
// (es6문법) state가 undefined로 들어오면 null을 넣어준다
export default function(state = null, action) {
  switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}
