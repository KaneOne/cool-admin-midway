import { ModuleConfig } from '@cool-midway/core';

/**
 * 模块配置
 */
export default () => {
  return {
    // 模块名称
    name: '用户模块',
    // 模块描述
    description: 'APP、小程序、公众号等用户',
    // 中间件，只对本模块有效
    middlewares: [],
    // 中间件，全局有效
    globalMiddlewares: [],
    // 模块加载顺序，默认为0，值越大越优先加载
    order: 0,
    // 阿里云短信
    sms: {
      signName: '',
      templateCode: ' ',
      accessKeyId: '',
      accessKeySecret: '',
      // 验证码有效期，单位秒
      timeout: 60 * 3,
    },
    // 微信配置
    wx: {
      // 小程序
      mini: {
        appid: 'xxx',
        secret: 'xxx',
      },
      mp: {
        appid: 'xxx',
        secret: 'xxx',
      },
    },
  } as ModuleConfig;
};
