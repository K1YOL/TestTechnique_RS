import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
    },
    appbar:{
        background: 'none',
        fontFamily:'Nunito'
    },
    icon:{
        color: '#fff',
        fontSize: '2rem'
    },
    appbarTitle:{
        flexGrow: 1
    },
    appbarWrapper:{
        width:'80%',
        margin: '0 auto'
    },
    aboxSpan:{
        color: "red"
    },
}));

//Petit Header simple
export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Test Technique <span className={classes.aboxSpan}> RedSpher.</span></h1>
                 <IconButton>
                     <SortIcon className={classes.icon}/>
                 </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}