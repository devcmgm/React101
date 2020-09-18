import React from 'react';
import mainSmile from '../images/mainsmile.jpg';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import HeaderMsg from "./HeaderMsg";
import { motion } from "framer-motion"

const useStyles = makeStyles({
    mypic: {
        backgroundImage: mainSmile,
        color: 'black',
        font: 'perpetua',
        fontSize: 'large',
        height: '10%',
    },
    circle: {
          width: '100px',
          height: 80,
          borderRadius: '50%',
    },
});

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export default function BannerMsg() {
    const classes = useStyles();
    return (
        <div>
            <motion.div
                drag="x"
                dragConstraints={{ left: -500, right: 100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >

            <Container className={classes.mypic}>
                <HeaderMsg/>
                <img alt={"MainImage"} src={mainSmile} style={{width: '100%'}}/>
            </Container>
            </motion.div>
        </div>
    )
};
