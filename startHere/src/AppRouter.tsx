import React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import { AmplifySignOut, AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';

import Home from "./pages/Home";
import SignIn from "./pages/Signin";

const formFields =
    [
        {
            type: "email",
            required: true,
        },
        {
            type: "password",
            required: true,
        },
        {
            type: "phone_number",
            label: 'Phone Number',
            required: false,
            dialCode: '+61'
        },
        {
            type: "name",
            label: "Contact Name",
            placeholder: "e.g. John Smith",
            required: false,
        }
    ];

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
                           <div>
                           <AmplifyAuthenticator usernameAlias="email">
                               <AmplifySignUp formFields={formFields} usernameAlias="email" slot="sign-up"  />
                               <AmplifySignOut />
                           </AmplifyAuthenticator>
                               <SignIn  {...props} />
                           </div>
                       )}
                />
            </Switch>
            {props.children}
        </BrowserRouter>
    );
};

export default AppRouter;
