import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '../../.storybook/addons/info';
import { action } from '@storybook/addon-actions';
import Start from './start'

storiesOf('Page', module)
.add('开始页面', withInfo(() => {
  return (
    <Start onSubmit={action('submit')} />
  )
}))
