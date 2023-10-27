import React from 'react'
import {CircularProgress,Box} from '@mui/material';


const Loader = () => {
  return (
     <>
      <Box sx={{ display: 'flex', justifyContent: "center !important" }}>
      <CircularProgress />
    </Box>
     </>
  )
}

export default Loader
