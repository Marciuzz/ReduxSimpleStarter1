//state is not application state, it is a state only this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
