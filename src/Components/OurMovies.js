import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
  Container,
  Pagination,
  TextField,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Loader from "./Loader";
import axios from "axios";

const useStyles = makeStyles({
  mainwrap_page: {
    padding: "3rem 3rem",
    borderRadius: "5px",
    "@media(max-width: 600px)": {
      padding: "1rem 1rem",
    },
  },
  pagetitle: {
    textAlign: "center",
    padding: "0rem 4rem",
    width: "50%",
    margin: "auto",
    "@media(max-width: 900px)": {
      padding: "1rem 0rem",
      width: "100%",
      textAlign: "center !important",
      "@media(max-width: 600px)": {
        padding: "1rem 0rem",
        fontSize: "2rem !important",
        width: "100%",
        textAlign: "center !important",
      },
    },
  },
  poster_image: {
    margin: "auto",
    display: "block",
    width: "100%",
  },
  img: {
    width: "85rem",
    height: "25rem",
    "@media(max-width: 900px)": {
      width: "48rem",
      height: "18rem",
      textAlign: "center",
      "@media(max-width: 600px)": {
         width: "25rem",
         textAlign: "center",
         height: "14rem",
         
       },
    },
    
  },
  posterImage: {
    position: "absolute",
    padding: "5rem",
    bottom: "0px",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    opacity: "1",
    transition: "opacity .3s",
    "@media(max-width: 600px)": {
      padding: "1rem ",
    },
  },
  posterImage_title: {
    color: "#fff !important",
    fontWeight: "900",
    fontSize: "4rem",
    marginBottom: "0.4rem",
    textAlign: "left",
  },
  posterImage_runtime: {
    fontSize: "2rem",
    color: "#fff",
    marginBottom: "1rem",
    "@media(max-width: 900px)":{
      fontSize: "2rem",
      "@media(max-width: 600px)":{
        fontSize: "1rem",
        
      }
      
    }
    
  },
  posterImage_description: {
    fontSize: "1rem",
    marginBottom: "0.25rem",
    color: "#fff",
    display: "flex",
    textAlign: "left",
    width: "50%",
    "@media(max-width: 900px)": {
      width: "50%",
      textAlign: "left",
      fontSize: "20px !important",
      marginBottom: "0rem",
      "@media(max-width: 600px)": {
        width: "50%",
        textAlign: "left",
        fontSize: "10px !important",
        marginBottom: "0rem"
      },
    },
  },
  search: {
    width: "50%",
    padding: "2rem 2rem",
    margin: "auto",
    justifyContent: "center",
    "@media(max-width: 900px)": {
      width: "100%",
      textAlign: "center !important",
      padding: "1rem 1rem",
      "@media(max-width: 600px)": {
        width: "100%",
        justifyContent: "center !important",
        padding: "1rem 0rem",
      },
    },
  },
  input: {
    backgroundColor: "#0e2b5c",
    width: "40rem !important",
    height: "2.5rem",
    color: "#fff !important",
    border: "1px solid red",
    padding: "9px  8px 5px  !important",
    borderRadius: "1rem",
    "@media(max-width: 900px)": {
      width: "35rem !important",
      justifyContent: "center",
      "@media(max-width: 600px)": {
        width: "20rem !important",
        justifyContent: "center",
      },
    },
  },
  nomovie:{
     textAlign: "center", 
     marginTop: "2rem",
     color: "#0e2b5c" ,
     "@media(max-width: 600px)":{


     }
  },
  popurmovie:{
      color: "#0e2b5c !important",
      fontSize: "3rem !important",
      lineHeight: "1.2em !important",
      letterSpacing: "-1px !important",
      fontWeight: "600 !important",
      "@media(max-width: 900px)":{
          fontSize: "2.5rem !important",
          "@media(max-width: 600px)":{
            fontSize: "2rem !important"
        }
      }
  }
});

const OurMovies = () => {
  const classes = useStyles();
  const [headerMovies, setHeaderMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [movieLoading, setMovieLoading] = useState(true);

  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

   /********************************* Movie Type api call *****************/
  const getData = async () => {
    try {
      let url = `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
      let response = await axios(url);
      let Movie = response?.data;
      if (Movie) {
        setMovieList(Movie.results);
        setMovieLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);
   
  /************************************* Movie Title Crousel app call *************************/
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setHeaderMovies(data.results));
  }, []);

  /************************************search ********************************/
  const filterMovie = () => {
    return movieList?.filter((movie) => {
      return (
        movie?.title &&
        movie?.title?.toLowerCase().includes(title?.toLowerCase())
      );
    });
  };
  const handleSearch = (event) => {
    setTitle(event.target.value);
  };
  const searchMovielist = filterMovie();

  /*********************************Pagination************************************** */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(searchMovielist?.length / itemsPerPage);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsForCurrentPage = searchMovielist?.slice(startIndex, endIndex);

  
  return (
    <>
      <Header />
      <Box className={classes.movie_poster}>
        {headerMovies.length > 0 ? (
          <Carousel
            index={index}
            onChange={handleChange}
            interval={4000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover
            swipe
            className={classes.mycarousel}
          >
            {headerMovies.map((movie) => (
              <Box>
                <Link to={`/movie/${movie.id}`}>
                  <Box className={classes.poster_image}>
                    <Typography
                      className={classes.img}
                      component={"img"}
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie?.backdrop_path
                      }`}
                    />
                  </Box>
                  <Box className={classes.posterImage}>
                    <Typography className={classes.posterImage_title}>
                      {movie ? movie.original_title : ""}
                    </Typography>
                    <Box className={classes.posterImage_runtime}>
                      {movie ? movie.release_date : ""}
                      <span className={classes.posterImage_rating}>
                        {movie ? movie.vote_average : ""}
                      </span>
                    </Box>
                    <Typography className={classes.posterImage_description}>
                      {movie ? movie.overview : ""}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
          </Carousel>
        ) : (
           <Typography sx={{textAlign: "center"}}>Loading</Typography>
        )}
      </Box>
      <Box className={classes.mainwrap_page}>
        <Box className={classes.pagetitle}>
          <Typography
  
             className={classes.popurmovie}
          >
            Popular Movies
          </Typography>
        </Box>
        <Box className={classes.search}>
          <TextField
            className={classes.input}
            id="filled-search"
            type="text"
            variant="standard"
            onChange={handleSearch}
            placeholder="Search Movie by Title"
            InputProps={{
              disableUnderline: true,
              style: { color: "#fff" },
            }}
          />
        </Box>
        {movieLoading === true ? (
          <Typography sx={{ textAlign: "center" }}>
            <Loader />
          </Typography>
        ) : itemsForCurrentPage?.length > 0 ? (
          <Container>
            <Grid container spacing={4} mt={2}>
              {itemsForCurrentPage?.length > 0 &&
                itemsForCurrentPage?.map((movie) => {
                  return (
                    <Grid item lg={3} sm={6} md={12} xs={12}>
                      <Card movie={movie} />
                    </Grid>
                  );
                })}
            </Grid>
            {itemsForCurrentPage?.length > 0 && (
              <Pagination
                onClick={handleScrollToTop}
                sx={{
                  marginTop: "3rem",
                  "& .MuiPagination-ul": {
                    display: "flex",
                    justifyContent: "center",
                  },
                  "& .MuiButtonBase-root": {
                    color: "#fff",
                    backgroundColor: "#feaa00 !important",
                    width: "3rem",
                    borderRadius: "5px",
                    padding: "24px 14px",
                  },
                  "& .MuiButtonBase-root:hover": {
                    backgroundColor: "#0e2b5c !important",
                    color: "#fff",
                  },

                  "& .Mui-selected:focus": {
                    backgroundColor: "#0e2b5c !important",
                    color: "#fff",
                  },
                }}
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
              />
            )}
          </Container>
        ) : (
          <Typography
            varaint="h4"
            className={classes.nomovie}
          >
            NO ANY MOVIE FOR THIS TITLE PLEASE TRY ANOTHER NAME
          </Typography>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default OurMovies;
