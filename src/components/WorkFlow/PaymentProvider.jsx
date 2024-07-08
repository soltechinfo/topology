import { Box, Card, CardHeader, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { X } from "react-bootstrap-icons";
import { Handle, Position,  useReactFlow } from "reactflow";
import CustomHandle from "./CustomHandle";

const PAYMENT_PROVIDER_IMAGE_MAP = {
  St: "/img/Wireless_B.png",
  Gp: "/img/L2-Switch_B.png",
	Ap: "/img/L3-Switch_B.png",
  Pp: "/img/Router_B.png",
  Am: "/img/HUB_B.png",
};

const styleEdge = {
  width: "100%",
  height: "100%",
  background: "red",
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: 0,
  transform: "none",
  border: "none",
  opacity: 0,
};

export default function PaymentProvider({ data: { name, code }, id }) {
	const { setNodes } = useReactFlow();

  return(
		<Flex>
      <Card size='sm' variant='outline' borderColor="blue.100" >
				<Handle type="target" position={Position.Top} style={ styleEdge } />
        <CardHeader>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box zIndex={99} >
							<Image width="40px" src={PAYMENT_PROVIDER_IMAGE_MAP[code]}/>
            </Box>
            <Box>
              <Heading size='sm'>{name}</Heading>
              <Text fontSize="small">당산초교 정문 CCTV #2</Text>
            </Box>
						<Box zIndex={99}>
							<IconButton icon={<X />} color="red" size="small" bg="transparent"
								aria-label="Delete Payment Provider" pointerEvents="all"
								onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))}	
							/>
						</Box>
          </Flex>
        </CardHeader>
				<Handle type="source" position={Position.Bottom} style={ styleEdge } />
      </Card>			
    </Flex>
	)
}
