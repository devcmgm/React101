import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import PersonForm from "./PersonForm";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class Home extends React.Component<RouteComponentProps> {

    render() {

        return (
            <div>
                <Grid container>
                    <Grid item xs={6}>
                        <PersonForm/>
                    </Grid>
                    <Grid item xs={6}>
                        <Copyright/>
                    </Grid> </Grid>
            </div>
        );
    }
}

export default Home;
