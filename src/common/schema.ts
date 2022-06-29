const Joi = require("joi");

// Get user request query param schema to validate the requted query params
export const getUserRequestQueryParamSchema = Joi.object({
    id: Joi.number().integer().min(1).max(10000),
    username: Joi.string().alphanum().min(1).max(50)
}).xor('id', 'username')