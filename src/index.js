import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider } from 'antd-mobile';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider >
    <App></App>
  </ConfigProvider>
);

