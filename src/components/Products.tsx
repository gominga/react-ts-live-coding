import React from 'react';

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  padding: '10px',
};

const itemStyles = {
  padding: '20px',
  textAlign: 'center' as const,
  border: '1px solid black',
};

export default function Products() {
  return (
    <div style={containerStyles}>
      {/* headers */}
      <span style={itemStyles}>Title</span>
      <span style={itemStyles}>Category</span>
      {/* data */}
      <span style={itemStyles}>Samsung Galaxy S23</span>
      <span style={itemStyles}>Smartphone</span>
    </div>
  );
}
