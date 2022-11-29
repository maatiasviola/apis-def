export default function useClase(){

    const claseCalculada = ({clase})=>{
        let calificacionGeneral = 0;
        if(!(Object.keys(clase).length===0)){
            if(clase.calificaciones.length!==0){
                const {calificaciones} = clase
                const result = calificaciones.reduce(function(acumulador,siguienteValor){
                    return{
                        calificacion : acumulador.calificacion + siguienteValor.calificacion
                    }
                    })
                calificacionGeneral=result.calificacion
            }
        }
        return {...clase,calificacionGeneral:calificacionGeneral}
    }

    return{
        claseCalculada
    }
}