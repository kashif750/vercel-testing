import { Data } from '@/data/global';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const TechnologiesContainer = styled(Box)(({ theme }) => ({
  // marginTop: Data.DIV_MARGIN_TOP,
  // [theme.breakpoints.between('xs', 'sm')]: {
  //   marginTop: Data.MB_DIV_MARGIN_TOP,
  // },
  // [theme.breakpoints.between('sm', 'md')]: {
  //   marginTop: Data.TB_DIV_MARGIN_TOP,
  // },
}))
const Card = styled(Box)(({ theme }) => ({
  height: 'auto',
  borderRadius: '10px',
  width: '320px',
  margin: '0 auto',
  backgroundColor: theme.palette.secondary.main,

  [theme.breakpoints.between('xs', 'sm')]: {
    maxWidth: '320px',
    width: '100%',
  },
  "& .MuiBox-root:nth-child(1)": {
    height: '200px',
    position: 'relative',
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
  },

  "& .MuiBox-root:nth-child(2)": {
    color: '#fff',
    padding: '0px 18px 24px 18px',
  },
  '& .MuiTypography-h3': {
    color: '#fff',
    marginTop: '5px',
    fontSize: Data.MB_SUB_HEADING_FONT_SIZE,
    lineHeight: Data.MB_SUB_HEADING_LINE_HEIGHT,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: Data.MB_SUB_HEADING_FONT_SIZE,
      lineHeight: Data.MB_SUB_HEADING_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: Data.TB_SUB_HEADING_FONT_SIZE,
      lineHeight: Data.TB_SUB_HEADING_LINE_HEIGHT,
    },
  },
  "& .MuiTypography-body2": {

    color: '#dfdfdf',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: Data.MB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.MB_PARAGRAPH_LINE_HEIGHT,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: Data.TB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.TB_PARAGRAPH_LINE_HEIGHT,
    },
  }
}))
const TextContainer = styled(Box)(({ theme }) => ({
  height: 'auto',
  width: '320px',
  // boxShadow: '0 0 5px 0.5px black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",

  "& .MuiBox-root": {
    width: '60px',
    height: "60px",
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s linear',

    "&:hover": {
      boxShadow: `0 0 6px 1px ${Data.JAMNI_LIGHT_COLOR}`,
    }
  },
  "& .MuiTypography-h6": {
    marginTop: "6px",
    color: '#000',
  },
  "& .MuiTypography-body1": {
    textAlign: 'center',
    width: '270px',
  },

  [theme.breakpoints.between('xs', 'sm')]: {
    margin: '0 auto',
    width: 'auto',
    "& .MuiTypography-h6": {
      fontSize: Data.MB_SUB_HEADING_FONT_SIZE,
      lineHeight: Data.MB_SUB_HEADING_LINE_HEIGHT,
    },
    "& .MuiTypography-body1": {
      width: '80%',
      maxWidth:'360px',
      fontSize: Data.MB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.MB_PARAGRAPH_LINE_HEIGHT,
    },

  },
  [theme.breakpoints.between('sm', 'md')]: {
    "& .MuiTypography-h6": {
      fontSize: Data.TB_SUB_HEADING_FONT_SIZE,
      lineHeight: Data.TB_SUB_HEADING_LINE_HEIGHT,
    },
    "& .MuiTypography-body1": {
      width: '75%',
      fontSize: Data.TB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.TB_PARAGRAPH_LINE_HEIGHT,
    },

  },
  [theme.breakpoints.between('md', 'lg')]: {
    "& .MuiTypography-body1": {
      width: '65%',
    },

  },
}));

const CustomImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px 10px 0 0',
}));
const Technologies = () => {
  return (
    <>
      <TechnologiesContainer>
        <Grid container rowSpacing={4} id="techScroll">
          <Grid item xs={12} md={4} >
            <Card>
              <Box>
                <CustomImage src="/assests/tech.webp" fill alt="laptop IDE opened" />
              </Box>
              <Box>
                <Typography variant="h3">Power of Modern Technologies at Your Service</Typography>
                <Typography variant='body2'>Discover the future of software development with us. Our solutions are designed to anticipate the needs of tomorrow and give your business a competitive edge. Trust us to build innovative and sustainable software that meets your unique needs and exceeds your expectations.</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} sx={{ margin: 'auto 0', }}>
            <Grid container rowSpacing={3}>
              <Grid item xs={12} sm={6}>
                <TextContainer>
                  <Box>
                    <Image src="/assests/react.svg" width={50} height={50} alt="react.js" />
                  </Box>
                  <Typography variant="h6">React / Next.js</Typography>
                  <Typography variant="body1">Scalable web development technologies for fast, responsive and SEO friendly web applications.</Typography>
                </TextContainer>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextContainer>
                  <Box>
                    <Image src="/assests/mobile.svg" width={40} height={40} alt="react.js" />
                  </Box>
                  <Typography variant="h6">React Native</Typography>
                  <Typography variant="body1">Developing cross-platform mobile apps with the efficiency and consistency of React.</Typography>
                </TextContainer>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextContainer>
                  <Box>
                    <Image src="/assests/aws.svg" width={45} height={45} alt="react.js" />
                  </Box>
                  <Typography variant="h6">AWS Solutions</Typography>
                  <Typography variant="body1">Building robust and scalable systems using the power of Amazon Web Services.</Typography>
                </TextContainer>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextContainer>
                  <Box>
                    <Image src="/assests/nodejs.svg" width={40} height={40} alt="react.js" />
                  </Box>
                  <Typography variant="h6">Node.js</Typography>
                  <Typography variant="body1">Building high-performance server-side applications with the power of JavaScript.</Typography>
                </TextContainer>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </TechnologiesContainer>
    </>
  )
}

export default Technologies