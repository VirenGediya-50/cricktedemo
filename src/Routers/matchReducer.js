
const InitialState = {

}


const  matchReducer = (state = InitialState, action) => {
    switch (action.type) {
      case '':
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })

      default:
        return state;
    }
  }

export default matchReducer