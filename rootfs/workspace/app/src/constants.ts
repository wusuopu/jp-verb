import _ from 'lodash';
type Config = {[key: string]: any}
let CONFIG: Config = {};
 try {
   // 定义的一些常量配置，可通过 nginx 的 sub_filter 来替换 __REACT-APP-CONFIG__ 字符串内容
  let cfg = JSON.parse('__REACT-APP-CONFIG__');
  if (!_.isPlainObject(cfg)) {
    CONFIG = cfg
  }
 } catch (error) {
 }

export default {
  REACT_ROUTER_TYPE: CONFIG.REACT_ROUTER_TYPE || process.env.REACT_APP_ROUTER_TYPE || 'hash',
}
