import React from 'react'
import { makeStyles, Card, CardActionArea, CardHeader } from '@material-ui/core'
import bg from '../../asset/basketball.jpg'

const useStyle=makeStyles( () => ({
    overlay: {
        position: 'absolute',
        opacity: 0.5,
        transition: '.5s ease',
        width: '80%',
        backgroundImage: 'url('+bg+')',
        backgroundPosition: 'left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        color: 'white',
        borderRadius: '5px',
        '&:hover': {
            opacity: 1,
            backgroundPosition: 'center',
            marginLeft: '20px',
        }
    }
}))
function Sport(){
    const classes=useStyle()
    return(
        <div>
            <Card>
                <CardActionArea className={classes.overlay} >
                    <CardHeader title='Sports' />   
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Sport