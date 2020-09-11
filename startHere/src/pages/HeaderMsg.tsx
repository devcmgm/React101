import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    head: {
        background: '#FBD0BE',
        color: 'black',
        height: 90,
        fontSize: 'large',
    },
});

export default function HeaderMsg() {
    const classes = useStyles();
    return (<div className={classes.head}>
                <h2>Positively Montgomery</h2>
                <h2>A Southern Lifestyle brand.</h2>
            </div>
    )
};
