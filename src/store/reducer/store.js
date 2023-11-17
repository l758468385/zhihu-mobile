
import { deepClone } from '../../utils'
import * as TYPES from '../action-types';

let initial = {
  list: null
}
export default function storeReducer(state = initial, action) {
  state = deepClone(state)


  switch (action.type) {
    // 通过判断做一些事情

    default:
      return state
  }
  return state
}