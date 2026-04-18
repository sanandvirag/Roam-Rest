const Joi = require("joi");

const listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  price: Joi.number().required().min(0),
  location: Joi.string().required(),
  country: Joi.string().required(),
  image: Joi.object({
    url: Joi.string().uri().allow(""),
    filename: Joi.string().allow("")
  }).optional()
});

module.exports = listingSchema;

