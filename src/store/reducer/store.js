
import * as TYPES from '../constants/actionTypes'

let initial = {
  list: null
}
export default function storeReducer(state = initial, action) {
  state = {
    ...state,
    ...action.payload
  }

  switch (action.type) {
    case TYPES.SET_BASE_DATA:
      return {
        ...state,
        ...action.payload
      }
    case TYPES.SET_BASE_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case TYPES.SET_BASE_DATA_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case TYPES.SET_BASE_DATA_LOADING:
  }

  return state

}