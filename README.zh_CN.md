https://github.com/yiminghe/async-validator
# egg-async-validator-best

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-async-validator-best.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-async-validator-best
[travis-image]: https://img.shields.io/travis/eggjs/egg-async-validator-best.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-async-validator-best
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-async-validator-best.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-async-validator-best?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-async-validator-best.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-async-validator-best
[snyk-image]: https://snyk.io/test/npm/egg-async-validator-best/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-async-validator-best
[download-image]: https://img.shields.io/npm/dm/egg-async-validator-best.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-async-validator-best

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-async-validator-best 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.asyncValidatorBest = {
  enable: true,
  package: 'egg-async-validator-best',
};
```

## 使用场景

- 基于async-validator 的egg验证插件
- 
```js
    //post 验证
    const rule = {
	lng: { type: 'string', required: true, message: '必填项' },
	lat: { type: 'string', required: true }
    }
    await this.ctx.validate(rule)  //默认校验 this.ctx.request.body
    //or
    //get
    await this.ctx.validate(rule,this.ctx.query)
    //自定义
    await this.ctx.validate(rule,{
        lng:'11',
        lat:""
    })

```
## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
