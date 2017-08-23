import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// dom renderer, takes JSX and/or react Components, inject to 'root' of dom
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// hot reloading without page refresh
if(module.hot){
    module.hot.accept()
}

registerServiceWorker();
