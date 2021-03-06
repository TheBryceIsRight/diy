import React from 'react';

import Link from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Menu,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { fade } from '@material-ui/core/styles'

import BuildIcon from '@material-ui/icons/Build';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import PublicIcon from '@material-ui/icons/Public';
import ErrorIcon from '@material-ui/icons/Error';

import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import AssessmentIcon from '@material-ui/icons/Assessment';
import UpdateIcon from '@material-ui/icons/Update';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BugReportIcon from '@material-ui/icons/BugReport';  
import { MemoryRouter as Router } from 'react-router'
import { Link as MuiLink} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';


const useStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        margin:0,
      },
      list: {
          width: 'auto',
        },
        fullList: {
          width: 'auto',
        },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 2,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'primary',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

const NavigationBar: React.FC = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem>
        <Link
            href="/api/login"
            passHref>
            <MuiLink>Login</MuiLink>
        </Link>
        </MenuItem>
        <MenuItem>
        <Link
            href="/profile"
            passHref>
            <MuiLink>Profile</MuiLink>
        </Link>
        </MenuItem>
        <MenuItem>
        <Link
            href="/api/logout"
            passHref>
            <MuiLink>Logout</MuiLink>
        </Link>
        </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="primary"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
        checkedA: true,
        checkedB: true,
    });

    const toggleDrawer = (anchor:any, open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor:any) => (
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        //role="navigation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <Router>
        <List>
            <ListItem button>
                <ListItemIcon><AssessmentIcon/></ListItemIcon>
                <ListItemText primary='All Systems' />
            </ListItem>
            <Link
            href="/activeIssues"
            passHref>
            <ListItem button>
                <ListItemIcon><ErrorIcon/></ListItemIcon>
                <ListItemText primary='Active Issues' />
            </ListItem>
            </Link>
            <Link
            href="/activeMaintenance"
            passHref>
            <ListItem button>
                <ListItemIcon><BuildIcon/></ListItemIcon>
                <ListItemText primary='Active Maintenance' />
            </ListItem>
            </Link>
            <Link
            href="/scheduledMaintenance"
            passHref>
            <ListItem button>
                <ListItemIcon><UpdateIcon/>
                </ListItemIcon>
                <ListItemText primary='Scheduled Maintenance' />
            </ListItem>
            </Link>
            
            
        </List>
        <Divider />
        <List>
        <Link
            href="/canada"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/>
                </ListItemIcon>
                <ListItemText primary='Canada' />
            </ListItem>
            </Link>
            <Link
            href="/europe"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/></ListItemIcon>
                <ListItemText primary='Europe' />
            </ListItem>
            </Link>
            <Link
            href="/mexico"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/></ListItemIcon>
                <ListItemText primary='Mexico' />
            </ListItem>
            </Link>
            <Link
            href="/unitedStates"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/>
                </ListItemIcon>
                <ListItemText primary='United States' />
            </ListItem>
            </Link>
            
        </List>
        <Divider />
        
        <List>
        <ListItem>
            <ListItemIcon>
            <FormControlLabel label='Dark mode'
            control={<Switch name="darkSwitchSideBar" />}
            />
            </ListItemIcon>
            </ListItem>
            <Link
            href="/barChart"
            passHref>
            <ListItem button>
            <ListItemIcon><BugReportIcon/></ListItemIcon><ListItemText primary='Chart Debugging'/>
            </ListItem>
            </Link>
        <Link
        href="/dashboard"
        passHref>
        <ListItem button>
            <ListItemIcon><DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItem>
        </Link>
        </List>
        </Router>
        </div>
    );

  {/*End of Top */}

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
              <Toolbar disableGutters={true}>
                <React.Fragment>
                <IconButton
                    className={classes.menuButton}
                    color="primary"
                    aria-label="open menu"
                    onClick={toggleDrawer('left', true)}
                    > 
                <MenuIcon />
            </IconButton>   
                <Drawer 
                    anchor={'left'} 
                    open={state['left']} 
                    onClose={toggleDrawer('left', false)}>{list('left')}
                </Drawer>
                </React.Fragment>
                
                  
                  <Link href='/'>
                  <MuiLink>
                    <Typography color="primary" className={classes.title} variant="h6" >
                      Status
                    </Typography>
                  </MuiLink>
                  </Link>
                    
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon color="primary"/>
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="primary"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="primary"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            <br/>
            {renderMobileMenu}
            {renderMenu}
          </div>
    );
    };

export default NavigationBar;