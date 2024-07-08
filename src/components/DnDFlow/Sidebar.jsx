import { Avatar, Divider, Flex, Heading, Icon, IconButton, Image, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FiCalendar, FiHome, FiMenu, FiUser } from 'react-icons/fi';
import ReactCountryFlag from "react-country-flag";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large")
  const onDragStart = (event, nodeType, nodeCode, nodeName) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('nodeCode', nodeCode);
    event.dataTransfer.setData('nodeName', nodeName);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Flex flexDir="column" pos="sticky" left="5" h="95vh" marginTop="2.5vh" justifyContent="space-between"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"    
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "250px"}
    >

      <Flex as="nav" flexDir="column" p="5%" gap="10px" w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}        
      >
        {/* 상단아이콘 */}
        <IconButton icon={<FiMenu />} background="none" mt={5}
          _hover={{ background: "none" }}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        {/* Wireless */}
        <Link  as="div" p={3} borderRadius={8} 
          onDragStart={(event) => onDragStart(event, 'paymentProvider', 'St', 'Wireless')} draggable
          w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Image src='/img/Wireless_B.png' boxSize="35px"></Image>
            <Text ml={4} mt={1} display={navSize == "small" ? "none" : "flex"} >Wireless</Text>       
          </Flex>
        </Link>  

        {/* L2 Switch */}
        <Link  as="div" onDragStart={(event) => onDragStart(event, 'paymentProvider', 'Gp', 'L2 Switch')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Image src='/img/L2-Switch_B.png' boxSize="35px"></Image>
            <Text ml={3} mt={1} display={navSize == "small" ? "none" : "flex"} >L2 Switch</Text>       
          </Flex>
        </Link>  

        {/* L3 Switch */}
        <Link  as="div" onDragStart={(event) => onDragStart(event, 'paymentProvider', 'Ap', 'L3 Switch')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Image src='/img/L3-Switch_B.png' boxSize="35px"></Image>
            <Text ml={3} mt={1} display={navSize == "small" ? "none" : "flex"} >L3 Switch</Text>       
          </Flex>
        </Link>  

        {/* Router */}
        <Link  as="div" onDragStart={(event) => onDragStart(event, 'paymentProvider', 'Pp', 'Router')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Image src='/img/Router_B.png' boxSize="35px"></Image>
            <Text ml={3} mt={1} display={navSize == "small" ? "none" : "flex"} >Router</Text>       
          </Flex>
        </Link>  

        {/* HUB */}
        <Link  as="div" onDragStart={(event) => onDragStart(event, 'paymentProvider', 'Am', 'HUB')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Image src='/img/HUB_B.png' boxSize="35px"></Image>
            <Text ml={3} mt={1} display={navSize == "small" ? "none" : "flex"} >HUB</Text>       
          </Flex>
        </Link>  
        
        {/* Node 드래그 아이콘 */}
        <Link  as="div" onDragStart={(event) => onDragStart(event, 'input', 'Stripe')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Icon as={FiHome} fontSize="xl" />
            <Text ml={4} display={navSize == "small" ? "none" : "flex"} >Input Node</Text>       
          </Flex>
        </Link>          

        <Link  as="div" onDragStart={(event) => onDragStart(event, 'default', 'Stripe')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Icon as={FiCalendar} fontSize="xl" />
            <Text ml={4} display={navSize == "small" ? "none" : "flex"} >Default Node</Text>       
          </Flex>
        </Link>  

        <Link  as="div" onDragStart={(event) => onDragStart(event, 'output', 'Stripe')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Icon as={FiUser} fontSize="xl" />
            <Text ml={4} display={navSize == "small" ? "none" : "flex"} >Output Node</Text>       
          </Flex>
        </Link> 

        <Link  as="div" onDragStart={(event) => onDragStart(event, 'paymentInit', 'payment')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Image src='/img/L2-Switch_B.png' boxSize="25px"></Image>
            <Text ml={4} display={navSize == "small" ? "none" : "flex"} >Payment Node</Text>       
          </Flex>
        </Link>         

        <Link  as="div" onDragStart={(event) => onDragStart(event, 'paymentCountry', 'Stripe')} draggable
          p={3} borderRadius={8} w={navSize == "large" && "100%"} 
          _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        >
          <Flex>
            <Image src='/img/kr.svg' boxSize="25px"></Image>
            <Text ml={4} display={navSize == "small" ? "none" : "flex"} >Country Node</Text>       
          </Flex>
        </Link>  

      </Flex> 

      {/* 로그인 메뉴 */}
      <Flex flexDir="column" w="100%" p="5%" mb={4} alignItems={navSize == "small" ? "center" : "flex-start"}>
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>      
    </Flex>
  )
}
