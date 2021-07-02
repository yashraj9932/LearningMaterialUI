import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    setAnchorEl(null);
    history.push(pageUrl);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {
            <div>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => {
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleMenuClick("/");
                      }}
                    >
                      Home
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleMenuClick("/contact");
                      }}
                    >
                      Contact
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleMenuClick("/about");
                      }}
                    >
                      About
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyItems: "flex-end",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    // style={{ paddingRight: "10%" }}
                    onClick={() => {
                      handleMenuClick("/");
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    // style={{ paddingRight: "10%" }}
                    onClick={() => {
                      handleMenuClick("/contact");
                    }}
                  >
                    Contact
                  </Button>
                  <Button
                    // style={{ paddingRight: "10%" }}
                    onClick={() => {
                      handleMenuClick("/about");
                    }}
                  >
                    About
                  </Button>
                </div>
              )}
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
