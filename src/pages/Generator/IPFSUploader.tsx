import React, { useState } from 'react';

import { NFTStorage } from 'nft.storage';
import { filesFromPath } from 'files-from-path';

interface IPFSUploaderProps {
  directoryPath: string;
}

const IPFSUploader: React.FC<IPFSUploaderProps> = ({ directoryPath }) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadedCid, setUploadedCid] = useState<string | null>(null);
  const [storageDeals, setStorageDeals] = useState<any[]>([]); // Add state to store storage deals

  const handleUpload = async () => {
    try {
      setUploading(true);

      const files = filesFromPath(directoryPath, {
        pathPrefix: path.resolve(directoryPath),
        hidden: true,
      });

      const nftstorage = new NFTStorage({
        token: 'YOUR_API_TOKEN',
      });

      console.log(`Storing file(s) from ${directoryPath}`);
      const cid = await nftstorage.storeDirectory(files);
      console.log({ cid });

      setUploadedCid(cid);

      const status = await nftstorage.status(cid);
      console.log(status);

      // Extract storage deals from the status response
      const deals = status?.deals || [];
      setStorageDeals(deals);
    } catch (error) {
      console.error("NFT.Storage upload error", error);

      // Add more logging or handle the error as needed
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {/* Your UI components indicating the upload process */}
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Directory to NFT.Storage"}
      </button>

      {/* Display the uploaded CID if available */}
      {uploadedCid && (
        <div>
          <p>Uploaded Directory CID:</p>
          <p>{uploadedCid}</p>
        </div>
      )}

      {/* Display storage deals information */}
      {storageDeals.length > 0 && (
        <div>
          <p>Storage Deals:</p>
          <ul>
            {storageDeals.map((deal, index) => (
              <li key={index}>
                <p>Status: {deal.status}</p>
                <p>Miner: {deal.miner}</p>
                <p>Deal Activation: {deal.dealActivation}</p>
                {/* Add more deal information as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IPFSUploader;
