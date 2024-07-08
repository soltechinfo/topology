import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

export default function Inputbar() {
  return (
    <Flex flexDir="column" w="15%" p="20px" boxShadow="rgba(0, 0, 0, 0.12) 0px 3px 8px" backgroundColor="#ff0072" >
      <label for="first-name">Label : </label>
      <input type="text" name="name" id="first-name" /><br/>
      <Button colorScheme="teal" variant="solid" size="sm" mt="10px">Update</Button>
      <Button colorScheme="red" variant="solid" size="sm" mt="10px">Cancel</Button>
    </Flex>
  )
}
