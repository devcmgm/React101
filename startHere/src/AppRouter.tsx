import React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';

import Home from "./pages/Home";
import SignIn from "./pages/Signin";

const AppRouter: React.FC = (props ) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact
                       path="/home"
                       render={(props: RouteComponentProps) => (
                           <Home {...props} />
                       )}
                />
                <Route exact
                       path="/ask"
                       render={(props: RouteComponentProps) => (
                           <Home {...props} />
                       )}
                />
                <Route exact
                       path="/"
                       render={(props: RouteComponentProps) => (
                           <SignIn {...props} />
                       )}
                />
            </Switch>
            {props.children}
        </BrowserRouter>
    );
};

export default AppRouter;
