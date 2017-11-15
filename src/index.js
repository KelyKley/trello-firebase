import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrelloApp from './TrelloApp';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'redux-zero/react'
import store from './store/store'
import {readBoard} from './actions/actions'

const Index = () =>  (
   <Provider store={store}>
         <TrelloApp />
   </Provider>
)
readBoard();

ReactDOM.render(
   <Index />,
    document.getElementById('root'));
registerServiceWorker();
