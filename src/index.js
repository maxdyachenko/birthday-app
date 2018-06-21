import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import {applyMiddleware, createStore} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {ConnectedRouter} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import uuid from 'uuid'
import moment from 'moment'

const history = createBrowserHistory();
const initialState = {
    filter: 'SHOW_ALL',
    search: '',
    data: [
        {
            id: uuid(),
            name: 'Max',
            date: moment("1995-12-25"),
            tel: '1234',
            info: 'some test info',
            img: '',
            sex: 'male',
            filter: [
                'SHOW_ALL',
                'SHOW_FAMILY'
            ]
        }
    ]

};

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            // ... other middlewares ...
        ),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
