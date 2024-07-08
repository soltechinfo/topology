import React from 'react'
import { Handle, Position } from 'reactflow'
import { Box, Flex, Text } from '@chakra-ui/react'
import Hello from './Hello'

function Header(props){
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

export default function TrapezoidNode() {
  return (
    <Flex w='125' h="0" borderLeft='25px solid transparent' borderRight='25px solid transparent' borderBottom='50px solid #555' >
    <Handle type="target" position={Position.Top} />
    <Box>     
      <Text color="white">Tapezoid</Text>
      <Hello age={10} />
      <Header title="REACT"></Header>
    </Box>
    <Handle type="source" position={Position.Bottom} />
    </Flex>
  )
}
