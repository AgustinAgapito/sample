import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, makeStyles, Divider, AppBar, Box, Container } from '@material-ui/core'
import ChatContent from './ChatContents'
import Message from './Message'
import SendMessage from './SendMessage'

const useStyle=makeStyles( (theme) => ({
    divider: {
        background: 'white'
    },
    text: {
        padding: theme.spacing(2),
    },
    welcome: {
        padding: theme.spacing(3),  
    },
    box: {
        backgroundColor: '#2b2929',
        overflowY: 'scroll',
        height: '550px',
        margin: 0,
        padding: 0,
        '&::-webkit-scrollbar': {
          width: '0.3em'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#424242',
          borderRadius: '5px'
        }
    }
}))

function ChatBox(){
    const classes=useStyle()
    const topic=useSelector( state => state.musicTitle[0])

    return(
        <div>
            <AppBar 
                color='transparent' 
                position='static'
            >
                <Typography 
                    variant='h6'
                    className={classes.text}
                >
                    Tags: @{topic}
                </Typography>
            </AppBar>
            {/* chat box's main container */}
            <Box component='div' className={classes.box}>
                <Container>
                    <div className={classes.welcome}>
                        <Typography variant='h5' align='center'>
                            Welcome To
                        </Typography>
                        <Typography variant='h5' align='center'>
                            {topic}
                        </Typography>
                    </div>
                    <Divider classes={{root: classes.divider}} />
                    
                    {/* chat messages container */}
                    <ChatContent />
                    {/* geust messages */}
                    <Message />
                </Container>
            </Box>
            <SendMessage />
        </div>
    )
}

export default ChatBox