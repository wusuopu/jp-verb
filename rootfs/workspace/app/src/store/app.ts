import _ from 'lodash'
import { createModel } from '@rematch/core'
import History from '../lib/history';

const initState = {}

export default createModel({
  state: initState,
  selectors: (slice, createSelector, hasProps) => ({
  }),
  reducers: {

  },
  effects: {
    route$push(page: string|{path: string, state?: any}) {
      if (_.isString(page)) {
        History.history.push(page);
      } else {
        History.history.push(page.path, page.state)
      }
      setTimeout(() => window.scrollTo(0, 0), 100);
    },
    route$back() {
      History.history.goBack()
    },
    route$replace(page: string|{path: string, state?: any}) {
      if (_.isString(page)) {
        History.history.replace(page);
      } else {
        History.history.replace(page.path, page.state)
      }
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  }
})
