import React from 'react';
import { Flex, Text } from 'rebass';
import _ from 'lodash';
import { Radio, Checkbox, Button, Col, Row } from 'antd'
import Layout from './layout';
import Config from './config';
import { FormDataType } from './types'


const FormField = (props: {label?: string, children: any}) => {
  return (
    <Flex my={1} flexWrap="wrap">
      <Col xs={24} sm={24} md={6}>{props.label}</Col>
      <Col xs={24} sm={24} md={18}>{props.children}</Col>
    </Flex>
  )
}

export type State = FormDataType;
type Props = {
  onSubmit?: (data: State) => Promise<any>;
}
export default class Start extends React.PureComponent<Props> {
  state: State = {
    labels: [],
    conjugations: [],
    count: 3,
  }

  renderLabelChecks() {
    return (
      <Row>
        {
          _.map(Config.LABELS, (item, index) => (
            <Col xs={12} md={8} key={index}><Checkbox value={item}>{item.toUpperCase()}</Checkbox></Col>
          ))
        }
      </Row>
    )
  }
  renderConjuggationChecks() {
    return (
      <Row>
        {
          _.map(Config.CONJUGATION_NAME, (name, id) => (
            <Col xs={12} md={8} lg={6} key={id}><Checkbox value={parseInt(id, 10)}>{name}</Checkbox></Col>
          ))
        }
      </Row>
    )
  }

  render() {
    return (
      <Layout>
        <FormField label="单词范围：">
          <Checkbox.Group onChange={this.handleLabelChange}>
            <Row>{this.renderLabelChecks()}</Row>
          </Checkbox.Group>
        </FormField>
        <FormField label="测试范围：">
          <Checkbox.Group onChange={this.handleConjugationChange}>
            <Row>{this.renderConjuggationChecks()}</Row>
          </Checkbox.Group>
        </FormField>
        <FormField label="单词个数：">
          <Radio.Group value={this.state.count} buttonStyle="solid" onChange={this.handleCountChange}>
            <Radio.Button value={3}>3</Radio.Button>
            <Radio.Button value={5}>5</Radio.Button>
            <Radio.Button value={7}>7</Radio.Button>
            <Radio.Button value={10}>10</Radio.Button>
          </Radio.Group>
        </FormField>
        <FormField>
          <Text>以上范围没有选择，则默认为全范围。</Text>
        </FormField>
        <Flex my={1} flexWrap="wrap" justifyContent="center">
          <Button type="primary" onClick={this.handleSubmit}>开始</Button>
        </Flex>
      </Layout>
    )
  }

  handleLabelChange = (labels) => {
    this.setState({labels})
  }
  handleConjugationChange = (conjugations) => {
    this.setState({conjugations: _.map(conjugations, v => parseInt(v, 10))})
  }
  handleCountChange = (ev) => {
    this.setState({count: ev.target.value})
  }
  handleSubmit = async () => {
    let {labels, conjugations, count} = this.state
    if (_.isEmpty(labels)) {
      labels = Config.LABELS
    }
    if (_.isEmpty(conjugations)) {
      conjugations = _.map(_.keys(Config.CONJUGATION_NAME), v => parseInt(v, 10))
    }
    this.props.onSubmit && await this.props.onSubmit({labels, conjugations, count})
  }
}
