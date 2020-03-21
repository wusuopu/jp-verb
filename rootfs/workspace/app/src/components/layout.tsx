import React from 'react';
import styled from 'styled-components'
import { Flex } from 'rebass'

const Container = styled(Flex)`
  max-width: 800px;
  width: 100%;
  flex-direction: column;
`

const Layout = (props) => {
  return (
    <Flex justifyContent="center" alignItems="center" p={3}>
      <Container>
        {props.children}
      </Container>
    </Flex>
  )
}

export default Layout
