import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const MyContext = React.createContext('');

ReactDOM.render(
    <MyContext.Provider key={"context"} value={'works'}>
    <App key={"app"}/>
    </MyContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
