import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'rebass';
import { boolean, object } from '@storybook/addon-knobs';
import { withInfo } from '../../.storybook/addons/info';
import { action } from '@storybook/addon-actions';
import Summary from './summary';
import Start from './start';
import Practice, { PracticeSubject } from './practice';
import Answer, { AnswerItem } from './result';

storiesOf('Page', module)
.add('开始页面', withInfo(() => {
  return (
    <Start onSubmit={action('submit')} />
  )
}))
.add('答题', withInfo(() => {
  const entity = {
    id: 14037,
    text: '促す',
    conjugation: 0,
    keigo: false,
    conjugations: {
      plain: {
        '0': { id: 14037, text: '促す', conjugation: 0, keigo: false, pronunciation: 'うながす' },
        '1': { id: 14038, text: '促さない', conjugation: 1, keigo: false },
        '2': { id: 14039, text: '促した', conjugation: 2, keigo: false },
        '3': { id: 14040, text: '促さなかった', conjugation: 3, keigo: false },
        '4': { id: 14041, text: '促して', conjugation: 4, keigo: false },
        '5': { id: 14042, text: '促したい', conjugation: 5, keigo: false },
        '6': { id: 14043, text: '促そう', conjugation: 6, keigo: false },
        '7': { id: 14044, text: '促せ', conjugation: 7, keigo: false },
        '8': { id: 14045, text: '促される', conjugation: 8, keigo: false },
        '9': { id: 14046, text: '促したら', conjugation: 9, keigo: false },
        '10': { id: 14047, text: '促せば', conjugation: 10, keigo: false },
        '11': { id: 14048, text: '促させる', conjugation: 11, keigo: false },
        '12': { id: 14049, text: '促せる', conjugation: 12, keigo: false }
      },
      keigo: {
        '0': { id: 14050, text: '促します', conjugation: 0, keigo: true, pronunciation: 'うながします' },
        '1': { id: 14051, text: '促しません', conjugation: 1, keigo: true },
        '2': { id: 14052, text: '促しました', conjugation: 2, keigo: true },
        '3': { id: 14053, text: '促しませんでした', conjugation: 3, keigo: true },
        '4': { id: 14054, text: '促しまして', conjugation: 4, keigo: true },
        '5': { id: 14055, text: '促したいです', conjugation: 5, keigo: true },
        '6': { id: 14056, text: '促しましょう', conjugation: 6, keigo: true },
        '7': { id: 14057, text: '促しませ', conjugation: 7, keigo: true },
        '8': { id: 14058, text: '促されます', conjugation: 8, keigo: true }
      }
    }
  }
  return (
    <PracticeSubject
      entity={object('entity', entity)}
      conjugations={object('conjugations', [])}
      onChange={action('change')}
    />
  )
}))
.add('答题页面', withInfo(() => {
  const entities = [
    {
      id: 14037,
      text: '促す',
      conjugation: 0,
      keigo: false,
      conjugations: {
        plain: {
          '0': { id: 14037, text: '促す', conjugation: 0, keigo: false, pronunciation: 'うながす' },
          '1': { id: 14038, text: '促さない', conjugation: 1, keigo: false },
          '2': { id: 14039, text: '促した', conjugation: 2, keigo: false },
          '3': { id: 14040, text: '促さなかった', conjugation: 3, keigo: false },
          '4': { id: 14041, text: '促して', conjugation: 4, keigo: false },
          '5': { id: 14042, text: '促したい', conjugation: 5, keigo: false },
          '6': { id: 14043, text: '促そう', conjugation: 6, keigo: false },
          '7': { id: 14044, text: '促せ', conjugation: 7, keigo: false },
          '8': { id: 14045, text: '促される', conjugation: 8, keigo: false },
          '9': { id: 14046, text: '促したら', conjugation: 9, keigo: false },
          '10': { id: 14047, text: '促せば', conjugation: 10, keigo: false },
          '11': { id: 14048, text: '促させる', conjugation: 11, keigo: false },
          '12': { id: 14049, text: '促せる', conjugation: 12, keigo: false }
        },
        keigo: {
          '0': { id: 14050, text: '促します', conjugation: 0, keigo: true, pronunciation: 'うながします' },
          '1': { id: 14051, text: '促しません', conjugation: 1, keigo: true },
          '2': { id: 14052, text: '促しました', conjugation: 2, keigo: true },
          '3': { id: 14053, text: '促しませんでした', conjugation: 3, keigo: true },
          '4': { id: 14054, text: '促しまして', conjugation: 4, keigo: true },
          '5': { id: 14055, text: '促したいです', conjugation: 5, keigo: true },
          '6': { id: 14056, text: '促しましょう', conjugation: 6, keigo: true },
          '7': { id: 14057, text: '促しませ', conjugation: 7, keigo: true },
          '8': { id: 14058, text: '促されます', conjugation: 8, keigo: true }
        }
      }
    },
    {
      id: 17381,
      text: '届ける',
      conjugation: 0,
      keigo: false,
      conjugations: {
        plain: {
          '0': { id: 17381, text: '届ける', conjugation: 0, keigo: false, pronunciation: 'とどける' },
          '1': { id: 17382, text: '届けない', conjugation: 1, keigo: false },
          '2': { id: 17383, text: '届けた', conjugation: 2, keigo: false },
          '3': { id: 17384, text: '届けなかった', conjugation: 3, keigo: false },
          '4': { id: 17385, text: '届けて', conjugation: 4, keigo: false },
          '5': { id: 17386, text: '届けたい', conjugation: 5, keigo: false },
          '6': { id: 17387, text: '届けよう', conjugation: 6, keigo: false },
          '7': { id: 17388, text: '届けろ', conjugation: 7, keigo: false },
          '8': { id: 17389, text: '届けられる', conjugation: 8, keigo: false },
          '9': { id: 17390, text: '届けたら', conjugation: 9, keigo: false },
          '10': { id: 17391, text: '届ければ', conjugation: 10, keigo: false },
          '11': { id: 17392, text: '届けさせる', conjugation: 11, keigo: false },
          '12': { id: 17393, text: '届けられる', conjugation: 12, keigo: false }
        },
        keigo: {
          '0': { id: 17394, text: '届けます', conjugation: 0, keigo: true, pronunciation: 'とどけます' },
          '1': { id: 17395, text: '届けません', conjugation: 1, keigo: true },
          '2': { id: 17396, text: '届けました', conjugation: 2, keigo: true },
          '3': { id: 17397, text: '届けませんでした', conjugation: 3, keigo: true },
          '4': { id: 17398, text: '届けまして', conjugation: 4, keigo: true },
          '5': { id: 17399, text: '届けたいです', conjugation: 5, keigo: true },
          '6': { id: 17400, text: '届けましょう', conjugation: 6, keigo: true },
          '7': { id: 17401, text: '届けませ', conjugation: 7, keigo: true },
          '8': { id: 17402, text: '届けられます', conjugation: 8, keigo: true }
        }
      }
    },
    {
      id: 9153,
      text: '煮える',
      conjugation: 0,
      keigo: false,
      conjugations: {
        plain: {
          '0': { id: 9153, text: '煮える', conjugation: 0, keigo: false, pronunciation: 'にえる' },
          '1': { id: 9154, text: '煮えない', conjugation: 1, keigo: false },
          '2': { id: 9155, text: '煮えた', conjugation: 2, keigo: false },
          '3': { id: 9156, text: '煮えなかった', conjugation: 3, keigo: false },
          '4': { id: 9157, text: '煮えて', conjugation: 4, keigo: false },
          '5': { id: 9158, text: '煮えたい', conjugation: 5, keigo: false },
          '6': { id: 9159, text: '煮えよう', conjugation: 6, keigo: false },
          '7': { id: 9160, text: '煮えろ', conjugation: 7, keigo: false },
          '8': { id: 9161, text: '煮えられる', conjugation: 8, keigo: false },
          '9': { id: 9162, text: '煮えたら', conjugation: 9, keigo: false },
          '10': { id: 9163, text: '煮えれば', conjugation: 10, keigo: false },
          '11': { id: 9164, text: '煮えさせる', conjugation: 11, keigo: false },
          '12': { id: 9165, text: '煮えられる', conjugation: 12, keigo: false }
        },
        keigo: {
          '0': { id: 9166, text: '煮えます', conjugation: 0, keigo: true, pronunciation: 'にえます' },
          '1': { id: 9167, text: '煮えません', conjugation: 1, keigo: true },
          '2': { id: 9168, text: '煮えました', conjugation: 2, keigo: true },
          '3': { id: 9169, text: '煮えませんでした', conjugation: 3, keigo: true },
          '4': { id: 9170, text: '煮えまして', conjugation: 4, keigo: true },
          '5': { id: 9171, text: '煮えたいです', conjugation: 5, keigo: true },
          '6': { id: 9172, text: '煮えましょう', conjugation: 6, keigo: true },
          '7': { id: 9173, text: '煮えませ', conjugation: 7, keigo: true },
          '8': { id: 9174, text: '煮えられます', conjugation: 8, keigo: true }
        }
      }
    }
  ]
  return (
    <Practice
      entities={object('entity', entities)}
      conjugations={object('conjugations', [])}
      onSubmit={action('submit')}
      goBack={action('goBack')}
    />
  )
}))
.add('变形说明', withInfo(() => {
  return (
    <Summary />
  )
}))
.add('结果项', withInfo(() => (
  <Flex flexDirection="column">
    <AnswerItem
      name="类型"
      reference="参考答案"
      result="提交答案"
    />
    <AnswerItem
      name="ます形"
      reference="促す / 促します"
      result="促す"
      isRight={true}
    />
    <AnswerItem
      name="ます形"
      reference="促す / 促します"
      isRight={false}
    />
  </Flex>
)))
.add('结果页面', withInfo(() => {
  const entities = [
    {
      id: 14037,
      text: '促す',
      conjugation: 0,
      keigo: false,
      conjugations: {
        plain: {
          '0': {
            id: 14037,
            text: '促す',
            conjugation: 0,
            keigo: false,
            pronunciation: 'うながす'
          },
          '1': {
            id: 14038,
            text: '促さない',
            conjugation: 1,
            keigo: false
          },
          '2': {
            id: 14039,
            text: '促した',
            conjugation: 2,
            keigo: false
          },
          '3': {
            id: 14040,
            text: '促さなかった',
            conjugation: 3,
            keigo: false
          },
          '4': {
            id: 14041,
            text: '促して',
            conjugation: 4,
            keigo: false
          },
          '5': {
            id: 14042,
            text: '促したい',
            conjugation: 5,
            keigo: false
          },
          '6': {
            id: 14043,
            text: '促そう',
            conjugation: 6,
            keigo: false
          },
          '7': {
            id: 14044,
            text: '促せ',
            conjugation: 7,
            keigo: false
          },
          '8': {
            id: 14045,
            text: '促される',
            conjugation: 8,
            keigo: false
          },
          '9': {
            id: 14046,
            text: '促したら',
            conjugation: 9,
            keigo: false
          },
          '10': {
            id: 14047,
            text: '促せば',
            conjugation: 10,
            keigo: false
          },
          '11': {
            id: 14048,
            text: '促させる',
            conjugation: 11,
            keigo: false
          },
          '12': {
            id: 14049,
            text: '促せる',
            conjugation: 12,
            keigo: false
          }
        },
        keigo: {
          '0': {
            id: 14050,
            text: '促します',
            conjugation: 0,
            keigo: true,
            pronunciation: 'うながします'
          },
          '1': {
            id: 14051,
            text: '促しません',
            conjugation: 1,
            keigo: true
          },
          '2': {
            id: 14052,
            text: '促しました',
            conjugation: 2,
            keigo: true
          },
          '3': {
            id: 14053,
            text: '促しませんでした',
            conjugation: 3,
            keigo: true
          },
          '4': {
            id: 14054,
            text: '促しまして',
            conjugation: 4,
            keigo: true
          },
          '5': {
            id: 14055,
            text: '促したいです',
            conjugation: 5,
            keigo: true
          },
          '6': {
            id: 14056,
            text: '促しましょう',
            conjugation: 6,
            keigo: true
          },
          '7': {
            id: 14057,
            text: '促しませ',
            conjugation: 7,
            keigo: true
          },
          '8': {
            id: 14058,
            text: '促されます',
            conjugation: 8,
            keigo: true
          }
        }
      }
    },
    {
      id: 17381,
      text: '届ける',
      conjugation: 0,
      keigo: false,
      conjugations: {
        plain: {
          '0': {
            id: 17381,
            text: '届ける',
            conjugation: 0,
            keigo: false,
            pronunciation: 'とどける'
          },
          '1': {
            id: 17382,
            text: '届けない',
            conjugation: 1,
            keigo: false
          },
          '2': {
            id: 17383,
            text: '届けた',
            conjugation: 2,
            keigo: false
          },
          '3': {
            id: 17384,
            text: '届けなかった',
            conjugation: 3,
            keigo: false
          },
          '4': {
            id: 17385,
            text: '届けて',
            conjugation: 4,
            keigo: false
          },
          '5': {
            id: 17386,
            text: '届けたい',
            conjugation: 5,
            keigo: false
          },
          '6': {
            id: 17387,
            text: '届けよう',
            conjugation: 6,
            keigo: false
          },
          '7': {
            id: 17388,
            text: '届けろ',
            conjugation: 7,
            keigo: false
          },
          '8': {
            id: 17389,
            text: '届けられる',
            conjugation: 8,
            keigo: false
          },
          '9': {
            id: 17390,
            text: '届けたら',
            conjugation: 9,
            keigo: false
          },
          '10': {
            id: 17391,
            text: '届ければ',
            conjugation: 10,
            keigo: false
          },
          '11': {
            id: 17392,
            text: '届けさせる',
            conjugation: 11,
            keigo: false
          },
          '12': {
            id: 17393,
            text: '届けられる',
            conjugation: 12,
            keigo: false
          }
        },
        keigo: {
          '0': {
            id: 17394,
            text: '届けます',
            conjugation: 0,
            keigo: true,
            pronunciation: 'とどけます'
          },
          '1': {
            id: 17395,
            text: '届けません',
            conjugation: 1,
            keigo: true
          },
          '2': {
            id: 17396,
            text: '届けました',
            conjugation: 2,
            keigo: true
          },
          '3': {
            id: 17397,
            text: '届けませんでした',
            conjugation: 3,
            keigo: true
          },
          '4': {
            id: 17398,
            text: '届けまして',
            conjugation: 4,
            keigo: true
          },
          '5': {
            id: 17399,
            text: '届けたいです',
            conjugation: 5,
            keigo: true
          },
          '6': {
            id: 17400,
            text: '届けましょう',
            conjugation: 6,
            keigo: true
          },
          '7': {
            id: 17401,
            text: '届けませ',
            conjugation: 7,
            keigo: true
          },
          '8': {
            id: 17402,
            text: '届けられます',
            conjugation: 8,
            keigo: true
          }
        }
      }
    },
    {
      id: 9153,
      text: '煮える',
      conjugation: 0,
      keigo: false,
      conjugations: {
        plain: {
          '0': {
            id: 9153,
            text: '煮える',
            conjugation: 0,
            keigo: false,
            pronunciation: 'にえる'
          },
          '1': {
            id: 9154,
            text: '煮えない',
            conjugation: 1,
            keigo: false
          },
          '2': {
            id: 9155,
            text: '煮えた',
            conjugation: 2,
            keigo: false
          },
          '3': {
            id: 9156,
            text: '煮えなかった',
            conjugation: 3,
            keigo: false
          },
          '4': {
            id: 9157,
            text: '煮えて',
            conjugation: 4,
            keigo: false
          },
          '5': {
            id: 9158,
            text: '煮えたい',
            conjugation: 5,
            keigo: false
          },
          '6': {
            id: 9159,
            text: '煮えよう',
            conjugation: 6,
            keigo: false
          },
          '7': {
            id: 9160,
            text: '煮えろ',
            conjugation: 7,
            keigo: false
          },
          '8': {
            id: 9161,
            text: '煮えられる',
            conjugation: 8,
            keigo: false
          },
          '9': {
            id: 9162,
            text: '煮えたら',
            conjugation: 9,
            keigo: false
          },
          '10': {
            id: 9163,
            text: '煮えれば',
            conjugation: 10,
            keigo: false
          },
          '11': {
            id: 9164,
            text: '煮えさせる',
            conjugation: 11,
            keigo: false
          },
          '12': {
            id: 9165,
            text: '煮えられる',
            conjugation: 12,
            keigo: false
          }
        },
        keigo: {
          '0': {
            id: 9166,
            text: '煮えます',
            conjugation: 0,
            keigo: true,
            pronunciation: 'にえます'
          },
          '1': {
            id: 9167,
            text: '煮えません',
            conjugation: 1,
            keigo: true
          },
          '2': {
            id: 9168,
            text: '煮えました',
            conjugation: 2,
            keigo: true
          },
          '3': {
            id: 9169,
            text: '煮えませんでした',
            conjugation: 3,
            keigo: true
          },
          '4': {
            id: 9170,
            text: '煮えまして',
            conjugation: 4,
            keigo: true
          },
          '5': {
            id: 9171,
            text: '煮えたいです',
            conjugation: 5,
            keigo: true
          },
          '6': {
            id: 9172,
            text: '煮えましょう',
            conjugation: 6,
            keigo: true
          },
          '7': {
            id: 9173,
            text: '煮えませ',
            conjugation: 7,
            keigo: true
          },
          '8': {
            id: 9174,
            text: '煮えられます',
            conjugation: 8,
            keigo: true
          }
        }
      }
    }
  ]
  const answers = {
    0: {
      1: '促しません',
    }
  }
  return (
    <Answer
      entities={object('entity', entities)}
      conjugations={object('conjugations', [])}
      answers={object('answers', answers)}
      goBack={action('goBack')}
      onAgainClick={action('again')}
    />
  )
}))
