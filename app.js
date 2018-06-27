'use strict';

const Validator = require('async-validator');
module.exports = app => {
  app.Validator = Validator;
};
