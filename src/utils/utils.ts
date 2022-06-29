import {BadRequestException} from '../common/errors'
const Joi = require('joi');

export const validateRequestSchema = async (schema: any, payload: object) => {
    try {
        await schema.validateAsync(payload)
    } catch (error: any) {
        console.log("Error", error);
        throw new BadRequestException(filterJoiErrorResponse(error.details))
    }
    
}

let filterJoiErrorResponse = (error: any[]) => { 
    error.forEach(element => {
        delete element.context;
        delete element.type;
        delete element.path;
    })
    return error
}
