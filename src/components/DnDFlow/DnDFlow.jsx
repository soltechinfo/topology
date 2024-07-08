import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  Controls,
  Background,
  ConnectionLineType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Flex } from '@chakra-ui/react';

import Sidebar from './Sidebar';
import PaymentInit from '../WorkFlow/PaymentInit';
import PaymentCountry from '../WorkFlow/PaymentCountry';
import PaymentProvider from '../WorkFlow/PaymentProvider';
import PaymentProviderSelect from "../WorkFlow/PaymentProviderSelect";
import CircleNode from '../ShapeFlow/CircleNode';

import CustomEdge from "../WorkFlow/CustomEdge";
import FloatingEdge from '../CustomEdge/FloatingEdge';

import CustomConnectionLine from '../CustomEdge/CustomConnectionLine';

import { initialNodes, initialEdges } from '../WorkFlow/Workflow.constants';
import Inputbar from './Inputbar';

const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderSelect,
  circle: CircleNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};

const nodeOrigin = [0.5, 0.5];
const defaultViewport = { x: 0, y: 0, zoom: 1 };


const connectionLineStyle = { stroke: 'red', strokeWidth: 2 };
const defaultEdgeOptions = { style: connectionLineStyle, type: 'floating' };
// const defaultEdgeOptions = {
//   style: { strokeWidth: 2, stroke: 'red' },
//   type: 'customEdge',
// };

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function DnDFlow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const nodeCode = event.dataTransfer.getData('nodeCode');
      const nodeName = event.dataTransfer.getData('nodeName');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      console.log(nodeCode);

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node`,  currency: "당산초등학교정문 CCTV", country: "192.168.255.255", countryCode: "US", 
        code: nodeCode, name: nodeName  },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  return (
    <Flex width="100%">
      <ReactFlowProvider>
        <Sidebar />        
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}

          // fitView
          // nodeOrigin={nodeOrigin}
          snapToGrid={true}

          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}                           

          defaultViewport={defaultViewport}      
          defaultEdgeOptions={defaultEdgeOptions}

          connectionMode={ConnectionMode.Loose}
          // connectionLineType={ConnectionLineType.Straight}          
          connectionLineStyle={connectionLineStyle}
          connectionLineComponent={CustomConnectionLine}      
        >
          <Controls />
          <Background />
        </ReactFlow>
        <Inputbar />
      </ReactFlowProvider>
    </Flex>
  )
}