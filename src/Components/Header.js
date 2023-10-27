import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  main___Div: {
    display: "flex",
    padding: "1.5rem 1.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.3)",
    "@media(max-width : 900px)": {
      display: "none",
    },
  },
  Nav___List: {
    margin: "0",
    padding: "0px",
    listStyle: "none",
    display: "flex",
  },
  NavLink___List2: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "600",
    textDecoration: "none",
    color: "#fb8700",
  },
  NavLink___List3: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    color: "#feaa00 ",
  },

  NavLink___List: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    color: "#00adc9",
    textDecoration: "none",
    marginLeft: "35px",
  },

  side___navbar: {
    display: "flex",
    alignItems: "center",
  },

  side___navbar2: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "50%",
    "@media(max-width : 600px)": {
      width: "40%",
    },
  },
  mob__nav: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  input: {
    backgroundColor: "white",
    padding: "0rem  1rem !important",
    borderRadius: "1rem",
  },
  btn: {
    backgroundColor: "#fb8700 !important",
    color: "#ffffff !important",
    fontWeight: "500 !important",
    borderRadius: "30px !important",
    width: "170px !important",
    "&:hover": {
      backgroundColor: "#212529 !important",
    },
  },
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value.length <= 15) {
      setSearchText(value);
    }
  };

  return (
    <Box>
      <Box className={classes.main___Div}>
        <Box>
          <Link to="/">
            <Typography
              sx={{ width: "100%" }}
              component={"img"}
              src="https://www.digi5studios.com/assets/images/logo.png"
            />
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Box className={classes.Nav___List__Wrap}>
            <Box className={classes.Nav___List} component={"ul"}>
              <Box component={"li"}>
                <NavLink
                  to="/movies/popular"
                  className={classes.NavLink___List2}
                >
                  Popular
                </NavLink>
              </Box>
            </Box>
          </Box>
          <Box className={classes.Nav___List__Wrap}>
            <Box className={classes.Nav___List} component={"ul"}>
              <Box component={"li"}>
                <NavLink
                  to="/movies/top_rated"
                  className={classes.NavLink___List2}
                >
                  Top Rated
                </NavLink>
              </Box>
            </Box>
          </Box>
          <Box className={classes.Nav___List__Wrap}>
            <Box className={classes.Nav___List} component={"ul"}>
              <Box component={"li"}>
                <NavLink
                  to="/movies/upcoming"
                  className={classes.NavLink___List2}
                >
                  Upcoming
                </NavLink>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{ width: "3rem", height: "1.6rem" }}
            component={"img"}
            src="https://www.digi5studios.com/assets/images/envelope.png"
          />
          <Typography
            sx={{ width: "2rem", height: "2rem" }}
            component={"img"}
            src="https://www.digi5studios.com/assets/images/skype.png"
          />
          <Button className={classes.btn}>Free trial</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "none",
          "@media(max-width : 900px)": { display: "block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1.5rem 2rem 1rem 2rem",
            alignItems: "center",
            "@media(max-width : 600px)": { padding: "1rem 1rem 1rem 1rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
              "@media(max-width : 900px)": {
                width: "100%",
                "@media(max-width : 600px)": {
                  width: "100%",
                },
              },
            }}
          >
            <Box>
              <Link to="/">
                {" "}
                <Typography
                  component={"img"}
                  src="https://www.digi5studios.com/assets/images/logo.png"
                  width={"170px"}
                />
              </Link>
            </Box>
            <Box onClick={handleClickOpen}>
              <MenuIcon
                sx={{
                  color: "#0e2b5c !important",
                  cursor: "pointer",
                  fontSize: "25px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          backgroundImage: "linear-gradient(45deg, #716449, #ccb483, #716449)",
          "& .MuiPaper-root": {
            backgroundColor: "black",
          },
          // width: "20rem"
        }}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#fff",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "black",
              boxShadow: "none",
              justifyContent: "right",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ textAlign: "center", display: "grid", gap: "20px" }}>
          <Box className={classes.mob__nav} component={"ul"}>
            <TextField
              className={classes.input}
              id="filled-search"
              type="search"
              variant="standard"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>
          <NavLink
            className={classes.mob__nav}
            onClick={handleClose}
            to="/movies/popular"
          >
            Popular
          </NavLink>
          <NavLink
            className={classes.mob__nav}
            onClick={handleClose}
            to="/movies/top_rated"
          >
            Top Rated
          </NavLink>
          <NavLink
            className={classes.mob__nav}
            onClick={handleClose}
            to="/movies/upcoming"
          >
            Upcoming
          </NavLink>

          <NavLink className={classes.mob__nav} onClick={handleClose} to="/">
            <Button className={classes.btn}>Free trial</Button>
          </NavLink>
        </Box>
      </Dialog>
    </Box>
  );
};
export default Header;
