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
import {composeWithDevTools} from 'redux-devtools-extension';
import uuid from 'uuid';

const history = createBrowserHistory();
const initialState = {
    view: 'TABLE',
    filter: 'SHOW_ALL',
    dates: {
        'June 2018': [
            {
                id: uuid(),
                name: 'Max',
                date: {
                    day: 18,
                    month: 6,
                    year: 1997
                },
                tel: '1234',
                info: 'some test info',
                img: '',
                sex: 'male',
                filter: [
                    'SHOW_ALL',
                    'SHOW_FAMILY'
                ]
            },
            {
                id: uuid(),
                name: 'Max',
                date: {
                    day: 10,
                    month: 2,
                    year: 1997
                },
                tel: '1234',
                info: 'some test info',
                img: '',
                filter: [
                    'SHOW_ALL',
                    'SHOW_FRIENDS',
                    'SHOW_WORK'
                ],
                sex: 'female'
            },
            {
                id: uuid(),
                name: 'Max',
                date: {
                    day: 17,
                    month: 6,
                    year: 1997
                },
                tel: '1234',
                info: 'some test info',
                img: '',
                filter: [
                    'SHOW_ALL',
                ],
                sex: 'female'
            }
        ],
    }

}
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
