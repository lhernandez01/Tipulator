import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import CalculateDashboard from './components/_CalculateDashboard';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <CalculateDashboard />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
