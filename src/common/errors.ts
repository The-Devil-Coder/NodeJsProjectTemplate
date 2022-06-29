import {errors} from "./errorMessages"

// General class for the custom exceptions
export class customExceptions extends Error {
    constructor(message: string) {
        super();
        this.message = message;
    }
}


// Custome Exceptions
export class BadRequestException extends customExceptions {};
