import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import Activities from "./Activities";
import AskMe from "./AskMe";
import BannerMsg from "./BannerMsg";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
                    <Grid item xs={12}>
                        <BannerMsg/>
                    </Grid>
                </Grid>
                <Activities/>
                <AskMe/>
                <Copyright/>
            </div>
        );
    }
}

export default Home;
