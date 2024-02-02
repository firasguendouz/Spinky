// server.mjs

import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS
app.use(express.json()); // Add this line to parse JSON

app.post('/upload-avatar', async (req, res) => {
  const canvasDataUrl = req.body.canvasDataUrl; // Assume you send the canvas data URL in the request

  if (!canvasDataUrl) {
    return res.status(400).json({ error: 'Missing canvas data URL' });
  }

  const blob = await fetch(canvasDataUrl).then((res) => res.blob());

  const formData = new FormData();
  formData.append('file', blob, 'avatar.png');

  try {
    const response = await fetch('https://api.nft.storage/upload', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgxZEFDYzBFQUJmOEYzMzRmZmRDRDczMDAxQTg5RUM5NTI2MDIyNzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwNjU3ODAwMTg3OCwibmFtZSI6IlNwaW5reU5GVFRvSVBGUyJ9._jgNhRC6KlBDvVNkvBIoq7r6XAGfHRYp19WQlb7wPtU'
    },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      const cid = data.value.cid;
      console.log('Uploaded Image CID:', cid);
      console.log(`https://nftstorage.link/ipfs/${cid}`);
      console.log(`https://${cid}.ipfs.dweb.link`);      res.status(200).json({ cid });
    } else {
      console.error('Failed to upload image to NFT.Storage.');
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error('Error uploading image to NFT.Storage:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
