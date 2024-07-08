import React from 'react'
import { Handle, Position } from 'reactflow'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function RectangleNode() {
  return (
    <Flex w='100px' h="50px" backgroundColor='#555' >
      <Handle type="target" position={Position.Top} />
      <Box>
        <Text color="white">Rectangle</Text>
      </Box>
      <Handle type="source" position={Position.Bottom} />
    </Flex>
  )
}
