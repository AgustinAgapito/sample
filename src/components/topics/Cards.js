import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Link } from  'react-router-dom'
import Sport from './Sport'
import DailyLife from './DailyLife'
import Games from './Games'
import Music from './Music'

const useStyle=makeStyles( ()=>({
    container: {
        position: 'relative', 
    }
}) )
function Cards(){
    const classes=useStyle()
    return(
        <div>
            <Grid container spacing={3}>
                    <Grid item sm className={classes.container}>
                        <Link to='/music'>
                            <Music />
                        </Link>
                    </Grid>
                    <Grid item sm className={classes.container}>
                        <Link to='/games'>
                            <Games />
                        </Link>
                    </Grid>
                    <Grid item sm className={classes.container}>
                        <Link to='/sports'>
                            <Sport />
                        </Link>
                    </Grid>
                    <Grid item sm className={classes.container}>
                        <Link to='/dailylife'>
                            <DailyLife />
                        </Link>
                    </Grid>
            </Grid>
        </div>
    )
}

export default Cards