'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.post('/post', controller.home.index);
};
