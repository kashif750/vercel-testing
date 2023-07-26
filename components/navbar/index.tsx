import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, List, ListItem, ListItemButton, ListItemText, Typography, Container, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { Data } from '@/data/global';

const CustomContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10000,
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#c6cae1',
}));

const NavbarContainer = styled('nav')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  // backgroundColor: 'yellow',
  position: 'relative',

  height: '58px',

  '& img': {
    margin: 'auto 0',
  },
  '& .MuiTypography-root': {
    textTransform: 'capitalize',
    fontWeight: 500,
    color: '#000',
  },
  '& .MuiList-root': {
    display: 'flex',
    padding: '0',
    transition:'all 0.4s linear',

    '& .MuiListItem-root': {
      padding: '0',
      borderBottom: `2px solid transparent`,
      "&:hover": {
        borderColor: Data.JAMNI_DARK_COLOR,
      }
    },
    "& .MuiButtonBase-root:hover": {
      background: 'transparent',
    },
    "& .MuiTouchRipple-root": {
      display: 'none',
    }
  },
  '& .MuiButton-root': {
    display:'none',
    position: 'relative',
    padding:0,
    transition:'all 0.4s linear',
    "& .MuiSvgIcon-root":{
      color:'#000',
      width:'30px',
      height:'30px',
    }
  },

  [theme.breakpoints.down('md')]: {
    "& .MuiButton-root": {
      display: 'block',
    },
    '& .MuiList-root': {
      position: 'absolute',
      top: 58,
      right: -280,
      flexDirection: 'column',
      // backgroundColor: 'orange',
      backgroundColor: '#d8dbeb',
      width: '200px',
      '& .MuiListItem-root': {
        border: 'none',
      },
      "& .MuiButtonBase-root:hover": {
        background: 'rgba(0,0,0,0.1)',
      },
    },
  },

  '& .displayBlock': {
      right:-24,
  }
}))
const TabNames = ['home', 'tech', 'About', 'Services', "Team"];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

  const scrollToContactForm = (e: any) => {
    // console.log('event : ', e);
    // console.log('event.target : ', e.target);
    // console.log('event.target.innerHtml : ', e.target.innerHtml);
    // console.log('event.target.lastChid.data : ', e?.target?.lastChild?.data);
    let scrollId;
    const typeName = e.target?.lastChild?.data ? e.target?.lastChild?.data.toLowerCase() : 'default';
    switch (typeName) {
      case 'home':
        scrollId = 'homeScroll';
        break;
      case 'tech':
        scrollId = 'techScroll';
        break;
      case 'about':
        scrollId = 'whyScroll';
        break;
      case 'services':
        scrollId = 'serviceScroll';
        break;
      case 'team':
        scrollId = 'teamScroll';
        break;
      default:
        scrollId = 'homeScroll';
        break;
    }
    const element = document.getElementById(scrollId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  useEffect(() => {
    setMenu(match ? false : menu);
  }, [match]);
  return (
    <CustomContainer>
      <Container maxWidth="xl">
        <NavbarContainer>
          <Image src="/assests/hauk_innova.svg" alt="hauk innova" width={40} height={40} />
          <List className={`${menu ? 'displayBlock' : null}`}>
            {
              TabNames.map((tab, index) => {
                return (
                  <ListItem key={`${tab}-${index}`} onClick={(e) => scrollToContactForm(e)} id={tab}>
                    <ListItemButton id={tab}>
                      <ListItemText primary={tab} id={tab} />
                    </ListItemButton>
                  </ListItem>
                )
              })
            }
          </List>
          <Button className='menuIcon' onClick={toggleMenu}>{menu ? <CloseIcon /> : <MenuIcon />}</Button>
        </NavbarContainer>
      </Container>
    </CustomContainer>
  );
}
export default Navbar;