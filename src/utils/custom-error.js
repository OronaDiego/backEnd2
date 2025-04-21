export default class CustomError extends Error{ // extiende de la clase Error de JavaScript/ node
    constructor(message, status){
        super(message)
        this.status = status;
    }// con esta clase podemos levantar cualquier tipo de error
    // en el middelware va a llegar en el status, si lo declaro cuando instacio esta clase, si no lo declaro
    // le asigna un 500
}

// throw new CustomError('message error', 404); // instancio la clase con un mensaje y un codigo de error
// de esta manera el errorHandler recibe el codigo de estado y poder asignarle un codigo de estado personalizado y no que siempre 
// sea un 500