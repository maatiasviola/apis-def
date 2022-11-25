![image](https://user-images.githubusercontent.com/108495260/203902948-6615fd5a-af2f-4726-80de-bbe7325783bf.png)

TusClases es una aplicación web de publicación y contratación de clases particulares.

# Tabla de Contenidos
1. [Comenzando](#comenzando)
2. [Prerrequisitos](#prerrequisitos)
3. [Instalación](#instalación)
4. [BD](#bd)
5. [Testing](#testing)
6. [Contribuciones](#contribuciones)
7. [Autores](#autores)
8. [Agradecimientos](#agradecimientos)

## Comenzando

Las siguientes instrucciones le permitiran implementar el proyecto localmente para propositos de desarrollo y testing.

## Prerrequisitos

Requerimientos de software y otras herramientas utilizadas en el proyecto. 
- [Node.js](https://nodejs.org/en/about/)
- [React](https://es.reactjs.org/)
- [MongoDB](https://www.mongodb.com/es)
- [Mongoose](https://mongoosejs.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Swagger](https://swagger.io/)

## Instalación

Primero debemos realizar la instalación de las dependencias tanto con el archivo de Frontend como en el de Backend.

    npm install

Luego debemos añadir un archivo *.env* al proyecto de backend con la siguiente información:

  - SECRET=supersecret
  - DATABASE1=mongodb+srv://matias:matigonza@cluster0.wrjdamk.mongodb.net/
  - DATABASE2=TusClases?retryWrites
  - DATABASE3=true&w
  - DATABASE4=majority
  - PORT=4000

Una vez realizada la configuración, se puede inicializar el proyecto **localmente** ejecutando el siguiente comando en la terminal del Frontend...

    npm start

Y este comando en el Backend.

    nodemon app.js
    
Para visulizar el UI de la solución se puede dirigir a la url: http://localhost:3000/ y para probar los servicios se puede dirigir a esta dirección: http://localhost:4000/.

## BD

Elegimos una Base de Datos [MongoDB](https://cloud.mongodb.com/v2/635376821d73b845fd10ea98#clusters/detail/Cluster0) para la persistencia de datos.

### Esquema de documentos

Documento de usuario

    {
        _id: <ObjectId>,
        nombre: String,
        apellido: String,
        avatar: String,
        telofono: String,
        email: String,
        password: String,
        preguntaVerificacion: String,
        respuestaVerificacion: String,
        rol: String,
        clase: Array[<ObjectId>]
    }
    
Documento estudiante

    {
        _id: <ObjectId>,
        usuario: <ObjectId>,
        fechaNacimiento: Date,
        mayorEstudioCursado: String,
        mayorEstudioFinalizado: String
    }

Documento profesor

    {
        _id: <ObjectId>,
        usuario: <ObjectId>,
        contrataciones: Array[<ObjectId>],
        titulo: String,
        experiencia: String
    

Documento clase

    {
        _id: <ObjectId>,
        nombre: String,
        descripcion: String,
        tipo: String,
        categoria: String,
        frecuencia: String,
        duracion: String,
        costo: String,
        imagen: String,
        calificaciones: Array[<ObjectId>],
        comentarios: Array[<ObjectId>],
        profesor: <ObjectId>,
        estudiantes: Array[<ObjectId>]
    }

Documento comentario

    {
        _id: <ObjectId>,
        clase: <ObjectId>,
        usuario: <ObjectId>,
        descripcion: String,
        bloqueado: String
    }

Documento calificación

    {
        _id: <ObjectId>,
        clase: <ObjectId>,
        usuario: <ObjectId>,
        valor: Number
    }

Documento contratación

    {
        _id: <ObjectId>,
        clase: <ObjectId>,
        usuario: <ObjectId>,
        motivo: String,
        estado: String,
        horarioReferencia: String
    }

### Grafico de relaciones

```mermaid
graph TD;
usuario-->clase
estudiante-->usuario
profesor-->usuario
profesor-->contratacion
clase-->calificacion
clase-->comentario
clase-->profesor
clase-->estudiante
comentario-->clase
comentario-->usuario
calificacion-->clase
calificacion-->usuario
contratacion-->clase
contratacion-->usuario
```

## Testing

La aplicación se encuentra en estado para realizar las pruebas integrales que se deseen.

En caso de que se busque probar los microservicios disponibles, debe cambiar el comando de inicialización del backend por el siguiente:

    npm run dev

Luego se puede acceder a estos mediante la siguiente url: http://localhost:4000/docs. Allí se encuentra hosteada una implementación de **swagger** donde se pueden identificar y probar todos los servicios. Las credenciales para ingresar son las siguientes:
- usuario: admin
- contraseña: admin 

También implementamos la extension de rest client en caso de que se deseen hacer pruebas del servicio por ese medio.

## Contribuciones

Al ser este un proyecto con fines principalmente educativos no estamos aceptando contribuciones actualmente. No obstante, es bienvenida cualquier sugerencia que pueda considerar.

## Autores

Aplicación desarrollada por alumnos de la Universidad Argentina de la Empresa (UADE) para la materia de Aplicaciones Interactivas.

  - **Matias Viola**
  - **Gonzalo Navarte**
  - **Martin Fustiñana**

## Agradecimientos

Queremos agradecer a los profesores Ana Carolina Martínez, María Paula Sarasa y Tomas Horacio Malio por guiarnos y resolver nuestras dudas para poder realizar la mejor solución posible.

También queremos hacer una mención al desarrollador y youtuber midudev, por ofrecer gratuitamente su [Bootcamp de Desarrollo FullStack](https://www.youtube.com/watch?v=wTpuKOhGfJE&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7) del cual nos inspiramos para el desarrollo de este proyecto.


