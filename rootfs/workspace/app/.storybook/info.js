import * as info from '@storybook/addon-info';

export const withInfo = (Component) => {
  return info.withInfo()(Component)
}
