// 用来创建 Store 的
import {applyMiddleware, createStore} from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise';

import reducer from './reducer';


// 根据不同的环境，使用不同的中间件

let middleware = [thunk, reduxPromise],
    env = process.env.NODE_ENV;

if (env === 'development') {
    middleware.push(reduxLogger);
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);
export default store