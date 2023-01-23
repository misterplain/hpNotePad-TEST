import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";
import {
  BiRightArrowAlt,
  BiLeftArrowAlt,
  BiUpArrowAlt,
  BiDownArrowAlt,
} from "react-icons/bi";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 40,
          minHeight: 40,
        },
      },
    },
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function HideAppBar(props) {
  const [productivity, setProductivity] = useState(0);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.shiftKey === true) {
        if (event.key === "ArrowUp") {
          setProductivity(productivity + 1);
          console.log("productivity added" + productivity);
        } else if (event.key === "ArrowDown") {
          setProductivity(productivity - 1);
          console.log("productivity subtracted" + productivity);
        } else if (event.key === "Backspace") {
          setProductivity(0);
          console.log("productivity reset" + productivity);
        }
      } else {
        console.log("shift key not pressed");
      }
    },
    [productivity]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar
              variant='dense'
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Typography
                component='h1'
                sx={{
                  color: "lightblue",
                  flexBasis: "15%",
                  // marginTop: "20px",
                  // padding: "0px",
                  justifyContent: "center",
                  alignItems: "center",
                  // width: "100%",
                }}
              >
                HP Store Notepad
              </Typography>

              <List
                sx={{
                  display: "flex",
                  flexBasis: "85%",
                  justifyContent: "space-evenly",

                  // margin: "0px",
                  // padding: "0px",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // width: "100%",
                }}
              >
                <Link
                  to='bulletin'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Bulletin Board"}
                        style={{ textAlign: "center", color: "white" }}
                      />
                    </ListItemButton>
                  </ListItem>{" "}
                </Link>

                <Link
                  to='/holidays'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Holidays"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to='/tools'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Tools/Links"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to='/ebay'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Ebay"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to='templates'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Templates"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to='contact'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={"Add/Edit"}
                        style={{ textAlign: "center" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </Toolbar>

            <Toolbar
              variant='dense'
              style={{
                backgroundColor: "lightblue",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              {/* <Typography
                component='h1'
                sx={{
                  color: "white",
                  // marginTop: "20px",
                  // padding: "0px",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // width: "100%",
                }}
              >
                productivity
              </Typography> */}
              <BiDownArrowAlt
                onClick={() => setProductivity(productivity - 1)}
                style={{ fontSize: "2rem", color: "darkblue", margin: "10px" }}
              />
              <Typography variant='h4' color='primary'>
                {productivity}
              </Typography>
              <BiUpArrowAlt
                onClick={() => setProductivity(productivity + 1)}
                style={{ fontSize: "2rem", color: "darkblue", margin: "10px" }}
              />
              {/* <BiRightArrowAlt/>
              <BiLeftArrowAlt/> */}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ThemeProvider>
      <Toolbar />

      <ScrollTop {...props}>
        <Fab size='large' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
