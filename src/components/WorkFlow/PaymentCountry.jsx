import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Handle, Position } from "reactflow";
import CustomHandle from "./CustomHandle";

export default function PaymentCountry({
  data: { currency, country, countryCode },
}) {
  return(  
  <Flex
    alignItems={"center"}
    borderRadius="8px"
    width="100px"
    bg="#e2e8f0"
    border="2px solid #bbbdbf"
    p={2}
    gap={2}
  >
    <Box w="100%" alignItems="center">
      <ReactCountryFlag countryCode={countryCode} svg aria-label={country} 
        style={{fontSize:'2em', lineHeight:'2em'}} />
      <Text fontSize="x-small">{country}</Text>
      <Text fontSize="x-small">{currency}</Text>
    </Box>
    <CustomHandle type="source" position={Position.Right} />
    <CustomHandle type="target" position={Position.Left} />
  </Flex>
)}
