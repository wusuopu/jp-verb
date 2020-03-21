import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '../../../.storybook/addons/info';
import Loading from '.'

storiesOf('反馈', module)
  .add('Loading', withInfo(() => {
    return (
      <div>
        <Loading loading={boolean('loading', true)}/>
        Content
      </div>
    )
  }))
