// IPFSUploader.tsx

import React, { useState } from 'react';

import { create } from 'ipfs-http-client';

interface IPFSUploaderProps {
  onUpload: (cid: string) => void;
}

const IPFSUploader: React.FC<IPFSUploaderProps> = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    try {
      setUploading(true);

      // Replace 'http://localhost:5001' with your IPFS API endpoint
      const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });

      // Assuming you have the file data or a Buffer to upload
      const fileContent = 'Hello, IPFS!';

      // Upload file to IPFS
      const { cid } = await ipfs.add(fileContent);

      // Notify the parent component with the obtained CID
      onUpload(cid.toString());
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
      // Handle the error, such as displaying an error message to the user
    } finally {
      setUploading(false);
    }
  };

  return (
    <button onClick={handleUpload} disabled={uploading}>
      {uploading ? 'Uploading to IPFS...' : 'Upload to IPFS'}
    </button>
  );
};

export default IPFSUploader;
