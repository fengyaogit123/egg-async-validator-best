'use strict';

const mock = require('egg-mock');
mock.consoleLevel('NONE');
describe('test/async-validator-best.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/async-validator-best-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should POST /post 不带参数返回422', () => {
    return app
      .httpRequest()
      .post('/post')
      .expect(422);
  });
  it('should POST /post 手机号格式不正确', () => {
    return app
      .httpRequest()
      .post('/post')
      .send({
        phone: '11111111e',
        code: 1111,
      })
      .expect(422);
  });
  it('should POST /post 验证码未传', () => {
    return app
      .httpRequest()
      .post('/post')
      .send({
        phone: '11111111111',
      })
      .expect(422);
  });
  it('should POST /post 验证码格式不正确', () => {
    return app
      .httpRequest()
      .post('/post')
      .send({
        phone: '11111111111',
        code: '1d',
      })
      .expect(422);
  });
  it('should POST /post ok', () => {
    return app
      .httpRequest()
      .post('/post')
      .send({
        phone: '11111111111',
        code: '1111',
      })
      .expect(200);
  });
});
