import React from 'react'
import { Handle, Position } from 'reactflow'
import { Box, Flex, Text } from '@chakra-ui/react'
import CustomHandle from './CustomHandle'

export default function PaymentInit({data:{amount}}) {
  return (
    <Flex flexDirection="column" bg="white" border="1px solid #aa1fff">
      <Box p={2} bg="#410566">
        <Text fontSize="small" color="white">
          Payment initialzed
        </Text>
      </Box>
      <Box p={2}>
        <Text fontSize="2xl" color="blue.600">
          ${amount}     
        </Text>        
      </Box>
      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </Flex>    
  )
}
