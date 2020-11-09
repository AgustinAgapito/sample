import React from 'react'
import { makeStyles } from '@material-ui/core'
import bg from '../../asset/tablecof.jpg'
import imgL from '../../asset/tabletwood.jpg' 
import Pagetext from './PageText'
import Footer from './Footer'
const useStyle = makeStyles( (theme) => ({
    bg: {
        backgroundImage: 'url('+bg+')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width:'100%',
    },
    mask: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    imgLeft: {
        width: '100%',
        height: '100%',
        paddingLeft: theme.spacing(60),
    },
    container: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: '-87%',
        height: '100vh',
        overflow: 'hidden',
    }
}))

function HomePage(){
    const classes = useStyle()
    return(
        <div className={classes.bg}>
            <div className={classes.container}>
            <img src={imgL} alt='' className={classes.imgLeft}/> 
            </div>
            {/* <div className={classes.imgLeft} /> */}
            <Pagetext />
            <Footer />
        </div>
    )
}

export default HomePage