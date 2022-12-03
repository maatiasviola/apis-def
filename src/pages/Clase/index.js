import React,{useEffect,useState, useContext} from 'react'
import dayjs from 'dayjs';
import {Container,CssBaseline,Box,Dialog,Typography} from '@mui/material'
import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import { AiFillStar } from 'react-icons/ai';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import classesService from '../../services/classes'
import hiringsService from '../../services/hirings'
import qualificationsService from '../../services/qualifications'
import Button from '../../components/Button';
import Comentarios from '../../components/Comentarios';
import FormComentarios from '../../components/FormComentarios';
import UserContext from '../../context/UserContext';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Rating from '@mui/material/Rating';
import {Button as MUIButton} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Clase() {

    const {user}=useContext(UserContext)

    const [claseElegida,setClaseElegida]=useState({})
    console.log("CLASE ELEGIDA: ",claseElegida)
    const {id} = useParams();

    useEffect(()=>{
        classesService.getOneClass({id})
            .then(clase=>{
                setClaseElegida(clase)
            })
    },[])
    
    const caracteristicasClase=[
            claseElegida.frecuencia || 'semanal',
            claseElegida.tipo || 'grupal',
            'Superclase'
        ]

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if(!(!user || user.rol=='profesor' || yaContratado)){
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEnviarContratacion = () => {
        handleContratar()
        setOpen(false)
    }

    const [valueInteres, setValueInteres] = useState('');

    const handleChangeText = (event) => {
        setValueInteres(event.target.value);
    };

    const [valueTiempo, setValueTiempo] = useState(dayjs('2018-01-01T00:00:00.000Z'));

    const [yaContratado,setContratado]=useState(false)

    const handleContratar = () => {
        if(!(!user || user.rol=='profesor' || yaContratado)){
        const horario = valueTiempo.hour().toString() + ':' + valueTiempo.minute().toString()
        console.log(horario)
        const nuevaContratacion = {
            motivo: valueInteres,
            claseId: id,
            horarioReferencia: horario
        };
        const {token}=user
        hiringsService.createHiring(nuevaContratacion,{token});
        setContratado(true)
        }
    }

    const [calificacionGeneral, setCalificacionGeneral] = useState(0);
    
    useEffect(()=>{
        if(Object.keys(claseElegida).length !==0 ){
            setCalificacionGeneral(claseElegida.calificacionPromedio.promedioCalculado)
        }
        if(user){
            hiringsService.getHiringUsuarioClase(id,user.id).then(hiring => setContratado(hiring.length > 0))
        }
    },[claseElegida])

    const [ratingUsuario, setRating] = useState(0);

    const [ratingHabilitado, setHabilitado] = useState(false)

    useEffect(()=>{
        if (Object.keys(claseElegida).length !==0 && user){
            const calificacionExistente = claseElegida.calificaciones.find(calificacion => calificacion.usuario == user.id)
            if(!calificacionExistente){
                setHabilitado(true)
            }
            else{
                setRating(calificacionExistente.valor)
            }
        }
    },[claseElegida])

    const handleRating = (newValue) =>{
        setRating(newValue)
    }

    const handleNewRating = () =>{
        console.log('valor a ingresar:',ratingHabilitado)
        setHabilitado(false)
        const {token}=user
        const newObject = {
            claseId: claseElegida.id,
            userId: user.id,
            valor: ratingUsuario
        }
        qualificationsService.createQualification(newObject,{token})
    }

    if((Object.keys(claseElegida).length===0)){
        return <h1>Cargando</h1>
    }

    return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
            <Header/>
            <Container maxWidth='lg'>
                <Box>
                    <Typography
                        component='h1'
                        sx={{
                            fontWeight: 600 ,
                            fontSize: '1.7rem' ,
                            lineHeight: '1.9rem' ,
                            mb: 0,
                            pt:'1.5rem'
                        }}
                    >
                        {claseElegida.nombre}
                    </Typography>
                    
                    <Box sx={{
                            display: 'flex' ,
                            justifyContent:'flex-start' ,
                            fontWeight: 600 ,
                            fontSize: '0.9rem' ,
                            lineHeight: '1.25rem' ,
                            flexWrap: 'wrap' ,
                            mt: '0.5rem' ,
                            alignItems: 'center' ,
                            textAlign: 'center '
                        }} 
                    >
                        <AiFillStar/>
                        <Box component='span' sx={{mx:'0.25rem'}}>
                            {calificacionGeneral===0
                            ? 'Es Nueva'
                            :calificacionGeneral
                            } . 
                        </Box>
                        
                        {calificacionGeneral!==0 && 
                            <Box component='span' sx={{mr:'0.25rem'}}>
                                {claseElegida.calificaciones.length} evaluaciones
                            </Box> 
                        }
                        <Box component='span' sx={{mr:'0.25rem'}}>
                            . 
                        </Box>
                        <BsFillPersonLinesFill/>
                        <Box component='span' sx={{mx:'0.25rem'}}>
                            {claseElegida.tipo} . 
                        </Box>
                        <Box component='span' sx={{mr:'0.25rem',textDecoration:'underline'}}>
                            {claseElegida.frecuencia}
                        </Box>
                    </Box>
                </Box>
                
                {/*Imagen*/}
                <Box 
                    component='img' 
                    alt='' 
                    sx={{pt:'1.5rem',maxWidth:'45rem'}} 
                    src={claseElegida.imagen}
                />
                <Box sx={{
                        display: 'flex',
                        fontWeight: 400,
                        fontSize: '1rem',
                        lineHeight: '1.25rem',
                        borderBottom: 'rgb(221, 221, 221) 1px solid',
                    }}
                >
                    <Box sx={{width:'58.3%'}}>
                        <Box sx={{
                                pt: '2.25rem',
                                pb: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom:' rgb(221, 221, 221) 1px solid'
                            }}
                        >
                            <Box sx={{flex: '0 1 100%'}}>
                                <Typography sx={{
                                     fontWeight: 600,
                                     fontSize: '1.4rem',
                                     lineHeight: '1.6rem',
                                     mb: '0.5rem',
                                    }}
                                    component='h2'
                                >
                                    Inicio entero. Profesor: {claseElegida.profesor.usuario.nombre}
                                </Typography>

                                <Box sx={{
                                    p:0,
                                    m:0,
                                    }}
                                >
                                    {caracteristicasClase.map((item,index)=>{
                                        return(
                                            <>
                                            <Box sx={{mr:'0.25rem'}} component='span' key={item}>{item}
                                            {caracteristicasClase.length-1!==index && " ·"}
                                            </Box>
                                        </>
                                        )
                                    })}
                                </Box>
                            </Box>
                            <Box sx={{
                                mb: 0,
                                ml: '1rem',
                                fontSize: '1.75rem',
                                height: 56,
                                width: 56,
                                borderRadius: '50%',
                                background:' rgb(221, 221, 221)',
                                overflow: 'hidden',
                            }} 
                            >
                                <Box 
                                    component='img'
                                    sx={{height:'100%',width:'100%'}} 
                                    alt='' 
                                    src={claseElegida.profesor.usuario.avatar}
                                />
                            </Box>
                        </Box>

                        <Box sx={{
                                fontWeight: 400,
                                fontSize: '1rem',
                                lineHeight: '1.25rem'
                            }}
                        >
                            <Box sx={{
                                pt: '2rem',
                                pb: '3rem'
                                }}
                            >
                                <Box 
                                    component='span'
                                    sx={{
                                        lineHeight: '1.5rem',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                    }}
                                >
                                    Bienvenidos!<br/>
                                {claseElegida.descripcion}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '33.33333333333333%',
                        ml: '8.333333333333332%',
                        mr: 0
                        }}
                    >
                        <Box sx={{
                            border: '1px solid rgb(221, 221, 221)',
                            borderRadius: '0.75rem',
                            p: '1.5rem',
                            boxShadow: 'rgb(0 0 0 / 12%) 0rem 0.35rem 1rem',
                            color: 'rgb(34, 34, 34)',
                            fontWeight: 400,
                            fontSize: '1rem',
                            lineHeight: '1.25rem',
                            mt:'2rem'
                            }} 
                        >
                            {Object.keys(claseElegida).length !==0  && user && claseElegida.estudiantes.some(estudiante => estudiante == user.id) &&
                            <div>
                                <h3> Valora la clase! </h3>
                                <Rating 
                                    name="Valoración del usuario"
                                    value={ratingUsuario}
                                    onChange={(event, newValue) => {handleRating(newValue)}}
                                    //readOnly={!ratingHabilitado}
                                    sx={{
                                        marginBottom: '40px'
                                }}/>
                                {claseElegida.calificaciones.find(calificacion => calificacion.usuario == user.id) &&
                                <MUIButton sx={{
                                    textAlign: 'center',
                                    fontSize: '1rem',
                                    lineHeight: '1.25rem',
                                    fontWeight: 600,
                                    borderRadius: 2, 
                                    p:2,
                                    background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
                                    color: 'rgb(255, 255, 255)',
                                    width: '100%'
                                    }} 
                                    disabled={ratingHabilitado}
                                    onClick={handleNewRating}
                                >
                                    Calificar
                                </MUIButton>
                                }
                            </div>
                            }
                            <Box sx={{display:'flex'}}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexWrap:'wrap', 
                                    justifyContent: 'space-between',
                                    marginBottom: '1.5rem'
                                    }}
                                >    
                                    <Box sx={{
                                        display:'flex',
                                        alignItems:'flex-start'
                                    }}
                                    >
                                        <Typography component='span' sx={{
                                            fontSize:'1.4rem',
                                            lineHeight:'1.25rem',
                                            fontWeight:800
                                            }}
                                        >
                                            ${claseElegida.costo} USD
                                        </Typography>
                                        <Typography component='span' sx={{
                                            fontWeight:400,
                                            fontSize:'1rem',
                                            lineHeight:'1.25rem'
                                            }}
                                        >
                                            clase
                                        </Typography>
                                    </Box>
                                
                                <Box sx={{
                                    display: 'flex',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.1rem',
                                    mt:'0.25rem'
                                    }}
                                >
                                    <Box component='span' sx={{
                                        display:'flex',
                                        fontSize:'0.9rem',
                                        lineHeight:'1.1rem',
                                        fontWeight:600
                                        }}
                                    >
                                        <Box component='span'sx={{
                                            textAlign:'center'
                                            }}
                                        >
                                            <AiFillStar/>
                                        </Box>
                                        <Box component='span' sx={{mx:'0.25rem'}}>
                                            {calificacionGeneral===0
                                            ? 'Es Nueva'
                                            :calificacionGeneral
                                            } . 
                                        </Box>
                                        <Box component='span' sx={{
                                            color:'rgb(113, 113, 113)',
                                            pl:'0.25rem',
                                            textDecoration:'underline',
                                            cursor:'pointer'
                                        }}>
                                            {claseElegida.calificaciones.length} calificaciones
                                        </Box>
                                    </Box>
                                </Box>
                                </Box>
                            </Box>
                            <Button disabled={!user || user.rol=='profesor' || yaContratado} onClick={handleClickOpen}>
                                Contratar
                            </Button>
                            <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                <DialogTitle>{"Contratación de Clase"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText sx={{ marginTop:'10px' }}>
                                        Horario de referencia para el contacto
                                    </DialogContentText>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                    value={valueTiempo}
                                    onChange={setValueTiempo}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                    </LocalizationProvider>
                                    <DialogContentText sx={{ marginTop:'10px' }}>
                                        Motivo por el cual esta interesado en la clase
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
                                        <Button onClick={handleEnviarContratacion} color='success'> Enviar </Button>
                                        <Button onClick={handleClose} color='error'> Cancelar </Button>
                                    </DialogActions>
                                </Dialog>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{py:'3rem',borderBottom:' rgb(221, 221, 221) 1px solid'}}>
                    <Box sx={{
                        mb:4,
                        justifyContent:'initial',
                        alignItems:'center',
                        display:'flex',
                        flexDirection:'row'
                        }}
                    >
                        <Box sx={{
                            mr: '1rem',
                            height: 56,
                            width: 56,
                            borderRadius: '50%', 
                            overflow: 'hidden',
                        }}>
                        <Box 
                            component='img' 
                            sx={{
                                objectFit: 'cover',
                                height: '100%' ,
                                width: '100%' ,
                                position: 'static'
                            }}
                            alt='' 
                            src={claseElegida.profesor.usuario.avatar}
                        />
                        </Box>
                        <Box sx={{
                            fontWeight: 600,
                            fontSize:' 1.3rem',
                            lineHeight: '1.6rem'
                        }}>
                            <Typography component='h2' sx={{m:0,p:0}}>
                                Anfitrión: {claseElegida.profesor.usuario.nombre}
                            </Typography>
                            <Typography 
                                component='span'
                                sx={{
                                    pt: '0.5rem',
                                    color:'#717171',
                                    fontWeight: 400,
                                    fontSize: '0.9rem',
                                    lineHeight: '1.1rem'
                                }}
                            >
                                Se registró en septiembre de 2020
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Comentarios comentarios={claseElegida.comentarios}/>
                    {user &&
                    <FormComentarios 
                        claseId={claseElegida.id} setClaseElegida={setClaseElegida}
                        claseElegida={claseElegida}
                    />
                    }
                </Box>
            </Container>
        </Box>
      </Box>
    </>
  )
}

export default Clase