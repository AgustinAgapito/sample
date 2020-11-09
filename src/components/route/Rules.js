import React from 'react'
import avaPic from '../../asset/red.jpg'
import { Avatar, makeStyles, IconButton, Typography, Box, Container, Divider } from '@material-ui/core'

const useStyle=makeStyles( (theme) => ({
    root: {
        textAlign: 'center',
        overflowY: 'scroll',
        height: '680px',
        '&::-webkit-scrollbar': {
            width: '0.3em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.0)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#828687',
            borderRadius: '5px'
          }
    },
    ava: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        alignSelf: 'center',
        marginTop: theme.spacing(5)
    },
    title: {
        marginTop: theme.spacing(2),
        fontFamily: 'Roboto Slab'
    },
    text: {
        marginTop: theme.spacing(3),
    },
    divider: {
        backgroundColor: '#606263'
    },
}))
function Rules(){
    const classes=useStyle()
    return(
        <div className={classes.root}>
            <Box style={{paddingBottom: '40px',backgroundColor: '#353738'}}>
                <IconButton>
                    <Avatar 
                        alt='' 
                        src={avaPic} 
                        className={classes.ava}
                        variant='rounded'
                    />
                </IconButton>
                <Typography 
                    variant='h5'
                    className={classes.title}
                >
                    Rules And Regulations
                </Typography>
            </Box>
            <Divider classes={{root: classes.divider}} />
            <Container>
                <Box textAlign='left'>
                    <Typography className={classes.text}>
                        No spam. All automated messages, advertisements, and links to competitor websites will be deleted immediately.
                    </Typography>
                    <Typography className={classes.text}>
                        Post in relevant sub-forums only. Messages posted in the wrong topic area will be removed and placed in the correct sub-forum by moderators.
                    </Typography>
                    <Typography className={classes.text}>
                        Respect other users. No flaming or abusing fellow forum members. Users who continue to post inflammatory, abusive comments will be deleted from the forum after two warnings are issued by moderators.
                    </Typography>
                    <Typography className={classes.text}>
                        Harassment. No threats or harassment of other users will be tolerated. Any instance of threatening or harassing behavior is grounds for deletion from the forums.
                    </Typography>
                    <Typography className={classes.text}>
                        Adult content. No profanity or pornography is allowed. Posts containing adult material will be deleted.
                    </Typography>
                    <Typography className={classes.text}>
                        Bandwidth. All images and signatures must be 500 x 500 pixels or smaller. Posts containing over-sized images and signatures will be removed.
                    </Typography>
                    <Typography className={classes.text}>
                        Illegal content. No re-posting of copyrighted materials or other illegal content is allowed. Any posts containing illegal content or copyrighted materials will be deleted.
                </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default Rules