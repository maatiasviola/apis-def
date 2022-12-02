import React, { useContext,useState,useEffect } from 'react'
import {Box, Link, Typography, Dialog} from '@mui/material'
import {BiBlock} from 'react-icons/bi'
import UserContext from '../../context/UserContext'
import usersService from '../../services/users'
import commentsService from '../../services/comments'
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Button from '../../components/Button';
import DialogActions from '@mui/material/DialogActions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CardComentario({comentario,clasePropia}) {
    //Si el comentario esta bloqueado hacer un display none

    const {user} = useContext(UserContext)
    const {token} = user
    const [usuarioComentario,setUsuarioComentario]=useState({})

    useEffect(()=>{
        usersService.getUser({id:comentario.usuario})
        .then(usuario=>
          setUsuarioComentario(usuario)
        )
      },[])
    
    const handleBlockearComentario=()=>{
        // commentsService.removeComment(comentario.id,{token})
        const newObject = {
            destinatario: usuarioComentario.email,
            motivo: valueInteres
        }
        commentsService.notificarAlumno(newObject)
        handleClose()
    }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [valueInteres, setValueInteres] = useState('');

    const handleChangeText = (event) => {
        setValueInteres(event.target.value);
    };

    if((Object.keys(usuarioComentario).length===0)){
        return <h1>Cargando</h1>
    }
    //si usuario no es profesor ve comentarios disponibles
    //si usuario es profesor ve comentarios bloqueados con menor opacidad y debe poder volverlos a la vida
  return (
    <Box sx={{
        display: 'flex',
        mb: '1.5rem',
        }}
    >
        <Box sx={{
                mr: '1rem',
                height: 56,
                width: 56,
                borderRadius: '50%', 
                overflow: 'hidden',
            }}
        >
            <Box 
                component='img' 
                sx={{
                    objectFit: 'cover',
                    height: '100%' ,
                    width: '100%' ,
                    position: 'static'
                }}
                alt='' 
                src={usuarioComentario.avatar}
            />
        </Box>
        <Box sx={{
            flex: 1,
            ml: '1rem'
        }}>
            <Box sx={{
                mb: '0.5rem'
            }}>
                <Typography component='span' sx={{
                    fontWeight: 500,
                    mr: '0.25rem'
                    }}
                >
                    {usuarioComentario.nombre} {usuarioComentario.apellido}
                </Typography>
                <Typography component='span' sx={{
                    fontSize: '0.8rem',
                    color: '#808080',
                    }}
                >
                    20 hours ago
                </Typography>
            </Box>
            <Box sx={{
                px: '0.5rem',
                py: '1rem',
                background: '#f7f7f7',
                borderRadius: '0.25rem',
                mb: '0.5rem',
                position:'relative'
            }}>
                {comentario.descripcion}
                👀
                {user!==null && clasePropia && 
                <Box 
                    component='button'
                    sx={{
                    background: 'none',
                    border: 0,
                    cursor: 'pointer',
                    width: 30,
                    height: 30,
                    fontSize: '1rem',
                    textAlign: 'center',
                    lineHeight: '1.9rem',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    pr:2,
                    m: 'auto',
                    '&:hover':{
                        color: '#2E2C98'
                    } 
                    }}
                    onClick={handleOpen}
                >
                    <BiBlock/>
                </Box>
                }
            </Box>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                <DialogTitle>{"Bloqueo de Comentario"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText sx={{ marginTop:'10px' }}>
                                        Motivo por el bloqueo de comentario
                                    </DialogContentText>
                                    <TextField
                                    multiline
                                    fullWidth
                                    maxRows={6}
                                    value={valueInteres}
                                    onChange={handleChangeText}
                                    variant="filled"
                                    />
                                </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleBlockearComentario} color='success'> Enviar </Button>
                                        <Button onClick={handleClose} color='error'> Cancelar </Button>
                                    </DialogActions>
                                </Dialog>
            <Box>
                <Link sx={{
                    display: 'inline-block',
                    px: '0.25rem',
                    py: '0.6rem',
                    color: '#000000',
                    textDecoration: 'none',
                    cursor:'pointer',
                    '&:hover':{
                        color: '#2E2C98'
                    }
                }}
                >
                    Reply
                </Link>
                <Link sx={{
                    display: 'inline-block',
                    px: '0.25rem',
                    py: '0.6rem',
                    color: '#000000',
                    textDecoration: 'none',
                    cursor:'pointer',
                    '&:hover':{
                        color: '#2E2C98'
                    }
                    }}
                >
                    Like
                </Link>
            </Box>
        </Box>
    </Box>
  )
}

export default CardComentario