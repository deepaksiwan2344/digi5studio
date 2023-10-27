import React, { useEffect } from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyle = makeStyles({
  mainwrap: {
    borderTop: "6px solid #FC7F0D",
    backgroundColor: "#333232",
    justifyContent: "space-between",
    padding: "2rem 5rem !important",
    marginTop: "3rem",
    "@media(max-width : 1200px)": {
      padding: "1rem 2rem",
      "@media(max-width : 900px)": {
        padding: "1rem 2rem",
        "@media(max-width : 600px)": {
          display: "inherit",
          padding: "10px 10px !important",
          justifyContent: "space-between",
        },
      },
    },
  },
  service: {
    textAlign: "left",
  },
  servicecontent: {
    cursor: " pointer",
    marginTop: "12px !important",
    color: "#fff",
  },

  servicecontent1: {
    marginTop: "12px !important",
    color: "#fff",
  },

  footer1: {
    textAlign: "left",
    fontWeight: "-moz-initial",
  },
  footer3: {
    display: "flex",
    gap: "7px",
    "@media(max-width: 900px)": {
      display: "inherit",
      "@media(max-width: 600px)": {
        display: "flex",
        gap: "1rem",
        marginTop: "3rem !important",
      },
    },
  },
  footer4: {
    display: "flex",
    gap: "1rem",
    "@media(max-width: 900px)": {
      display: "inherit",
      "@media(max-width: 600px)": {
        display: "flex",
        gap: "1rem",
        marginTop: "3rem",
      },
    },
  },
  icon: {
    display: "flex",
    gap: "1rem !important",
    marginTop: "4rem",
  },
  img: {
    width: "15%",
  },
  contentheader: {
    fontWeight: "700",
    fontSize: "25px",
    color: "rgba(110, 110, 110, 0.6)",
    borderBottom: "4px solid #FEA705",
  },
  boxinput: {
    display: "flex",
    gap: "1rem",
    backgroundColor: "#222222",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "10px",
  },
  icons: {
    marginTop: "2rem",
    color: "#FEA705",
    display: "flex",
    gap: "1.6rem",
  },
});

const Footer = () => {
  const classes = useStyle();

  useEffect(() => {
    window.scrollTo(0, 4);
  }, []);

  return (
    <div>
      <Box className={classes.mainwrap}>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={12} md={12} sx={12}>
            <Box className={classes.footer1}>
              <Typography variant="h5" className={classes.contentheader}>
                Services
              </Typography>
              <Typography className={classes.servicecontent1}>
                Product Photo Retouching
              </Typography>
              <Typography className={classes.servicecontent1}>
                Photo Retouching Services
              </Typography>
              <Typography className={classes.servicecontent1}>
                Fashion Retouching
              </Typography>
              <Typography className={classes.servicecontent1}>
                Clipping Path Services{" "}
              </Typography>
              <Typography className={classes.servicecontent1}>
                Automobile Photo Retouching
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sm={12} md={12} sx={12}>
            <Box className={classes.footer3}>
              <Box className={classes.service}>
                <Typography className={classes.contentheader} variant="h5">
                  Information
                </Typography>
                <Typography className={classes.servicecontent}>
                  About Us
                </Typography>
                <Typography className={classes.servicecontent}>
                  Careers
                </Typography>
                <Typography className={classes.servicecontent}>
                  Contact Us
                </Typography>
                <Typography className={classes.servicecontent}>FAQ</Typography>
                <Typography className={classes.servicecontent}>Blog</Typography>
                <Typography className={classes.servicecontent}>
                  Terms and Condition
                </Typography>
                <Typography className={classes.servicecontent}>
                  Privacy policy
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={3} sm={12} md={12} sx={12}>
            <Box className={classes.footer4}>
              <Box className={classes.service}>
                <Typography variant="h5" className={classes.contentheader}>
                  How can we help?
                </Typography>
                <Typography className={classes.servicecontent}>
                  contact Us anytime...
                </Typography>
                <Typography className={classes.servicecontent}>
                  For sending us sample images Click <br></br> here
                </Typography>
                <Box className={classes.boxinput}>
                  <MailIcon sx={{ color: "#FEA705" }} />
                  <Typography sx={{ color: "#646464" }}>
                    reachus@digi5studios.com
                  </Typography>
                </Box>
                <Box className={classes.boxinput}>
                  <MailIcon sx={{ color: "#FEA705" }} />
                  <Typography sx={{ color: "#646464" }}>
                    skype: digi5media
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} sm={12} md={12} sx={12}>
            <Box className={classes.footer4}>
              <Box className={classes.service}>
                <Typography variant="h5" className={classes.contentheader}>
                  Socials
                </Typography>
                <Box className={classes.icons}>
                  <FacebookIcon sx={{ color: "#FEA705", cursor: "pointer" }} />
                  <InstagramIcon sx={{ color: "#FEA705", cursor: "pointer" }} />
                  <LinkedInIcon sx={{ color: "#FEA705", cursor: "pointer" }} />
                  <TwitterIcon sx={{ color: "#FEA705", cursor: "pointer" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
       
      </Box>
      <Box
          sx={{ borderTop: "5px dashed  #FC800C", backgroundColor: "#333232" }}
        >
          <Typography sx={{ color: "#fff", padding: "1rem 4rem " }}>
            Copyright 2023 A & M | Digi5studio
          </Typography>
        </Box>
    </div>
  );
};

export default Footer;
