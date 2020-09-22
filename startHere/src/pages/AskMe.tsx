import React, {useEffect} from 'react';
import PersonForm from "./PersonForm";

const {Wit, log} = require('node-wit');

const client = new Wit({
    accessToken: 'CCRYRDP6SW7CWRVE5VGUBPH34MIOBYNV',
    logger: new log.Logger(log.DEBUG) // optional
});


export default function AskMe() {

    useEffect(() => {

        client.message('What is happening tomorrow ?').then((data: any) => {
            console.log('Ask Me: Yay, got Wit.ai response: ' + JSON.stringify(data));
        })
            .catch('AskMe:' + console.error);
    });

    return (
        <div className="Page1">
          <PersonForm/>
        </div>
    )
};
