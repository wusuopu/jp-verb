import { init, RematchRootState } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import selectPlugin from '@rematch/select';
import createRematchPersist from '@rematch/persist'
import app from './app'


const models = {
  app,
}

if (process.env.NODE_ENV !== 'development' && typeof(window) !== 'undefined') {
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
}
const store = init({
  models,
  plugins: [
    selectPlugin(),
    createLoadingPlugin({
      asNumber: true,
      blacklist: [
        'app/route$navigate',
        'app/route$reset',
        'app/route$push',
        'app/route$back',
        'app/ui$toast'
      ],
    }),
    createRematchPersist({
      whitelist: [],
      throttle: 500,
      version: 1,
      key: 'rematch:root',
    })
  ],
  redux: {
    middlewares: [],
  }
})

export default store

export type Store = typeof store
export type Select = typeof store.select
export type Dispatch = typeof store.dispatch
export type iRootState = RematchRootState<typeof models>
