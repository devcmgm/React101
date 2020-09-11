import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MyContext = React.createContext('');

ReactDOM.render(
    <MyContext.Provider value={'works'}>
    <App />
    </MyContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
