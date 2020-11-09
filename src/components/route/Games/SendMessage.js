import React, { useState } from 'react'
import { AppBar, makeStyles, Toolbar, IconButton, TextField } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import ImageIcon from '@material-ui/icons/Image'
import SendIcon from '@material-ui/icons/Send'
import { useDispatch } from 'react-redux';
import { sendGameMessage } from '../../../redux/Games/actionTypes';

const useStyle=makeStyles( (theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        color: 'white',
        height: '60px'
    },
    icon: {
        color: 'white',
    },
    message: {
        borderRadius: '10px',
    },
    textField: {
        [`& fieldset`]: {
          borderRadius: '50px',
        },
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 0,
        },
        backgroundColor: 'rgba(255,255,255,0.15)',
        color: 'white'
        },
        width: '85%'
    }
}))

function SendMessage(){
    const classes=useStyle()
    const dispatch=useDispatch()
    const [message,setMessage]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendGameMessage(message))
        setMessage('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <AppBar 
                position='static' 
                color='transparent' 
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton className={classes.icon}>
                        <AddAPhotoIcon 
                        />
                    </IconButton>
                    <IconButton className={classes.icon}>
                        <ImageIcon 

                        />
                    </IconButton>
                    <TextField
                        variant='outlined'
                        margin='dense'
                        placeholder='Send a message...'
                        required
                        value={message}
                        onChange={ (e) => setMessage(e.target.value)}
                        className={classes.textField}
                    />
                    <IconButton
                        type='submit'
                        className={classes.icon}
                    >
                        <SendIcon style={{marginLeft: '10px'}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </form>
    )
}

export default SendMessage