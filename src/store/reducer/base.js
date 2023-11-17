
import { deepClone } from '../../utils'
import * as TYPES from '../action-types';

let initial = {
  info: null
}
export default function baseReducer(state = initial, action) {
  state = deepClone(state)


  switch (action.type) {
    // 通过判断做一些事情

    default:
      return state
  }
  return state
}