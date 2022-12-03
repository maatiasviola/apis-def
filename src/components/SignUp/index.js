//React
import React, { useContext, useState } from 'react'
import './styles.css'

//components
import {Dialog,IconButton,Box,Container,TextField,Select,MenuItem,InputLabel,FormControl, Typography} from '@mui/material';
import Button from '../Button';
import SignUpInfoLabel from '../SignUpInfoLabel';

//icons
import {MdClose} from 'react-icons/md';
import {MdOutlineMinimize} from 'react-icons/md';

//data
import {roles,estudios,preguntasVerificacion} from '../../data/scrollableDataOptions'

//contexts and modals
import useSignUpModal from '../../hooks/useSignUpModal';
import UserContext from '../../context/UserContext';

//services
import usersService from '../../services/users'
import teachersService from '../../services/teachers'
import studentsService from '../../services/students'

function SignUp() {
  const [nuevoUsuario,setNuevoUsuario]=useState({
    nombre:'',
    apellido:'',
    avatar: 'https://img2.freepng.es/20190702/tl/kisspng-computer-icons-portable-network-graphics-avatar-tr-clip-directory-professional-transparent-amp-png-5d1bfa95e508d4.2980489715621147099381.jpg',
    telofono:'',
    email:'',
    password:'',
    preguntaVerificacion:'',
    respuestaVerificacion:'',
    rol:'alumno'
  })

  const [nuevoProfesor,setNuevoProfesor]=useState({
    titulo:'',
    experiencia:''
  })

  const [nuevoEstudiante,setNuevoEstudiante]=useState({
    fechaNacimiento:'',
    mayorEstudioCursado:'',
    mayorEstudioFinalizado:''
  })
    
  //manipular modales
  const {showSignUp,handleSignUp}=useSignUpModal()
    
  //herramientas todos los usuarios
  const {allUsers,setAllUsers} = useContext(UserContext)

  //creacion nuevo usuario
  const handleSubmit=(event)=>{
  event.preventDefault()
  console.log('Submit')
  if (
    (
    nuevoUsuario.nombre != '' ||
    nuevoUsuario.apellido != '' ||
    nuevoUsuario.telofono != '' ||
    nuevoUsuario.email != '' ||
    nuevoUsuario.password != '' ||
    nuevoUsuario.preguntaVerificacion != '' ||
    nuevoUsuario.respuestaVerificacion != '') || (
    (nuevoProfesor.titulo != '' || nuevoProfesor.experiencia != '') || 
    (nuevoEstudiante.fechaNacimiento != '' || nuevoEstudiante.mayorEstudioCursado != '' || nuevoEstudiante.mayorEstudioFinalizado != '')
    )
  ) {
      const user_created = usersService.createUser(nuevoUsuario).then(response=>
      {if(nuevoUsuario.rol === 'alumno') {
        const new_student = {...nuevoEstudiante, user_identifier: response.id}
        const student_created = studentsService.createStudent(new_student);
        console.log(student_created)
      } else {
        const new_teacher = {...nuevoProfesor, user_identifier: response.id}
        const teacher_created = teachersService.createTeacher(new_teacher);
        console.log(teacher_created)
      }
      handleSignUp()
      }
      );
  }
  else {
    alert('Datos incompletos')
  }
}

    return (
    <>
    {showSignUp && 
      <Dialog  scroll='body'
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showSignUp}
        onClose={handleSignUp}
      >
        <Container maxWidth='sm'>
          {/*HEADER*/}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px:0,
            py:2,
            minHeight:20,
            borderBottom: '1px solid rgb(235,235,235)',
            color:'rgb(34,34,34)',
            fontSize: '1rem',
            lineHeight: '1.25rem',
            fontWeight: 800
          }}>
            <IconButton onClick={handleSignUp}>
              <MdClose/>
            </IconButton>
            
            <Typography sx={{
              flex:1,
              textAlign: 'center',
              marginLeft: '1rem',
              marginRight: '1rem',
              color: 'rgb(34, 34, 34)',
              fontSize: '1rem',
              lineHeight: '1.25rem',
              fontWeight: 800,
              textTransform:'none'
              }}
              component='h2'
            >
              Registrate
            </Typography>
            
            <IconButton onClick={handleSignUp}>
              <MdOutlineMinimize/>
            </IconButton>
          </Box>
              
          <Box>
            <form>
                  
            <TextField 
              sx={{mt:2,mb:1}} 
              fullWidth 
              label="Nombre"  
              value={nuevoUsuario.nombre}
              onChange={(e)=>setNuevoUsuario({...nuevoUsuario,nombre:e.target.value})}
            />

            <TextField 
              fullWidth 
              label="Apellido" 
              value={nuevoUsuario.apellido} 
              onChange={(e)=>setNuevoUsuario({...nuevoUsuario,apellido:e.target.value})}
            />

            <SignUpInfoLabel>
              Asegurate de que coincida con el nombre que figura en tu identificación oficial.
            </SignUpInfoLabel> 

            <TextField 
              sx={{mb:1}} 
              fullWidth 
              label="Correo Electronico" 
              value={nuevoUsuario.email} 
              onChange={(e)=>setNuevoUsuario({...nuevoUsuario,email:e.target.value})} 
            />

            <SignUpInfoLabel>
              Te vamos a enviar las confirmaciones de clases y los recibos por correo electrónico.
            </SignUpInfoLabel>
                    
            <TextField 
              sx={{mb:1}} 
              fullWidth 
              label="Numero de Telefono" 
              value={nuevoUsuario.nroTelefono} 
              onChange={(e)=>setNuevoUsuario({...nuevoUsuario,nroTelefono:e.target.value})}
            />
                
            <TextField 
              sx={{mb:1}} 
              fullWidth 
              type='password'
              label="Contraseña"
              value={nuevoUsuario.password} 
              onChange={(e)=>setNuevoUsuario({...nuevoUsuario,password:e.target.value})}
            />
                
            <FormControl fullWidth>
              <InputLabel>Pregunta Verificacion Contraseña</InputLabel>
              <Select
                value={nuevoUsuario.preguntaVerificacion}
                label='Pregunta Verificacion'
                onChange={(e)=>setNuevoUsuario({...nuevoUsuario,preguntaVerificacion:e.target.value})}
                fullWidth
                sx={{mb:1}}
              >
                {
                  preguntasVerificacion.map(pregunta=>{
                    return(
                      <MenuItem key={pregunta} value={pregunta}>
                        {pregunta}
                      </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>

            <TextField 
              sx={{mb:1}} 
              fullWidth 
              multiline 
              label="Respuesta" 
              value={nuevoUsuario.respuestaVerificacion} 
              onChange={(e)=>setNuevoUsuario({...nuevoUsuario,respuestaVerificacion:e.target.value})}
            />

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
            <FormControl fullWidth>
              <InputLabel>Rol</InputLabel>
              <Select
                value={nuevoUsuario.rol}
                label='Rol'
                onChange={(e)=>setNuevoUsuario({...nuevoUsuario,rol:e.target.value})}
                fullWidth
                sx={{mb:1}}
              >
                {
                  roles.map(rol=>{
                    return(
                      <MenuItem key={rol} value={rol}>
                        {rol}
                      </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>



            {
              nuevoUsuario.rol==='profesor' ? (
                <>
                  <TextField 
                    sx={{mb:1}} 
                    fullWidth 
                    multiline 
                    label="Titulo" 
                    value={nuevoProfesor.titulo} 
                    onChange={(e)=>setNuevoProfesor({...nuevoProfesor,titulo:e.target.value})}
                  />
                  <TextField 
                    sx={{mb:1}} 
                    fullWidth 
                    multiline 
                    label="Experiencia" 
                    value={nuevoProfesor.experiencia} 
                    onChange={(e)=>setNuevoProfesor({...nuevoProfesor,experiencia:e.target.value})}
                  />
                </>
              ) : (
                <>
                  <InputLabel>Fecha De Nacimiento</InputLabel>
                  <TextField 
                    sx={{mb:2}}  
                    fullWidth 
                    type='date' 
                    value={nuevoEstudiante.fechaNacimiento} 
                    onChange={(e)=>setNuevoEstudiante({...nuevoEstudiante,fechaNacimiento:e.target.value})}
                  />
                    
                  <FormControl fullWidth>
                    <InputLabel>Estudios mas altos terminados</InputLabel>
                      <Select
                        fullWidth
                        sx={{mb:2}}
                        value={nuevoEstudiante.estudiosTerminados}
                        label='Estudios mas altos terminados'
                        onChange={(e)=>setNuevoEstudiante({...nuevoEstudiante,mayorEstudioFinalizado:e.target.value})}
                      >
                        {
                          estudios.map(estudio=>{
                            return(
                              <MenuItem key={estudio} value={estudio}>
                                {estudio}
                              </MenuItem>
                            )
                          })
                        }
                      </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Estudios mas altos en curso</InputLabel>
                      <Select
                        value={nuevoEstudiante.estudiosEnCurso}
                        onChange={(e)=>setNuevoEstudiante({...nuevoEstudiante,mayorEstudioCursado:e.target.value})}
                        label='Estudios mas altos en curso'
                        fullWidth
                        sx={{mb:2}}
                      >
                        {
                          estudios.map(estudio=>{
                            return(
                              <MenuItem key={estudio} value={estudio}>
                                {estudio}
                              </MenuItem>
                            )  
                          })
                        }
                      </Select>
                  </FormControl>
                </>
              )
            }

            <Box sx={{ 
              fontSize: '0.75rem',
              lineHeight: '1rem',
              color: '#484848'
              }}
            >
              Al seleccionar 
              <span className='politicasSpan'> Aceptar y continuar</span>
              , acepto los 
              <a className='politicasAnchor'> Terminos de servicio</a>
              , los 
              <a className='politicasAnchor'> Términos de Pago del Servicio</a>
              y la 
              <a className='politicasAnchor'> Política contra la discriminación </a>
              de TusClases. También reconozco la 
              <a className='politicasAnchor'> Política de privacidad</a>
              .
            </Box>

            <Button onClick={handleSubmit}>
              Aceptar y continuar
            </Button>
            </form>
          </Box>
        </Container>
      </Dialog>
    }
    </>
  )
}

export default SignUp