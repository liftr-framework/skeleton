import { Joi } from '@liftr/core';

export const liftrRouteschema = Joi.object().keys({
    message: Joi.string().required(),
});
