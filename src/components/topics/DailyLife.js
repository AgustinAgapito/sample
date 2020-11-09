import React from 'react'
import { makeStyles, Card, CardActionArea, CardHeader } from '@material-ui/core'
import bg from '../../asset/relax.jpg'

const useStyle=makeStyles( () => ({
    overlay: {
        position: 'absolute',
        opacity: 0.5,
        transition: '.5s ease',
        width: '80%',
        backgroundImage: 'url('+bg+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        color: 'white',
        borderRadius: '5px',
        '&:hover': {
            opacity: 1,
            backgroundPosition: 'right',
            marginLeft: '20px'
        }
    }
}))

function DailyLife(){
    const classes=useStyle()
    return(
        <div>
            <Card>
                <CardActionArea className={classes.overlay}>
                    <CardHeader title='Daily Life' />   
                </CardActionArea>
            </Card>
        </div>
    )
}

export default DailyLife