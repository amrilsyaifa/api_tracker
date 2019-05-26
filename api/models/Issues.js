/**
 * Issues.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    summary: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    assign: {
      model: "Account",
      required: true
    },
    state: {
      type: "string",
      defaultsTo: "open"
    },
    priority: {
      type: "string",
      required: true
    },
    project: {
      model: "Project",
      required: true
    },
    handler: {
      model: "Account"
    },
    issueBug: {
      type: "string"
    }
  }
};
