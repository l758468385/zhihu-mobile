import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* Redux */
import {Provider} from 'react-redux';
import store from './store/index'

import {ConfigProvider} from 'antd-mobile';
import zhCN from "antd-mobile/es/locales/zh-CN";


import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <App></App>
        </Provider>
    </ConfigProvider>
);

