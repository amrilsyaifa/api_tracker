/**
 * IssuesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Joi = require("joi");
module.exports = {
  getAll: async function(req, res) {
    try {
      all = await Issues.find()
        .sort("updatedAt DESC")
        .populate("assign")
        .populate("project")
        .populate("handler");
      return res.ok(all);
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  post: async function(req, res) {
    try {
      const schema = Joi.object().keys({
        summary: Joi.string().required(),
        description: Joi.string().required(),
        assign: Joi.string().required(),
        priority: Joi.string().required(),
        project: Joi.string().required()
      });
      const {
        summary,
        description,
        assign,
        priority,
        project
      } = await Joi.validate(req.allParams(), schema);

      const findIdProject = await Project.findOne({
        id: project
      });

      if (findIdProject) {
        const create = await Issues.create({
          summary,
          description,
          assign,
          priority,
          project
        }).fetch();
        res.json(201, {
          create
        });
      } else {
        res.json(500, {
          error: "No data project"
        });
      }
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  getId: async function(req, res) {
    try {
      const id = await req.param("id");
      const getID = await Issues.findOne({ id })
        .populate("assign")
        .populate("project")
        .populate("handler");
      if (getID) {
        return res.json(201, { getID });
      } else {
        return res.json(500, { error: "not found" });
      }
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  getOpen: async function(req, res) {
    try {
      const getOpen = await Issues.find({ state: "open" })
        .populate("assign")
        .populate("project")
        .populate("handler");

      return res.json(201, { getOpen });
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  getClose: async function(req, res) {
    try {
      const getClose = await Issues.find({ state: "close" })
        .populate("assign")
        .populate("project")
        .populate("handler");

      return res.json(201, { getClose });
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  updateId: async function(req, res) {
    try {
      const schema = Joi.object().keys({
        handler: Joi.string().required(),
        issueBug: Joi.string().required(),
        state: Joi.string().required(),
        id: Joi.string()
      });

      const { handler, issueBug, id, state } = await Joi.validate(
        req.allParams(),
        schema
      );
      const findIssues = await Issues.findOne({ id });
      if (!findIssues) {
        return res.json(500, { error: "no data found" });
      } else {
        const findIDHandler = await Account.findOne({ id: handler });
        if (!findIDHandler) {
          return res.json(500, { error: "no data found" });
        } else {
          var updateIssue = await Issues.update({ id })
            .set({
              handler,
              issueBug,
              state
            })
            .fetch();
          return res.json(201, updateIssue[0]);
        }
      }
    } catch (err) {
      return res.json(500, { error: err });
    }
  },
  removeId: async function(req, res) {
    try {
      const id = await req.param("id");
      var destroyIssues = await Issues.destroyOne({ id });
      if (destroyIssues) {
        res.json(202, { delete: "ID = " + destroyIssues.id });
      } else {
        res.json(500, { error: "no data found" });
      }
    } catch (err) {
      res.json(500, { error: err });
    }
  }
};
