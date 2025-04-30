const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().required().min(8).max(12).messages({}),
  edad: Joi.number().required().messages({}),
});

const { error, value } = schema.validate(
  { username: "Gonzager", otroField: "3333" },
  { abortEarly: false }
);

if (error) {
  const errores = error.details.map((d) => {
    return { atributo: d.path[0], error: d.message, type: d.type };
  });
  console.log(errores);
}