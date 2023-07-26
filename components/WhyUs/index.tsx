
import { Data } from '@/data/global';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: Data.DIV_MARGIN_TOP,

  [theme.breakpoints.between('xs', 'sm')]: {
    marginTop: Data.MB_DIV_MARGIN_TOP,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop: Data.TB_DIV_MARGIN_TOP,
  },

  "& .MuiTypography-h2": {
    marginBottom: '10px',

    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: Data.MB_HEADING_FONT_SIZE,
      lineHeight: Data.MB_HEADING_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: Data.TB_HEADING_FONT_SIZE,
      lineHeight: Data.TB_HEADING_LINE_HEIGHT,
    },
  },

  "& .MuiTypography-body1": {
    marginBottom: Data.PARAGRAPH_MARGIN_BOTTOM,

    [theme.breakpoints.between('xs', 'sm')]: {
      margin: '0 15px',
      fontSize: Data.MB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.MB_PARAGRAPH_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: Data.TB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.TB_PARAGRAPH_LINE_HEIGHT,
    },
  },
  '& .MuiGrid-root': {
    marginTop: '15px',

    [theme.breakpoints.between('xs', 'md')]: {
      marginTop: '0px',
    }
  },

}));


const Card = styled(Box)(({ theme }) => ({
  border: `1px solid ${Data.JAMNI_DARK_COLOR}`,
  padding: '25px 18px',
  maxHeight:'440px',
  height:'100%',
  borderRadius:'20px',
  backgroundColor:Data.JAMNI_DARK_COLOR,

  "& .MuiSvgIcon-root":{
    width:'50px',
    height:'50px',
    color:'#fff',
  },
  "& .MuiTypography-h6": {
    minHeight: '64px',
    textTransform:'capitalize',
    color:'#fff',
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
    color:'#dfdfdf',
    [theme.breakpoints.between('xs','sm')]:{
      fontSize:Data.MB_PARAGRAPH_FONT_SIZE,
      lineHeight:Data.MB_PARAGRAPH_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm','md')]:{
      fontSize:Data.TB_PARAGRAPH_FONT_SIZE,
      lineHeight:Data.TB_PARAGRAPH_LINE_HEIGHT,
    },
  },
  [theme.breakpoints.between('xs','md')]:{
    margin:'0 15px',
  }
}));

const CardsData = [
  {
    url: '/assests/handshake.svg',
    altText: 'coin in hand',
    icon:<HandshakeIcon/>,
    heading: 'Unbeatable Teamwork',
    description: `We believe that the best results are achieved through collaboration. Our team works closely with you, every step of the way, to understand your needs, share ideas and provide regular updates. We consider our clients as partners, and that's why we put all hands on deck to deliver results that exceed expectations.`,
  }, {
    url: '/assests/handshake.svg',
    altText: 'coin in hand',
    icon:<AutoGraphIcon/>,
    heading: 'Outcome driven meaningful results',
    description: `We are outcome-driven. We don't just deliver software, we deliver meaningful results. Our solutions are designed to drive growth, increase efficiency, and create value for your business. We work closely with you to understand your goals and tailor our approach to deliver solutions that deliver real, measurable results.`,
  }, {
    url: '/assests/setting.svg',
    altText: 'coin in hand',
    icon:<Diversity2Icon/>,
    heading: 'Expertise you can trust',
    description: `We have a team of highly skilled and experienced developers who stay up-to-date with the latest technologies and industry trends. Our technical expertise ensures that we can deliver solutions that are not only technically sound, but also tailored to your specific needs. With us, you can trust that your project is in good hands.`,
  },
]

const WhyUs = () => {
  return (
    <CustomContainer id="whyScroll">
      <Typography variant="h2">Why <span style={{color:Data.JAMNI_LIGHT_COLOR}}>Us?</span></Typography>
      <Typography variant="body1">We Deliver Clean Code, Error Free, and Secure Web Applications</Typography>
      <Grid container spacing={2}>
        {
          CardsData?.map((card,index) => {
            return (
              <>
              <Grid item xs={12} md={4} key={`${index*3}`}>
                <Card>
                  {card?.icon}
                  {/* <Image src={card?.url} width={55} height={55} alt={card?.altText} /> */}
                  <Typography variant="h6">{card?.heading}</Typography>
                  <Typography variant="body1">{card?.description}</Typography>
                </Card>
              </Grid>
              </>
            )
          })
        }
      </Grid>
    </CustomContainer>
  )
}

export default WhyUs