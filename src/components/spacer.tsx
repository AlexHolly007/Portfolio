import React from 'react';

interface SpacerProps {
  width?: string;
  height?: string;
}

const Spacer: React.FC<SpacerProps> = ({ width, height }) => {
  const style: React.CSSProperties = {};

  if (width) {
    style.width = width;
  }

  if (height) {
    style.height = height;
  }

  return <div style={style} />;
};

export default Spacer;