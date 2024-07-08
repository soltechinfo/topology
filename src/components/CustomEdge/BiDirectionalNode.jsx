import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const style = {
  padding: 10,
  background: '#fff',
  border: '1px solid #ddd',
};

const styleEdge = {
  width: "80%",
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

const BiDirectionalNode = ({ data }) => {
  return (
    <div style={style}>
      <Handle type="source" position={Position.Left} id="left" style={ styleEdge }/>      
      {data?.label}
      <Handle type="source" position={Position.Right} id="right" style={ styleEdge }/>
    </div>
  );
};

export default memo(BiDirectionalNode);
