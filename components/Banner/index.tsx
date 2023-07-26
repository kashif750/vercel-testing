import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Data } from '@/data/global';

const CustomContainer = styled(Grid)(({ theme }) => ({
  height: '720px',
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop:'70px',
    height:'auto',
    paddingLeft:'15px',
    paddingRight:'15px',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    marginTop:'40px',
    height:'auto',
    paddingLeft:'15px',
    paddingRight:'15px',
    '& .MuiGrid-root:last-child':{
      paddingTop:"0px",
    }
  },
}));
const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '100%',

  '& .MuiBox-root': {
    width: '100%',
  },
  "& .MuiTextField-root": {
    width: '320px',
  },
  "& .MuiButton-root": {
    backgroundColor:Data.JAMNI_LIGHT_COLOR,
    height: '100%',
    marginLeft: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    "&:hover":{
      backgroundColor:Data.JAMNI_DARK_COLOR,
    }
  },
  "& .MuiTypography-h2": {
    marginBottom: Data.HEADING_MARGIN_BOTTOM,
  },
  "& .MuiTypography-body1": {
    marginBottom: Data.PARAGRAPH_MARGIN_BOTTOM,
  },

  [theme.breakpoints.between('md', 'lg')]: {

    "& .MuiTextField-root": {
      width: '250px',
    },
    "& .MuiTypography-h2": {
      marginBottom: Data.MB_HEADING_MARGIN_BOTTOM,
      fontSize: Data.TB_HEADING_FONT_SIZE,
      lineHeight: Data.TB_HEADING_LINE_HEIGHT,
    },
  },
  [theme.breakpoints.between('sm','md')]:{
    padding:`${Data.TB_DIV_PADDING_INSIDE} 0px`,
    "& .MuiTextField-root": {
      width: '320px',
    },
    "& .MuiTypography-h2": {
      maxWidth:'530px',
      width:'100%',
      marginBottom: Data.MB_HEADING_MARGIN_BOTTOM,
      fontSize: Data.TB_HEADING_FONT_SIZE,
      lineHeight: Data.TB_HEADING_LINE_HEIGHT,
    },
    "& .MuiTypography-body1": {
      maxWidth:'100%',
      width:'100%',
      marginBottom: Data.TB_PARAGRAPH_MARGIN_BOTTOM,
      fontSize: Data.TB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.TB_PARAGRAPH_LINE_HEIGHT,
    },
  },
  [theme.breakpoints.between('xs','sm')]:{
    padding:`${Data.TB_DIV_PADDING_INSIDE} 0px`,
    '& .MuiBox-root':{
      display:'flex',
      flexDirection:'column',
    },
    "& .MuiTextField-root": {
      maxWidth:'320px',
      width:'100%',
    },
    "& .MuiButton-root":{
      width:'170px',
      height:'42px',
      marginLeft:'0px',
      marginTop:'10px',
      lineHeight:'0px',
    },
    "& .MuiTypography-h2": {
      maxWidth:'530px',
      width:'100%',
      marginBottom: Data.MB_HEADING_MARGIN_BOTTOM,
      fontSize: Data.MB_HEADING_FONT_SIZE,
      lineHeight: Data.MB_HEADING_LINE_HEIGHT,
    },
    "& .MuiTypography-body1": {
      maxWidth:'100%',
      width:'100%',
      marginBottom: Data.MB_PARAGRAPH_MARGIN_BOTTOM,
      fontSize: Data.MB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.MB_PARAGRAPH_LINE_HEIGHT,
    },
  }
}));
const ImgContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',

  '& img': {
    width: '550px',
    height: '550px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    '& img': {
      width: '450px',
      height: '450px',
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display:'none',
    height:'300px',
    '& img': {
      width: '400px',
    }
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    display:'none',
    height:'280px',
    '& img': {
      width: '300px',
    }
  },

}));
const Banner = () => {

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  }
  return (
    <CustomContainer container spacing={4} id="homeScroll">

      <Grid item xs={12} md={6}>
        <TextContainer>
          <Typography variant="h2">Powering Business Growth with Tailored <span style={{ color: Data.JAMNI_LIGHT_COLOR }}>Software Solutions</span></Typography>
          <Typography variant="body1">Our experts develop custom software to drive results, streamline operations and increase revenue. Trust us for your next project with our cutting-edge technology and transparent communication.</Typography>
          <Box>
            <TextField value={email} placeholder="Enter Email Address" onChange={handleChangeEmail} />
            <Button variant="contained" disableRipple={true}>get started</Button>
          </Box>
        </TextContainer>
      </Grid>
      <Grid item xs={12} md={6} >
        <ImgContainer>
          <Image src="/assests/website-interface-girl.svg" width={400} height={400} alt="website maintenance" />
        </ImgContainer>
      </Grid>
    </CustomContainer>
  )
}

export default Banner