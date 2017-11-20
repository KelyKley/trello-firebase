import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'redux-zero/react';
import TrelloApp from './TrelloApp';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import {readBoard} from './actions/actions';
import SignIn from './components/signin/signin';
import SignUp from "./components/signup/signup";

const Index = () =>  (
   <Provider store={store}>
      <HashRouter>
            <Switch>
               <Route path="/trello" component={TrelloApp} />
               <Route path="/signup" component={SignUp} />
               <Route path="/" component={SignIn} />
            </Switch>
      </HashRouter>
   </Provider>
)
readBoard();

ReactDOM.render(
   <Index />,
    document.getElementById('root'));
registerServiceWorker();
