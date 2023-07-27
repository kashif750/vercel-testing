import { Data } from '@/data/global';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const CustomTeamContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop:Data.DIV_MARGIN_TOP,
  [theme.breakpoints.between('xs','sm')]:{
    marginTop:Data.MB_DIV_MARGIN_TOP,
  },
  [theme.breakpoints.between('sm','md')]:{
    marginTop:Data.TB_DIV_MARGIN_TOP,
  },

  "& .MuiTypography-h2": {
    // marginBottom: Data.HEADING_MARGIN_BOTTOM,
    marginBottom:'10px',

    [theme.breakpoints.between('xs','sm')]:{
      fontSize:Data.MB_HEADING_FONT_SIZE,
      lineHeight:Data.MB_HEADING_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm','md')]:{
      fontSize:Data.TB_HEADING_FONT_SIZE,
      lineHeight:Data.TB_HEADING_LINE_HEIGHT,
    },
  },
  "& .MuiTypography-body1": {
    marginBottom: Data.PARAGRAPH_MARGIN_BOTTOM,

    [theme.breakpoints.between('xs','sm')]:{
      // maxWidth:'500px',
      width:"80%",
      margin:'auto',
      fontSize:Data.MB_PARAGRAPH_FONT_SIZE,
      lineHeight:Data.MB_PARAGRAPH_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm','md')]:{
      maxWidth:'500px',
      width:"80%",
      margin:'auto',
      fontSize:Data.TB_PARAGRAPH_FONT_SIZE,
      lineHeight:Data.TB_PARAGRAPH_LINE_HEIGHT,
    },
  },

  "& .MuiBox-root":{
    // padding:Data.DIV_PADDING_INSIDE,
    // backgroundColor:'green',
    "& img":{
      width:'130px',
      height:'130px',
      borderRadius:'50%',
      filter:'grayscale(70%)',
      marginBottom:'1rem',
      transition:'all 0.2s linear',
      
      "&:hover":{
        filter:'grayscale(0%)',
        // opacity:'1',
        transform:'scale(1.05)'
      },
      
      [theme.breakpoints.between('xs','sm')]:{
        width:'115px',
        height:'115px',
        filter:'none',
        transform:'scale(1.05)',
      }
    }
  },

  '& .MuiGrid-root':{
    marginTop:'15px',
  },
  '& .MuiGrid-item':{
    // padding:`${Data.DIV_PADDING_INSIDE} 0px`,
    "& .MuiTypography-h5":{
      // fontSize:'15px',

    [theme.breakpoints.between('xs','sm')]:{
      fontSize:Data.MB_SUB_HEADING_FONT_SIZE,
      lineHeight:Data.MB_SUB_HEADING_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm','md')]:{
      fontSize:Data.TB_SUB_HEADING_FONT_SIZE,
      lineHeight:Data.TB_SUB_HEADING_LINE_HEIGHT,
    },
    },
    "& .MuiTypography-body1":{
      marginBottom:'0px',
      // fontSize:'12px',
    },
  }
}));

const TeamMembersData = [
  {
    imgUrl: '/assests/ahmad.png',
    altText: 'ahmad',
    name: 'M. Ahmad',
    designation: 'FS Developer',
  }, {
    imgUrl: '/assests/uzair_arif.jpg',
    altText: 'uzair arif',
    name: 'Mr. Uzair',
    designation: 'FS Developer',
  }, {
    imgUrl: '/assests/hussain.jpg',
    altText: 'hussain shaheen',
    name: 'Mr. Hussain',
    designation: 'System Admin',
  }, {
    imgUrl: '/assests/kashif.jpg',
    altText: 'kashif',
    name: 'Mr. Kashif',
    designation: 'FS Developer',
  },
]
const OurTeam = () => {
  return (
    <CustomTeamContainer id="teamScroll">
      <Typography variant="h2">Our <span style={{color:Data.JAMNI_LIGHT_COLOR}}>Team</span></Typography>
      <Typography variant="body1">{`Expertise and Passion, A winning combination - Meet the Naremis team of dedicated professionals.`}</Typography>
      <Grid container spacing={2}>
        {
          TeamMembersData?.map((member, index) => {
            return (
              <Grid item xs={6} sm={3} md={3} lg={3} key={`${member?.name}-${index}`}>
                <Box>
                  <Image src={member?.imgUrl} width={100} height={300} alt={member?.altText} />
                </Box>
                <Typography variant="h5">{member?.name}</Typography>
                <Typography variant="body1">{member?.designation}</Typography>
              </Grid>
            )
          })
        }
      </Grid>
    </CustomTeamContainer>
  )
}

export default OurTeam