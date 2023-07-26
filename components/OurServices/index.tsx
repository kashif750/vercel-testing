import { Data } from '@/data/global';
import BrushIcon from '@mui/icons-material/Brush';
import CloudIcon from '@mui/icons-material/Cloud';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
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

    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '0px',
    }
  },
  "& .MuiBox-root": {
    maxHeight: '324px',
    height: '100%',
    padding: '1.5rem 1rem',
    backgroundColor: '#f9f9f9',
    border: `2px solid ${Data.JAMNI_LIGHT_COLOR}`,
    borderRadius: '10px',
    transition: 'transform 0.2s linear',
    "&:hover": {
      boxShadow: `0 0 8px 1px ${Data.JAMNI_LIGHT_COLOR}`,
      "& .MuiSvgIcon-root": {
        color: Data.JAMNI_DARK_COLOR,
      },
    },
    "& .MuiSvgIcon-root": {
      width: '35px',
      height: '35px',
      color: Data.JAMNI_LIGHT_COLOR,
      marginBottom: '0.25rem',
    },
    "& .MuiTypography-h6": {
      color: '#000',
      marginBottom: '0.5rem',
    },
    "& .MuiTypography-body2": {
      marginBottom: '0px',
    },

    [theme.breakpoints.between('xs', 'sm')]: {
      margin: '0 15px',
      "& .MuiTypography-h6": {
        color: '#000',
        marginBottom: '0.5rem',

        fontSize: Data.MB_SUB_HEADING_FONT_SIZE,
        lineHeight: Data.MB_SUB_HEADING_LINE_HEIGHT,
      },
      "& .MuiTypography-body2": {
        marginBottom: '0px',

        fontSize: Data.MB_PARAGRAPH_FONT_SIZE,
        lineHeight: Data.MB_PARAGRAPH_LINE_HEIGHT,
      },
    },

    [theme.breakpoints.between('sm', 'md')]: {
      margin: '0 15px',
      "& .MuiTypography-h6": {
        color: '#000',
        marginBottom: '0.5rem',
        fontSize: Data.TB_SUB_HEADING_FONT_SIZE,
        lineHeight: Data.TB_SUB_HEADING_LINE_HEIGHT,
      },
      "& .MuiTypography-body2": {
        marginBottom: '0px',

        fontSize: Data.TB_PARAGRAPH_FONT_SIZE,
        lineHeight: Data.TB_PARAGRAPH_LINE_HEIGHT,
      },
    }
  }
}));

const CardsData = [
  {
    imgUrl: '/assests/pen.svg',
    altText: 'pen',
    icon: <BrushIcon />,
    heading: 'UI/UX Design',
    description: 'Our team specializes in creating custom UI/UX designs that meet the specific needs of our clients, resulting in a product that is tailored to their business and their users.',
  },
  {
    imgUrl: '/assests/web-development.svg',
    altText: 'web-development',
    icon: <LaptopChromebookIcon />,
    heading: 'Web Development',
    description: `Our team of expert web developers use the latest technologies and industry standards to build custom websites that are fast, responsive, and easy to navigate.`,
  },
  {
    imgUrl: '/assests/mobile.svg',
    altText: 'mobile',
    icon: <SmartphoneIcon />,
    heading: 'Mobile App Development',
    description: `Our team of experienced developers use the latest technologies to design and build high-quality, user-friendly mobile apps that are optimized for performance and scalability.`,
  },
  {
    imgUrl: '/assests/store.svg',
    altText: 'store',
    icon: <ShoppingCartIcon />,
    heading: 'E-Commerce & CMS',
    description: `Our team has extensive experience in building and integrating various e-commerce platforms and CMS to meet the unique needs of your business.`,
  },
  {
    imgUrl: '/assests/cloud.svg',
    altText: 'cloud',
    icon: <CloudIcon />,
    heading: 'Cloud Solutions',
    description: `Our cloud DevOps team can help you build and manage for the cloud to scale and adapt to changing market conditions quickly and cost-effectively.`,
  },
  {
    imgUrl: '/assests/info-circle.svg',
    altText: 'information',
    icon: <EngineeringIcon />,
    heading: 'Maintenance and Support',
    description: `Our team of experts provides top-notch maintenance and support services to ensure your software runs smoothly and any issues are quickly resolved.`,
  },
]
const OurServices = () => {
  return (
    <>
      <CustomContainer id="serviceScroll">
        <Typography variant='h2'>Our <span style={{ color: `${Data.JAMNI_LIGHT_COLOR}` }}>Services</span></Typography>
        <Typography variant="body1">We provide the best in class services for our customer</Typography>
        <Grid container spacing={3}>
          {
            CardsData?.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={`${item?.altText}-${index}`}>
                  <Box>
                    {item?.icon}
                    <Typography variant="h6">{item?.heading}</Typography>
                    <Typography variant="body2">{item?.description}</Typography>
                  </Box>
                </Grid>
              )
            })
          }
        </Grid>
      </CustomContainer>
    </>
  )
}

export default OurServices