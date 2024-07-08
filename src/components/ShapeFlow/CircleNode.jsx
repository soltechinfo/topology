import React from 'react'
import { Handle, Position } from 'reactflow'
import { Box, Flex, Text, Heading, Stack, StackDivider, Image, Divider, ButtonGroup, Button, Avatar, IconButton, SimpleGrid } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { BiChat, BiLike, BiShare } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function CircleNode() { 
  return (
    <Flex>
      <Handle type="target" position={Position.Top} />
      <Card size='md' variant='outline'>
        <CardHeader>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box>
              <Image width="40px" src='/img/Wireless_B.png' />
            </Box>
            <Box>
              <Heading size='sm'>192.168.100.254</Heading>
              <Text>당산초교 정문 CCTV #2</Text>
            </Box>
          </Flex>
        </CardHeader>
      </Card>
    </Flex>

    // <Flex w='50px' h="50px" backgroundColor='#fff555' borderRadius='50%' >
    //   <Handle type="target" position={Position.Top} />
    //   <Box>
    //     <Text color="white">Circle</Text>
    //   </Box>
    //   <Handle type="source" position={Position.Bottom} />
    // </Flex>
  )
}
