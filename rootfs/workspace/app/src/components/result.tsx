import React from 'react'
import { Button, Collapse } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Flex, Box } from 'rebass'
import styled from 'styled-components';
import { color, border, BorderProps } from 'styled-system';
import _ from 'lodash'
import Layout from './layout'
import Config from './config'
import { Entity, Answers } from './types'


const AnswerWrap = styled(Flex)`
  .ant-collapse-content-box {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`
const Row = styled(Flex)<BorderProps>`
  ${color};
  ${border};
`;

type AnswerItemProps = {
  name: string;
  reference: string;
  result?: string;
  isRight?: boolean;
}

export const AnswerItem = (props: AnswerItemProps) => {
  const {name, reference, result, isRight} = props;
  let icon
  let textColor: string|undefined = undefined
  if (!_.isUndefined(isRight)) {
    icon = isRight ? <CheckCircleOutlined style={{fontSize: 22}} /> : <CloseCircleOutlined style={{fontSize: 22}} />
    textColor = isRight ? '#52c41a' : '#eb2f96'
  }
  return (
    <Row color={textColor} alignItems="center" py={2} borderBottom="1px solid #cccccc">
      <Flex>{icon}</Flex>
      <Flex>{name}</Flex>
      <Flex justifyContent="center" flex={1}>{reference}</Flex>
      <Flex justifyContent="center" flex={1}>{result}</Flex>
    </Row>
  )
}
AnswerItem.displayName = 'AnswerItem';

type Props = {
  entities: Entity[];
  conjugations: number[];
  answers: Answers;
  goBack?: () => void;
  onAgainClick?: () => void;
  onStartClick?: () => void;
}
export default class Answer extends React.PureComponent<Props> {
  state = {}

  renderContent() {
    let {entities, conjugations, answers} = this.props
    if (_.isEmpty(entities)) {
      return (
        <Flex justifyContent="center" alignItems="center">
          没有单词！
          <Button onClick={this.props.goBack}>返回</Button>
        </Flex>
      )
    }

    const isKeigo = _.includes(conjugations, 0)       // 问题包含 辞書形 ，则当前为敬体
    let conjugationName: {[key:number]: string};
    if (isKeigo) {
      conjugationName = Config.CONJUGATION_NAME
    } else {
      conjugationName = Config.CONJUGATION_KEIGO_NAME
    }
    if (_.isEmpty(conjugations)) {
      conjugations = _.map(conjugationName, (__, key) => parseInt(key, 10))
    }
    const wordItems: any[] = []
    let totalSubject = 0    // 总题目数量
    let rightSubject = 0    // 正确的题目数量
    _.each(entities, (entity, index) => {
      let text: string;
      let pron: string|undefined;
      if (isKeigo) {
        text = entity.conjugations.keigo[0].text
        pron = entity.conjugations.keigo[0].pronunciation
      } else {
        text = entity.conjugations.plain[0].text
        pron = entity.conjugations.plain[0].pronunciation
      }
      let items: any[] = []
      for (let conjugation of conjugations) {
        let reference: string;
        let result = _.get(answers[index], conjugation)
        console.log('result:', index, conjugation, result)
        let reference1 = _.get(entity.conjugations.plain[conjugation], "text")    // 简体情况
        let reference2 = _.get(entity.conjugations.keigo[conjugation], "text")    // 敬体情况
        if (isKeigo && conjugation === Config.CONJUGATION_ENUM.PRESENT) {
          reference1 = reference2 = reference = _.get(entity.conjugations.plain[conjugation], "text")   // 当前显示ます形，回答辞书形
        }
        reference = reference1
        if (reference2 && reference2 !== reference1) {
          reference = `${reference1} / ${reference2}`
        }
        let isRight = !!(result && (result === reference1 || result === reference2))
        totalSubject++
        isRight && rightSubject++
        items.push(
          <AnswerItem
            key={conjugation}
            name={conjugationName[conjugation]}
            reference={reference}
            result={result}
            isRight={isRight}
          />
        )
      }
      wordItems.push(
        <Collapse.Panel header={`${text}(${pron})`} key={index}>
          <AnswerItem name="类型" reference="参考答案" result="提交答案" />
          {items}
        </Collapse.Panel>
      )
    })

    return (
      <AnswerWrap flexDirection="column">
        <h2>测试结果 正确率：{(rightSubject/totalSubject*100).toFixed(1)}%</h2>
        <Collapse bordered={false} defaultActiveKey={[0]}>
          {wordItems}
        </Collapse>
        <Flex justifyContent="center" alignItems="center" mt={2}>
          <Box>
            <Button onClick={this.props.onAgainClick}>重做一遍</Button>
          </Box>
          <Box>
            <Button type="primary" onClick={this.props.onStartClick}>新的测试</Button>
          </Box>
          <Box>
            <Button onClick={this.props.goBack}>返回首页</Button>
          </Box>
        </Flex>
      </AnswerWrap>
    )
  }

  render() {
    return (
      <Layout>
        {this.renderContent()}
      </Layout>
    )
  }
}
