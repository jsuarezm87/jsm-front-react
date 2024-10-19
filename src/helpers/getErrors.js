export const getErrors = (error) => {
    if (error.response && error.response.status === 400) {

        const errores = error.response.data.errors;
        let mensajeErrores = '';
        
        Object.values(errores).forEach(error => {
            mensajeErrores += `${error.msg}\n`;
        });

        return mensajeErrores;
    
    } else {
        return 'Error en la petición';
    }
}