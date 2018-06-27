'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const rule = {
      phone: [
        { type: 'string', required: true, message: '手机号不能为空' },
        {
          type: 'string',
          pattern: /^1[0-9]{10}$/,
          message: '手机号格式不正确',
        },
      ],
      code: [
        { type: 'string', required: true, message: '验证码不能为空' },
        { type: 'string', pattern: /^[0-9]{4}$/, message: '验证码格式不正确' },
      ],
    };
    console.log(this.ctx.request.body);
    await this.ctx.validate(rule);
    this.ctx.body = 'ok';
  }
}

module.exports = HomeController;
