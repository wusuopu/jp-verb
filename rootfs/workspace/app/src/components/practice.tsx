import React from 'react'
import { Button, Input, Modal } from 'antd'
import { Flex, Box } from 'rebass'
import styled from 'styled-components';
import _ from 'lodash'
import Layout from './layout'
import Summary from './summary'
import Config from './config'
import { Entity, Answers } from './types'

const Title = styled.h2`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    text-align: center;
    background: #cccccc;
    padding: 10px;
`
const ButtonWrap = styled(Flex)`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    background: #cccccc;
`

type PracticeSubjectProps = {
  entity: Entity;
  conjugations: number[];
  onChange: Function;
}
export const PracticeSubject = (props: PracticeSubjectProps) => {
  let {entity, conjugations, onChange} = props;
  const conjugationInputList: any[] = [];
  let text: string;
  let pron: string|undefined;
  let conjugationName: {[key:number]: string};
  if (_.includes(conjugations, 0)) {
    text = entity.conjugations.keigo[0].text   // 当前显示ます形，回答辞书形
    pron = entity.conjugations.keigo[0].pronunciation
    conjugationName = Config.CONJUGATION_NAME
  } else {
    text = entity.conjugations.plain[0].text
    pron = entity.conjugations.plain[0].pronunciation
    conjugationName = Config.CONJUGATION_KEIGO_NAME
  }
  if (_.isEmpty(conjugations)) {
    conjugations = _.map(conjugationName, (__, key) => parseInt(key, 10))
  }
  for (let value of conjugations) {
    conjugationInputList.push(
      <Flex key={value} my={1} flexWrap="wrap">
        <Box width={[1, 1, 1/3]}>{conjugationName[value]}：</Box>
        <Box width={[1, 1, 2/3]}><Input onChange={(ev) => { onChange && onChange(value, ev.target.value.trim())}} /></Box>
      </Flex>
    )
  }
  return (
    <>
      <Title>单词：{text}({pron})</Title>
      <Flex flexDirection="column" my={80}>
        {conjugationInputList}
      </Flex>
    </>
  )
}
PracticeSubject.displayName = 'PracticeSubject';

type Props = {
  entities: Entity[];
  conjugations: number[];
  goBack?: () => void;
  onSubmit?: (data: Answers) => void;
}
export default class Practice extends React.PureComponent<Props> {
  static defaultProps = {
    conjugations: [],
  }
  state = {
    no: 0,
    modalVisible: false,
  }
  _answers:Answers  = {}

  handleInputChange = (conjugation: number, value: string) => {
    if (_.isEmpty(this._answers[this.state.no])) {
      this._answers[this.state.no] = {}
    }
    this._answers[this.state.no][conjugation] = value
  }
  handleNext = () => {
    let no = this.state.no + 1
    if (no < this.props.entities.length) {
      return this.setState({no})
    }

    let { onSubmit } = this.props
    onSubmit && onSubmit(this._answers)
  }
  handlePrev = () => {
    let no = this.state.no - 1
    if (no < 0) { no = 0 }
    this.setState({no})
  }
  renderContent() {
    let {entities, conjugations} = this.props
    if (_.isEmpty(entities)) {
      return (
        <Flex justifyContent="center" alignItems="center">
          没有单词！
          <Button onClick={this.props.goBack}>返回</Button>
        </Flex>
      )
    }

    let btnText: string
    if (this.state.no === (entities.length-1)) {
      btnText = '提交'
    } else {
      btnText = `下一题(${this.state.no+1}/${entities.length})`
    }

    return (
      <>
        <PracticeSubject
          key={this.state.no}
          entity={entities[this.state.no]}
          conjugations={conjugations}
          onChange={this.handleInputChange}
        />
        <ButtonWrap justifyContent="center" alignItems="center" py={3}>
          <Box mx={1}>
            <Button onClick={this.props.goBack}>返回</Button>
          </Box>
          <Box mx={1}>
            <Button type="primary" onClick={this.handleNext}>{btnText}</Button>
          </Box>
          <Box mx={1}>
            <Button onClick={this.showModal}>帮助</Button>
          </Box>
        </ButtonWrap>
        <Modal
          visible={this.state.modalVisible}
          destroyOnClose closable footer={null}
          onCancel={this.hideModal}
          style={{
            top: 20,
          }}
          bodyStyle={{
            overflowY: 'scroll',
            maxHeight: 400,
          }}
        >
          <Summary />
        </Modal>
      </>
    )
  }

  render() {
    return (
      <Layout>
        {this.renderContent()}
      </Layout>
    )
  }

  hideModal = () => {
    this.setState({modalVisible: false})
  }
  showModal = () => {
    this.setState({modalVisible: true})
  }
}
