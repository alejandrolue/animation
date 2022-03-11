import {
    AppBar, Toolbar,
    Typography
} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'absolute',
        backgroundColor: deepPurple[900],
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            marginLeft: drawerWidth,
            zIndex: theme.zIndex.drawer + 1,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#000000',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    logo: {
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 600,
        marginLeft: '46%',
        color: '#ffffff',
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap className={classes.logo}>
                    ANIMATIONS
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
