import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Cards from '../topics/Cards'

const useStyle=makeStyles( (theme) => ({
    root: {
        position: 'absolute',
        top: '8%',
        left: '50%',
        transform: 'translate(-50%)',
        textAlign: 'center',
        width:'80%',
        marginLeft: theme.spacing(10)
    },
    title: {
        color: 'white',
        marginBottom: theme.spacing(3),
        fontFamily: 'Roboto Slab',
        letterSpacing: theme.spacing(4),
        pointerEvents: 'none',
        userSelect: 'none'
    },
    qoute: {
        color: 'white',
        marginBottom: theme.spacing(4),
        pointerEvents: 'none',
        userSelect: 'none'
    },
    btn: {
        backgroundColor: '#f2f4ff '
    }
}))

function PageText(){
    const classes=useStyle()
    return(
        <div className={classes.root}>
            <Typography 
                variant='h1'
                className={classes.title}
            >
                F O R A
            </Typography>
            <Typography  
                variant='h6'
                className={classes.qoute}
            >
                "You are what you share"
            </Typography>
            <Cards />
        </div>
    )
}

export default PageText