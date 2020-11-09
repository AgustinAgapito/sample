import React from 'react'
import bg from '../../../asset/concert.jpg'
import { makeStyles, Paper, Typography, Grid, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Topic from './Topic'
import ChatBox from './ChatBox'
import Rules from '../Rules'

const useStyle=makeStyles( (theme) => ({
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '-70%',
        zIndex: 1,
        borderBottom: '1px solid #78909c'
    },
    title: {
        color: 'white',
        zIndex: 50,
        position: 'absolute',
        top: '22%',
        textDecoration: 'underline',
        left: '3%',
        fontFamily: 'Roboto Slab'
    },
    paper: {
        backgroundColor: '#212121',
        height: '680px',
        marginTop: '235px',
        color: 'white'
    },
    back: {
        position: 'absolute',
        color: 'white',
        top: 0,
        zIndex: 100,
        '&:hover': {
            backgroundColor: 'inherit'
        }
    }
}))

function GamesChat(){
    const classes=useStyle()
    return(
        <div>
            <img 
                alt='' 
                src={bg} 
                className={classes.img}
            />
            <Link to='/'>
                <IconButton 
                    className={classes.back} 
                    disableFocusRipple
                >
                    <KeyboardBackspaceIcon />
                    <Typography>Back To Home</Typography>
                </IconButton>
            </Link>
            <Typography variant='h3' className={classes.title}>
                Music
            </Typography>
            <Paper className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item xs={3} style={{backgroundColor: '#2d3033'}}>
                        <Topic />
                    </Grid>
                    <Grid item xs={6} >
                        <ChatBox />
                    </Grid>
                    <Grid item xs={3}>
                        <Rules />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default GamesChat