import Joi from '@hapi/joi';

export const liftrRouteschema = Joi.object().keys({
    message: Joi.string().required(),
});
