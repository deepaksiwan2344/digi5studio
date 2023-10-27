import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  cartwrap: {
    cursor: "pointer",
    transition: "transform .1s",
    position: "relative",
    borderRadius: "5px",
    textAlign: "center",
    "&:hover":{
      transform: "scale(1.1)",
    }
  },
  img: {
    width: "100%",
    height: "20rem",
    borderRadius: "5px",
    "@media(max-width: 600px)":{
      //width: "22rem !important",
      height: "18rem !important",
    }
  },
});

const Card = ({ movie }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleMoviesDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <>
      <Box onClick={handleMoviesDetails} className={classes.cartwrap}>
        <Typography
          className={classes.img}
          component={"img"}
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : ""
          }`}
        />
      </Box>
    </>
  );
};

export default Card;
