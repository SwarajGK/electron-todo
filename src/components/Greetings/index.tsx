import React from 'react'
import { Button } from 'antd'

import { Container, Image, Text } from './styles'

const Greetings: React.FC = () => {
  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      {/* This is the sample app */}
      <Button type="primary">Primary Button</Button>
    </Container>
  )
}

export default Greetings
