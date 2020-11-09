import React, { useState } from 'react'
import { Typography, makeStyles, List, ListItemText, ListItem, Divider } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getMusicTopic } from '../../../redux/Music/actionTypes'

const useStyle=makeStyles( (theme) => ({
    title: {
        marginTop: theme.spacing(5),
        pointerEvents: 'none',
        fontFamily: 'Roboto Slab'
    },
    active: {
        backgroundColor: 'white',
        marginTop: theme.spacing(2),
    },
    notactive: {
        marginTop: theme.spacing(2),
        opacity: 0.6,
        '&:hover': {
            color: '#81d4fa',
            backgroundColor: '#7a7777',
            opacity: 1
        }       
    },
    divider: {
        background: '#6d6d6e',
        marginTop: theme.spacing(3)
    },
    dividerlist: {
        background: '#6d6d6e',
    }
}))

const musicTopics = [
    'Rock',
    'Jazz',
    'Hip Hop Music',
    'Classical Music',
    'Old Songs',
    'Reggae'
]

function Topic( ){
    const classes=useStyle()
    const [select,setSelect]=useState(0)
    const dispatch=useDispatch()
    const handleSelect = (e,index) => {
        setSelect(index)
        dispatch(getMusicTopic(e.currentTarget.textContent))
    }
    return(
        <div>
            <Typography 
                align='center'
                variant='h5'
                className={classes.title}
            >
                Category
            </Typography>
            <Divider classes={{root: classes.divider}} />
            <List component='nav'>
                {musicTopics.map( (topic,index) => (
                    <div 
                    key={index} >
                        <ListItem 
                            button
                            className={select === index ? classes.active : classes.notactive}
                            selected={select === index}
                            classes={{selected: classes.active}}
                            onClick={ (e) => handleSelect(e,index)}
                        >
                            <ListItemText primary={topic}/>
                        </ListItem>
                        <Divider classes={{root: classes.dividerlist}} />
                    </div>
                ))}
            </List>
        </div>
    )
}

export default Topic