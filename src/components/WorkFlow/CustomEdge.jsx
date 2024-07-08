import React from 'react'
import { X } from 'react-bootstrap-icons'
import { EdgeLabelRenderer, StraightEdge, getStraightPath, useReactFlow, } from "reactflow";
import { IconButton } from '@chakra-ui/react'

export default function CustomEdge(props) {
  const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, } = props;
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getStraightPath({sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, });

  return (
    <>
      <StraightEdge {...props} />
      {/* <BezierEdge {...props} /> */}
      <EdgeLabelRenderer>
        <IconButton
          pos="absolute"
          icon={<X />}
          color="red"
          transform={`translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`}
          pointerEvents="all"
          bg="transparent"
          size="small"
          onClick={() => setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id)) }
        />
      </EdgeLabelRenderer>
    </>    
  )
}
