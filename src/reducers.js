import {VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

// function todoApp(state, action){
//   if(typeof(state) === 'undefined'){
//     return initialState
//   }
//
//   // For now, don't handle any actions
//     // and just return the state given to us.
//   return state
// }

//ES6 标准下 还可以这样写
// function todoApp(state = initialState, action){
//   return state
// }

function todoApp(state = initialState, action){
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos:
          state.todos.map((todo, index) => {
            if(index === action.index){
              return Object.assign({}, todo, {
                completed = !todo.completed
              })
            }
            return todo
          })
      })
    case SET_VISIBILITY_FILTER:
      // Object.assign(target, ...sources)
      return Object.assign({}, state,{
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
