import { Data } from '@/data/global';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: Data.JAMNI_DARK_COLOR,
  color: theme.palette.primary.contrastText,
  marginTop: Data.DIV_MARGIN_TOP,
  padding: `${Data.DIV_PADDING_INSIDE} 0`,
  "& .MuiTypography-body1": {
    color:'#fff',
  },
  
  [theme.breakpoints.between('xs', 'sm')]: {
    marginTop: Data.MB_DIV_MARGIN_TOP,
    padding: `${Data.MB_DIV_PADDING_INSIDE} 0`,
    "& .MuiTypography-body1": {
      fontSize: Data.MB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.MB_PARAGRAPH_LINE_HEIGHT,
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop: Data.TB_DIV_MARGIN_TOP,
    padding: `${Data.TB_DIV_PADDING_INSIDE} 0`,
    "& .MuiTypography-body1": {
      fontSize: Data.TB_PARAGRAPH_FONT_SIZE,
      lineHeight: Data.TB_PARAGRAPH_LINE_HEIGHT,
    }
  },
}));
const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant='body1'>© {new Date().getFullYear()} HAUK Innova. All Rights Reserved </Typography>
    </FooterContainer>
  )
}

export default Footer