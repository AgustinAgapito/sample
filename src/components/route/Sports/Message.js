import React from 'react'
import { ListItem, ListItemText, Box, Typography, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyle=makeStyles( (theme) => ({
    listItem: {
        textAlign: 'right'
    },
    box: {
        textAlign: 'left',
        float: 'right',
        borderRadius: '20px',
        backgroundColor: '#0091ea',
        color: 'white',
        maxWidth: '60%',
        padding: theme.spacing(0.5)
    }
}))

function Message(){
    const classes=useStyle()
    const guestMessage=useSelector( state => state.sportMessage)
    console.log(guestMessage)
    return(
        <div>
            {guestMessage.map( (message,index) => (
                <ListItem button key={index}>
                    <ListItemText
                        className={classes.listItem}
                        primary="You"
                        secondary={
                            <Box className={classes.box}>
                                <Typography style={{padding: '2px'}}>
                                    {message}
                                </Typography>
                            </Box>
                        }
                    />
                </ListItem>
            ))}
        </div>
    )
}

export default Message