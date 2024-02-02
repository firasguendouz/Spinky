import React from 'react';

interface MetadataDisplayProps {
  metadata: string;
}

const MetadataDisplay: React.FC<MetadataDisplayProps> = ({ metadata }) => {
  return (
    <div className="metadata-container">
      <h3>Avatar Metadata</h3>
      <pre>{metadata}</pre>
    </div>
  );
};

export default MetadataDisplay;
