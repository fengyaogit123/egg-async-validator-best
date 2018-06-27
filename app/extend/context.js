'use strict';
module.exports = {
  validate(rules, data) {
    data = data || this.request.body;
    return new Promise(resolve => {
      new this.app.Validator(rules).validate(data, errors => {
        if (errors) {
          this.throw(422, 'validation failed', {
            code: 'invalid param',
            errors,
          });
        }
        resolve();
      });
    });
  },
};
