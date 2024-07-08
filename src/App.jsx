import React from 'react'
import { Box, Flex } from '@chakra-ui/react';
import DnDFlow from './components/DnDFlow/DnDFlow';
import Sidebar from './components/SideBar/Sidebar';
import Workflow from './components/WorkFlow/Workflow';
import ShapeFlow from './components/ShapeFlow';
import CustomEdge from './components/CustomEdge';

export default function App() {
  return (
    <Flex flexDir="row" height="100vh" width="100%">
      {/* <Sidebar /> */}
      {/* <Flex width="40%" height="100vh" >
        <Workflow />  
        <ShapeFlow />
        <CustomEdge />
      </Flex> */}
      <Flex flexdir="column" width="100%" height="100vh" ml="20px" flexgrow="1">
        <DnDFlow />
      </Flex>   
    </Flex> 
  )
}
