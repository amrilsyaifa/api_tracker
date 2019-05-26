/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Joi = require("joi");

module.exports = {
  register: async function(req, res) {
    try {
      const schema = Joi.object().keys({
        email: Joi.string()
          .required()
          .email(),
        password: Joi.string().required(),
        username: Joi.string()
          .required()
          .regex(/^[a-zA-Z0-9.\-_$@*!]{3,30}$/)
      });

      const { email, password, username } = await Joi.validate(
        req.allParams(),
        schema
      );
      const findEmail = await Account.findOne({ email });
      const findUsername = await Account.findOne({ username });
      const encryptedPassword = await UtilService.hashPassword(password);
      if (findEmail || findUsername) {
        return res.json(300, { info: "user exist" });
      }
      if (!findEmail || !findUsername) {
        const created = await Account.create({
          email,
          password: encryptedPassword,
          username
        }).fetch();
        const token = await JWTService.issuer(
          {
            account: created.id,
            email: created.email,
            username: created.username
          },
          "1 day"
        );
        return res.json(201, {
          token: token,
          info: "user create",
          username: created.username,
          email: created.email
        });
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.json(500, { error: error.name });
      }
      return res.serverError(error);
    }
  },

  login: async function(req, res) {
    try {
      const schema = Joi.object().keys({
        password: Joi.string(),
        username: Joi.string().required()
      });

      const { password, username } = await Joi.validate(
        req.allParams(),
        schema
      );
      const data =
        (await Account.findOne({ email: username })) ||
        (await Account.findOne({ username }));

      if (!data) {
        return res.json(400, { error: "username atau email tidak ada" });
      }

      if (data) {
        const matchedPassword = await UtilService.comparePassword(
          password,
          data.password
        );
        if (!matchedPassword) {
          return res.json(400, { error: "password not match" });
        }
        const token = JWTService.issuer(
          { account: data.id, email: data.email, username: data.username },
          "1 day"
        );
        return res.json(200, {
          token: token,
          username: data.username,
          email: data.email
        });
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.json(500, { error: error.name });
      }
      return res.serverError(error);
    }
  },
  getAll: async function(req, res) {
    try {
      var account = await Account.find().sort("updatedAt DESC");

      res.json(201, { account });
    } catch (err) {
      res.json(500, { error: err });
    }
  }
};
