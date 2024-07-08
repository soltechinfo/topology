import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, ReactFlowProvider } from 'reactflow';

import CircleNode from './CircleNode.jsx';
import TringleNode from './TringleNode.jsx';
import TrapezoidNode from './TrapezoidNode.jsx';
import RectangleNode from './RectangleNode.jsx';

import 'reactflow/dist/style.css';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { circle: CircleNode, triangle: TringleNode, trapezoid: TrapezoidNode, rectangle: RectangleNode, };

function ShapeFlow() {
  const [btnArray, setBtnArray] = useState([])
  const initialNodes = [
    { id: 'node-1', type: 'circle', position: { x: 0, y: 0 }, data: { value: 123 } },
    { id: 'node-2', type: 'triangle', position: { x: 100, y: 150 }, data: { value: 123 } },
    { id: 'node-3', type: 'trapezoid', position: { x: 200, y: 300 }, data: { value: 123 } },
    { id: 'node-4', type: 'rectangle', position: { x: 300, y: 450 }, data: { value: 123, text:'sdchgdvshgcvsd', btn: <button onClick={(e)=> {handleSetbtnArray();}}>Click me</button>, btnArray: btnArray  } },
  ];
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const handleSetbtnArray = () => { 
    setBtnArray((prev)=> btnArray.push('scghsvdghsvc'));
    console.log(btnArray)
    setNodes([...nodes])
  }

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </ReactFlowProvider>
  );
}

export default ShapeFlow;
