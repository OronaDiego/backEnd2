// controlador de errores predeterminado de express y node que detecta y procesa todo los erores que se generan en la app
//pero los errores de funciones asincronas no son manejados por este predeterminado de express y esto hace que se frene la app
//que se bloquee la app, para evitar este comportamiento tenemos que pasar el error generado por cualquier funcion asyncrona
// o middewares, tenemos que pasarle la funcion next
//por eso tenemos que capturar el error y pasar el error con la funcion next que ya viene con express
export const errorHandler = (error, req, res, next)=>{
    const status = error.status || 500;
    res.status(status).json({message:error.message});
}