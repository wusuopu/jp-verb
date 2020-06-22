import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components';
import { Collapse } from 'antd'
import _ from 'lodash'

const Wrap = styled(Flex)`
  .ant-collapse-content-box {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`
const Title = styled.h2`
  text-align: center;
`
const List = styled(Flex).attrs({
  flexDirection: 'column',
})`
`
const ListItem = styled(({desc, example, style, ...props}) => (
  <Flex {...props}>
    <Flex width={[1, 1, 1/2, 1/2]}>{desc}</Flex>
    <Flex width={[1, 1, 1/2, 1/2]}>例：{example[0]} → {example[1]}</Flex>
  </Flex>
)).attrs({
  flexWrap: 'wrap',
  mb: 1,
})`
  color: ${props => props.style === 'warn' ? '#eb2f96' : ''};
`

const Content = ({descriptions, examples}) => {
  let items: any[] = []
  _.each(descriptions, (desc, index) => {
    let descList: any[] = [];
    _.each(desc, (value, idx) => {
      descList.push(
        <ListItem
          key={idx}
          desc={value.text}
          example={examples[index][idx].text}
          style={value.style}
        />
      )
    })
    items.push(
      <Flex flexDirection="column" key={index}>
        <h4>{index+1}类动词 变法说明</h4>
        <List>{descList}</List>
      </Flex>
    )
  })
  return (
    <>
      {items}
    </>
  )
}
type PanelItemProps = {
  descriptions: {text: string, style?: string}[][]|string;
  examples?: {text: string[], style?: string}[][];
  lesson: string;
}
const PanelItem = (props: PanelItemProps) => {
  let { descriptions, examples, lesson } = props;
  let content: React.ReactNode
  if (_.isString(descriptions)) {
    content =  (<Flex>{descriptions}</Flex>)
  } else {
    content = (<Content descriptions={descriptions} examples={examples} />)
  }
  return (
    <Flex flexDirection="column">
      <Flex>出现的课次：第{lesson}课</Flex>
      {content}
    </Flex>
  )
}

const Summary = () => (
  <Wrap flexDirection="column">
    <Title>《みんなの日本語》日本変形まとめ</Title>
    <Collapse bordered={false} defaultActiveKey={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}>
        <Collapse.Panel header="て形" key="0">
          <PanelItem
            descriptions={[
              [
                {text: 'き→いて'},
                {text: 'ぎ→いで'},
                {text: 'に、び、み→んで'},
                {text: 'い、ち、り→って'},
                {text: 'し→して'},
                {text: '例外', style: 'warn'},
              ],
              [{text: 'ます形去掉ます后面直接加て'}],
              [
                {text: 'ます形去掉ます后面直接加て'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書いて']},
                {text: ['急ぎます', '急いで']},
                {text: ['死にます', '死んで']},
                {text: ['買います', '買って']},
                {text: ['話します', '話して']},
                {text: ['行きます', '行って'], style: 'warn'},
              ],
              [{text: ['見ます', '見て']}],
              [
                {text: ['来ます', '来て']},
                {text: ['します', 'して']},
              ],
            ]}
            lesson="14"
          />
        </Collapse.Panel>
        <Collapse.Panel header="た形" key="1">
          <PanelItem descriptions="与て形的变化方法完全相同" lesson="19" />
        </Collapse.Panel>
        <Collapse.Panel header="ない形" key="2">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形去掉ます后的假名变成あ段，加ない'},
                {text: 'い段把い变成わ', style: 'warn'},
              ],
              [{text: 'ます形去掉ます后面直接加ない'}],
              [
                {text: '来ます变成こない、します变成しない'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書かない']},
                {text: ['買います', '買わない'], style: 'warn'},
              ],
              [{text: ['見ます', '見ない']}],
              [
                {text: ['来ます', '来ない']},
                {text: ['します', 'しない']},
              ],
            ]}
            lesson="17"
          />
        </Collapse.Panel>
        <Collapse.Panel header="被动形" key="3">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形去掉ます后的假名变成あ段，加れる'},
              ],
              [{text: 'ます形后加られる'}],
              [
                {text: '来ます变成こられる、します变成される'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書かれる']},
              ],
              [{text: ['見ます', '見られる']}],
              [
                {text: ['来ます', 'こられる']},
                {text: ['します', 'される']},
              ],
            ]}
            lesson="37"
          />
        </Collapse.Panel>
        <Collapse.Panel header="使役形" key="4">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形去掉ます后的假名变成あ段，加せる'},
              ],
              [{text: 'ます形后加させる'}],
              [
                {text: '来ます变成こさせる、します变成させる'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書かせる']},
              ],
              [{text: ['見ます', '見させる']}],
              [
                {text: ['来ます', 'こさせる']},
                {text: ['します', 'させる']},
              ],
            ]}
            lesson="48"
          />
        </Collapse.Panel>
        <Collapse.Panel header="辞书形" key="5">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形的い段变う段'},
              ],
              [{text: 'ます形后加る'}],
              [
                {text: '来る、する'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書く']},
              ],
              [{text: ['見ます', '見る']}],
              [
                {text: ['来ます', '来る']},
                {text: ['します', 'する']},
              ],
            ]}
            lesson="18"
          />
        </Collapse.Panel>
        <Collapse.Panel header="命令形" key="6">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形的い段变え段'},
              ],
              [{text: 'ます形后加ろ'}],
              [
                {text: '来ます是こい、します是しろ'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書け']},
              ],
              [{text: ['見ます', '見ろ']}],
              [
                {text: ['来ます', 'こい']},
                {text: ['します', 'しろ']},
              ],
            ]}
            lesson="33"
          />
        </Collapse.Panel>
        <Collapse.Panel header="假定形" key="7">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形后的假名变成え段，再加ば'},
              ],
              [{text: 'ます形后加れば'}],
              [
                {text: '来ます是くれば、します是すれば'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書けば']},
              ],
              [{text: ['見ます', '見れば']}],
              [
                {text: ['来ます', 'くれば']},
                {text: ['します', 'すれば']},
              ],
            ]}
            lesson="35"
          />
        </Collapse.Panel>
        <Collapse.Panel header="可能形" key="8">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形后的假名变成え段，再加る'},
              ],
              [{text: 'ます形后加られる'}],
              [
                {text: '来ます是こられる、します是できる'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書ける']},
              ],
              [{text: ['見ます', '見られる']}],
              [
                {text: ['来ます', 'こられる']},
                {text: ['します', 'できる']},
              ],
            ]}
            lesson="27"
          />
        </Collapse.Panel>
        <Collapse.Panel header="意志形" key="9">
          <PanelItem
            descriptions={[
              [
                {text: 'ます形后的假名变成お段，再加う'},
              ],
              [{text: 'ます形后加よう'}],
              [
                {text: '来ます是こよう、します是しよう'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書きます', '書こう']},
              ],
              [{text: ['見ます', '見よう']}],
              [
                {text: ['来ます', 'こよう']},
                {text: ['します', 'しよう']},
              ],
            ]}
            lesson="31"
          />
        </Collapse.Panel>
        <Collapse.Panel header="禁止形" key="10">
          <PanelItem
            descriptions={[
              [
                {text: '辞书形后面直接加な'},
              ],
              [{text: '辞书形后面直接加な'}],
              [
                {text: '辞书形后面直接加な'},
                {text: ''},
              ]
            ]}
            examples={[
              [
                {text: ['書く', '書くな']},
              ],
              [{text: ['見る', '見るな']}],
              [
                {text: ['来る', '来るな']},
                {text: ['する', 'するな']},
              ],
            ]}
            lesson="33"
          />
        </Collapse.Panel>
    </Collapse>
  </Wrap>
)

export default Summary
