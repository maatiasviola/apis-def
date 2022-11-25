//React
import React, { useContext } from 'react'

//icons
import {MdLanguage} from 'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import ClassIcon from '@mui/icons-material/Class';
import {FaBook} from 'react-icons/fa';

//components
import {Stack,Button,IconButton,Link as LinkMUI,Container,Box,Popper, TextField} from '@mui/material';
import DropdownItem from '../DropDownItem';
import {Link} from 'react-router-dom';

//hooks y contexts
import useUser from '../../hooks/useUser';
import UserContext from '../../context/UserContext';

//modals
import useLoginModal from '../../hooks/useLoginModal';
import useSignUpModal from '../../hooks/useSignUpModal';
import useForgotPasswordModal from '../../hooks/useForgotPasswordModal';
import SearchInput from '../SearchInput';

function Header() {
  
  //isLogged verifica si hay usuario logeado, logout funcion cerrar sesion
  const {isLogged,logout}=useUser()

  //abrir y cerrar modals
  const {handleLogin} = useLoginModal()
  const {handleSignUp} = useSignUpModal()
  const {handleForgotPassword} = useForgotPasswordModal()
  
  //dropdow menu stuff
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickDropDownMenu = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  
  //traigo info usuario
  const {user} = useContext(UserContext)

  return (
    <Box sx={{
      minHeight:70,
      borderBottom: '1px solid #ddd'
    }}>
      <Container maxWidth='xl'>
        <Box sx={{
          display:'flex',
          justifyContent:{xs:'center',md:'space-between'},
          alignItems:'center',
          minHeight:70,
          px:4
        }}>
      
        {/*Imagen*/}
        <Link to='/'>
          <Box
            component='img'
            sx={{
              objectFit: 'contain',
              height: 50,
              ml: '1.25rem',
            }} 
            alt='logo' 
            src='https://ta.azureedge.net/campus/i/logo_tcp.png' /> 
        </Link>
      
        {/*Buscador*/}
        <SearchInput/>
      
        <Stack direction='row' alignItems='center' justifyContent='center'>
            
          {/*Se un profesor*/}
          {!isLogged && 
          <LinkMUI component={Link} to={'/enseñar'}>
            Se un profesor
          </LinkMUI>
          }
        
          {/*Icono Contrataciones*/}
          {isLogged && user.rol === 'profesor' && 
            <LinkMUI component={Link} to={'/contrataciones'}>
              <IconButton>
                <FaBook/>
              </IconButton>
              Contrataciones
            </LinkMUI>
          }

          {/*Icono Mis Clases*/}
          {isLogged && 
            <LinkMUI component={Link} to={'/misClases'}>
              <IconButton>
                <ClassIcon/>
              </IconButton>
              Mis Clases
            </LinkMUI> 
          }
        
          {/*Icono Lenguaje*/}
          <IconButton>
            <MdLanguage/>
          </IconButton>
          
          {/*DropDown Menu*/}
          <Button sx={{
              border:'1px solid #ddd',
              borderRadius:'10px'
            }}
            onClick={handleClickDropDownMenu}
          >
            <Stack direction='row' spacing={2}>
              <AiOutlineMenu size={24}/>
              <FaRegUserCircle size={24}/>
            </Stack>

            {/*Desplegable*/}
            <Popper open={open} anchorEl={anchorEl} placement='bottom-end'>
              <Box sx={{ border: 1, bgcolor: 'background.paper',borderColor:'#DDDDDD',pt:2,pb:2,width:300,borderRadius:5 }}>
                {
                  isLogged ? (
                      <DropdownItem to='/' onClick={logout}>Cerrar Sesion</DropdownItem>
                  ):(
                    <>
                      <DropdownItem onClick={handleSignUp}>Registrate</DropdownItem>
                      <DropdownItem onClick={handleLogin}>Iniciar Sesion</DropdownItem>
                    </>
                  ) 
                }  

                {/*Linea*/}
                <Box sx={{
                    width: '100%',
                    border: '1px solid rgb(221, 221, 221)',
                    height: 1,
                    my: '1rem',
                    fontWeight: 400,
                    fontSize: '0.75rem',
                    lineHeight: '1rem'   
                }} 
                />               
                  <DropdownItem to='/enseñar'>Enseña en TusClases</DropdownItem>
                  <DropdownItem to='/faq'>Ayuda</DropdownItem>
              </Box>
            </Popper>
          </Button>
        </Stack>
      </Box>
    </Container>
  </Box>
  )
}

export default Header