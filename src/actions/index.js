export function selectBook(book) {
	// action 이니까 액션(type 필수)을 return해야함
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
