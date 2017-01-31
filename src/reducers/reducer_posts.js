import { FETCH_POSTS, FETCH_POST } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      console.log("페치포스트 액션 불려서 리듀서로 들어갔다")
      return { ...state, all: action.payload.data };
    default:
      return state;
  }

}
