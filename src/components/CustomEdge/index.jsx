import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
  ConnectionMode,
} from 'reactflow';
import 'reactflow/dist/style.css';

import BiDirectionalNode from './BiDirectionalNode';
import FloatingEdge from './FloatingEdge';
import CustomConnectionLine from './CustomConnectionLine';

const initialNodes = [
  {
    id: 'button-1',
    type: 'input',
    data: { label: 'Button Edge 1' },
    position: { x: 0, y: 0 },
  },
  { id: 'button-2', 
    type: 'default',
    data: { label: 'Button Edge 2' }, 
    position: { x: 100, y: 100 } },
  {
    id: 'bi-1',
    data: { label: 'Bi Directional 1' },
    position: { x: 0, y: 300 },
    type: 'bidirectional',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'bi-2',
    data: { label: 'Bi Directional 2' },
    position: { x: 250, y: 300 },
    type: 'bidirectional',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'self-1',
    data: { label: 'Self Connecting' },
    position: { x: 125, y: 500 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
];

const initialEdges = [
];

const nodeTypes = {
  bidirectional: BiDirectionalNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 2, stroke: 'red' },
  type: 'floating',
};

const connectionLineStyle = {
  strokeWidth: 2,
  stroke: 'black',
};

const CustomNodeEdge = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}     

      fitView

      defaultEdgeOptions={defaultEdgeOptions}

      connectionMode={ConnectionMode.Loose}
      connectionLineStyle={connectionLineStyle}
      connectionLineComponent={CustomConnectionLine}      
    >
    </ReactFlow>
  );
};

export default CustomNodeEdge;