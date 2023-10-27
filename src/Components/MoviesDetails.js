import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles({
  movie: {
    width: "100%",
    position: "relative",
    borderRadius: "5px",
    height: "40rem",
    marginTop: "2rem",
    display: "flex",
    flexdirection: "column",
    justifyContent: "center",
    "@media(max-width: 900px)": {
      height: "28rem",
      "@media(max-width: 600px)": {
        height: "20rem",
       
      },
    },
  },
  movie__intro: {
    width: "80%",
    textAlign: "center",
    "@media(max-width: 900px)": {
      width: "100%",
      "@media(max-width: 600px)": {
        width: "100%",
      },
    },
  },
  movie__backdrop: {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    objectFit: "cover",
    objectPosition: "0 35%",
    "@media(max-width: 900px)": {
      width: "47rem !important",
      height: "26rem !important",
      "@media(max-width: 600px)": {
        width: "24rem !important",
        height: "14rem !important",
      },
    },
  },
  movie__detail: {
    alignItems: "center",
    padding: "15rem 6rem",
    width: "75%",
    display: "flex",
    position: "absolute",
    "@media(max-width: 900px)": {
     // padding: "4rem 3rem",
      "@media(max-width: 600px)": {
        padding: "4rem 3rem",
      },
    },
  },

  movie__detailLeft: {
    marginRight: "30px",
  },

  movie__poster: {
    width: "300px",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.86) 0px 22px 40px 6px",
    "@media(max-width: 900px)": {
      width: "134px",
      height: "204px",
      "@media(max-width: 600px)": {
        width: "80px",
        height: "96px",
      },
    },
  },

  movie__detailRight: {
    color: "white",
    display: "flex",
    flexdirection: "column",
    height: "450px",
    gap: "4rem",
    "@media(max-width: 900px)": {
      height: "180px",
      fontSize: "10px",
      display: "inherit !important",
      gap: "1rem",
      "@media(max-width: 600px)": {
        height: "100px",
        fontSize: "10px",
        display: "inherit !important",
        gap: "1rem",
      },
    },
  },

  movie__name: {
    fontWeight: "600",
    fontSize: "3rem",
    "@media(max-width: 900px)": {
      fontSize: "20px !important",
      "@media(max-width: 600px)": {
        fontSize: "10px !important",
      },
    },
  },

  movie__voteCount: {
    marginLeft: "1rem",
  },

  movie__genres: {
    margin: "1.25rem 0",
  },

  movie__genre: {
    padding: ".5rem",
    border: "2px solid white",
    borderRadius: "20px",
    marginRight: "1rem",
    "@media(max-width: 900px)": {
      marginRight: "0rem !important",
      padding: "0px !important",
      "@media(max-width: 600px)": {
        marginRight: "0rem !important",
        padding: "0px !important",
      },
    },
  },

  movie__detailRightBottom: {
    margin: "2rem 0",
    flex: "1.8",
    "@media(max-width: 900px)": {
      margin: "0rem",
      "@media(max-width: 600px)": {
        margin: "0rem",
        flex: "inherit",
      },
    },
  },

  synopsisText: {
    fontSize: " 1.5rem",
    marginBottom: "1.25rem",
    fontWeight: "600",
    display: "flex",
    position: "relative",
    alignItems: "center",
    "@media(max-width: 900px)": {
      fontSize: "8px",
      marginBottom: "0rem",
      "@media(max-width: 600px)": {
        fontSize: "5px",
        marginBottom: "0rem",
      },
    },
  },
});

const MoviesDetails = () => {
  const classes = useStyles();
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  
 /************************************ Movie Details Api Call ******************/  
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  useEffect(() => {
    getData();
  }, []);

  


  return (
    <>
      <Header />
      <Box className={classes.movie}>
        <Box className={classes.movie__intro}>
          <Typography
            component={"img"}
            className={classes.movie__backdrop}
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : "loading"
            }`}
          />
        </Box>
        <Box className={classes.movie__detail}>
          <Box className={classes.movie__detailLeft}>
            <Box className={classes.movie__posterBox}>
              <Typography
                component={"img"}
                className={classes.movie__poster}
                src={`https://image.tmdb.org/t/p/original${
                  currentMovieDetail ? currentMovieDetail.poster_path : ""
                }`}
              />
            </Box>
          </Box>
          <Box className={classes.movie__detailRight}>
            <Box className={classes.movie__detailRightTop}>
              <Box className={classes.movie__name}>
                {currentMovieDetail ? currentMovieDetail.original_title : ""}
              </Box>
              <Box className={classes.movie__tagline}>
                {currentMovieDetail ? currentMovieDetail.tagline : ""}
              </Box>
              <Box className={classes.movie__rating}>
                {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
                <i class="fas fa-star" />
                <span className={classes.movie__voteCount}>
                  {currentMovieDetail
                    ? "(" + currentMovieDetail.vote_count + ") votes"
                    : ""}
                </span>
              </Box>
              <Box className={classes.moviemovie__runtime}>
                {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
              </Box>
              <Box className={classes.movie__releaseDate}>
                {currentMovieDetail
                  ? "Release date: " + currentMovieDetail.release_date
                  : ""}
              </Box>
              <Box className={classes.movie__genres}>
                {currentMovieDetail && currentMovieDetail.genres
                  ? currentMovieDetail.genres.map((genre) => (
                      <>
                        <span className={classes.movie__genre} id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </Box>
            </Box>
            <Box className={classes.movie__detailRightBottom}>
              <Box className={classes.synopsisText}>Synopsis</Box>
              <Box>{currentMovieDetail ? currentMovieDetail.overview : ""}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MoviesDetails;
