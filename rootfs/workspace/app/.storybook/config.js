import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider  } from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import theme from '../src/theme'
import 'antd/dist/antd.less';

const ThemeDecorator = ( storyFn ) => (
  <ThemeProvider theme={theme}>
   { storyFn()  }
  </ThemeProvider>
)

addParameters({                 // 可切换背景
  backgrounds: [
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'black', value: '#000000' },
    { name: 'white', value: '#ffffff' },
  ]
});
addDecorator(withKnobs);
addDecorator(StoryRouter());
addDecorator(ThemeDecorator);

const req = require.context('../src/components', true, /\.stories\.tsx$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
