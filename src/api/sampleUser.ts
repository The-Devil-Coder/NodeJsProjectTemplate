import {RequestHandler} from 'express';
import {httpStatusCode} from '../common/enum';


export const getSampleUser: RequestHandler = async (request, response, next) => {
    try {
        response.status(httpStatusCode.SUCCESS).json({"ok": true})
    } catch(error) {
        next(error)
    }
}

export const setSampleUser: RequestHandler = async (request, response, next) => {
    try {
        response.status(httpStatusCode.CREATED).json({"ok": true})
    } catch(error) {
        next(error)
    }
}