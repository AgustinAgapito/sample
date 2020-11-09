import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyle=makeStyles( () => ({
    root: {
        position: 'absolute',
        bottom: 0,
        color: '#a6a4a4',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%'
    },
    footer: {
        fontSize: '0.7em'
    }
}))
function Footer(){
    const classes=useStyle()
    return(
        <footer className={classes.root}>
            <Typography align='center' className={classes.footer}>
            No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods,
            </Typography>
            <Typography align='center' className={classes.footer}>
            without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
            </Typography>
            <Typography align='center' className={classes.footer}>
                All rights reserved. 2020
            </Typography>
        </footer>
    )
}

export default Footer