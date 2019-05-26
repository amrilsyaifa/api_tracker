/**
 * ProjectController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Joi = require("joi");
module.exports = {
  post: async function(req, res) {
    try {
      const schema = Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required()
      });
      const { title, description } = await Joi.validate(
        req.allParams(),
        schema
      );

      const create = await Project.create({
        title,
        description
      }).fetch();

      res.json(201, {
        create
      });
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  getAll: async function(req, res) {
    try {
      const all = await Project.find().sort("updatedAt DESC");
      return res.ok(all);
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  getId: async function(req, res) {
    try {
      const id = await req.param("id");
      const findProject = await Project.findOne({ id });
      if (!findProject) {
        return res.json(500, { error: "no data" });
      } else {
        return res.json(200, findProject);
      }
    } catch (err) {
      res.json(500, { error: err });
    }
  },
  updateId: async function(req, res) {
    try {
      const id = await req.param("id");
      const findProject = await Project.findOne({ id });
      if (!findProject) {
        return res.json(500, { error: "no data" });
      } else {
        var updateProject = await Project.update({
          id
        })
          .set({
            title: req.param("title"),
            description: req.param("description")
          })
          .fetch();
        return res.json(201, {
          updateProject
        });
      }
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  removeId: async function(req, res) {
    try {
      const id = await req.param("id");
      var destroyProject = await Project.destroyOne({ id });
      if (destroyProject) {
        res.json(202, { delete: "ID = " + destroyProject.id });
      } else {
        res.json(500, { error: "no data" });
      }
    } catch (err) {
      res.json(500, { error: err });
    }
  }
};
