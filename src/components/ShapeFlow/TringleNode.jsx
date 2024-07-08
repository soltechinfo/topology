import React from 'react'
import { Handle, Position } from 'reactflow'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function TringleNode() {
  return (
    <Flex w='0' h="0" borderLeft='25px solid transparent' borderRight='25px solid transparent' borderBottom='50px solid #555' >
      <Handle type="target" position={Position.Top} />
      <Box>
        <Text color="white">Tringle</Text>
      </Box>
      <Handle type="source" position={Position.Bottom} />
  </Flex>
  )
}