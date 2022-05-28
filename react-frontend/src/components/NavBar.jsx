import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import { Toolbar } from '@material-ui/core/Toolbar';
// import { Typography } from '@material-ui/core/Typography';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit">
                        Nodejs + Sequelize
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;