import {RequestHandler} from 'express';
import {httpStatusCode} from '../common/enum';
import {getUserRequestQueryParamSchema} from '../common/schema'
import {validateRequestSchema} from '../utils/utils'
import { errors } from '../common/errorMessages';


export const getSampleUser: RequestHandler = async (request, response, next) => {
    try {
        await validateRequestSchema(getUserRequestQueryParamSchema, request.query);

        response.status(httpStatusCode.SUCCESS).json({"ok": true})
    } catch(error:any) {
        console.log(error.message)
        next(errors.BadRequestException)
    }
}

export const setSampleUser: RequestHandler = async (request, response, next) => {
    try {
        response.status(httpStatusCode.CREATED).json({"ok": true})
    } catch(error) {
        next(error)
    }
}



export const updateSampleUser: RequestHandler = async (request, response, next) => {
    try {
        response.status(httpStatusCode.CREATED).json({"ok": true})
    } catch(error) {
        next(error)
    }
}


export const deleteSampleUser: RequestHandler = async (request, response, next) => {
    try {
        response.status(httpStatusCode.CREATED).json({"ok": true})
    } catch(error) {
        next(error)
    }
}