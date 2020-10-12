import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './aws-exports';

const MyContext = React.createContext('');

ReactDOM.render(
    <MyContext.Provider key={"context"} value={'works'}>
    <App key={"app"}/>
    </MyContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
