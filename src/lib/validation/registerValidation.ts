import joi from "joi";

const schemaRegister = joi.object({
   fullname: joi.string().required(),
   email: joi.string().email().required(),
   password: joi.string().required().min(8)
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
      .message("Password minimum 8 characters in length. Must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)")
});

export default schemaRegister;
