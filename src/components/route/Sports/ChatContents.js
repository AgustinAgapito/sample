import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Box, Typography, makeStyles } from '@material-ui/core'
import ava from '../../../asset/man.jpg'

const useStyle=makeStyles( (theme) => ({
    welcome: {
        padding: theme.spacing(3),  
    },
    space: {
        padding: theme.spacing(1)
    },
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    box: {
        borderRadius: '20px',
        backgroundColor: '#0091ea',
        color: 'white',
        maxWidth: '60%',
        padding: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
    }
}))

function ChatContent( ){
    const classes=useStyle()
    return(
        <div>
            <List className={classes.space}>
                <ListItem button alignItems='flex-start'>
                    <ListItemAvatar>
                        <Avatar 
                            alt='Admin' 
                            src={ava} 
                            className={classes.avatar}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Admin"
                        secondary={
                            <div>
                            <Box className={classes.box}>
                                <Typography style={{padding: '5px'}}>
                                    Hi!
                                </Typography>
                            </Box>
                            <Box className={classes.box}>
                                <Typography style={{padding: '5px'}}>
                                    Welcome To Our Group!
                                </Typography>
                            </Box>
                            <Box className={classes.box}>
                                <Typography style={{padding: '5px'}}>
                                    We Are Glad To Have You Here and I hope you enjoy our little forum.
                                </Typography>
                            </Box>
                            </div>
                        }
                    />
                </ListItem>
            </List>
        </div>
    )
}

export default ChatContent