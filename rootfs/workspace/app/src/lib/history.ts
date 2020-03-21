import {createHashHistory, History} from 'history';
import Constants from '../constants';

let historyInstance: History

export default {
  get history() {
    if (Constants.REACT_ROUTER_TYPE === 'browser') {
      return historyInstance;
    } else {
      return createHashHistory({});
    }
  },
  set history(instance) {
    if (Constants.REACT_ROUTER_TYPE === 'browser') {
      historyInstance = instance;
    }
  }
};
