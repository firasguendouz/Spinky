// Import statements

import React, { useEffect, useRef, useState } from 'react';

import AvatarMaker from './AvatarMaker';
import { Button } from 'components'; // Adjust the path based on the actual location
import CategoriesMenu from './CategoriesMenu'; // Adjust the path based on the actual location
import MetadataDisplay from './MetadataDisplay'; // Import the new MetadataDisplay component
import { NFTStorage } from 'nft.storage';
import categoryImages from './categoryImages'; // Update the path

// Interface for props
interface GeneratorProps {
  isLoggedIn: boolean;
}

// Component definition
export const Generator: React.FC<GeneratorProps> = ({ isLoggedIn }) => {
  const [avatarName, setAvatarName] = useState<string>('');
  const [generator] = useState(() => new AvatarMaker());
  const [selectedOptions, setSelectedOptions] = useState({
    skin: '2',
    eyes: '6',
    mouth: '1',
    hat: '10',
    beard: '5',
    glasses: '12',
  });
  const [jsonStructure, setJsonStructure] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('grey');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryImages | null>(null);

  useEffect(() => {
    generator.changeSkin(selectedOptions.skin);
    generator.changeEyes(selectedOptions.eyes);
    generator.changeMouth(selectedOptions.mouth);
    generator.changeHat(selectedOptions.hat);
    generator.changeBeard(selectedOptions.beard);
    generator.changeGlasses(selectedOptions.glasses);

    // Update JSON structure
    updateJsonStructure();

    // Update canvas background with the selected color
    updateCanvasBackground(backgroundColor);
  }, [selectedOptions, generator, backgroundColor]);

  const updateJsonStructure = () => {
    const avatarData = {
      skin: selectedOptions.skin,
      eyes: selectedOptions.eyes,
      mouth: selectedOptions.mouth,
      hat: selectedOptions.hat,
      beard: selectedOptions.beard,
      glasses: selectedOptions.glasses,
      name: avatarName,
      backgroundColor: backgroundColor,
    };

    setJsonStructure(JSON.stringify(avatarData, null, 2));
  };

  const updateCanvasBackground = (color: string) => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        const height = 448;
        const width = 448;

        // Update background color in AvatarMaker
        generator.backgroundColor = color;

        // Clear the canvas
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        // Fill the canvas with the selected background color
        context.fillStyle = color;
        context.fillRect(0, 0, height, width);

        // Draw the avatar parts on top of the background
        if (selectedCategory && categoryImages[selectedCategory]) {
          const selectedImage = categoryImages[selectedCategory][selectedOptions[selectedCategory] - 1];
          const img = new Image();
          img.src = selectedImage?.default;

          img.onload = () => {
            context.drawImage(img, (width - img.width) / 2, 0);
          };
        }
      }
    }
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setBackgroundColor(color);
    setSelectedColor(color); // Update the selected color in AvatarMaker
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category as keyof typeof categoryImages);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [selectedCategory || '']: option,
    }));
  };

  const handleImageUploaded = async (cid: string) => {
    try {
      const response = await fetch(`https://dweb.link/ipfs/${cid}`);
      if (response.ok) {
        try {
          const data = await response.json();
          console.log('Image Metadata:', data);
          // You can handle the metadata or perform additional actions here.
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else {
        console.error('Failed to fetch image metadata:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching image metadata:', error);
    }
  };

  

  const setSelectedColor = (color: string) => {
    if (generator) {
      generator.selectedColor = color;
      // Trigger the buildDemon function to update the canvas background color
      generator.buildDemon();
    }
  };

  async function getExampleImage() {
    const canvasDataUrl = canvasRef.current?.toDataURL('image/png');
    const response = await fetch(canvasDataUrl!);

    if (!response.ok) {
      throw new Error(`Error fetching image: [${response.status}]: ${response.statusText}`);
    }

    return response.blob();
  }

  async function storeExampleNFT() {
    const image = await getExampleImage();
    const imageMetadata = {
      title: 'Spinky Demonz',
      author: 'Guen12003',
      uploadDate: new Date().toISOString(),
      attributes: [
        {
          trait_type: 'Name',
          value: avatarName,
        },
        {
          trait_type: 'Background',
          value: backgroundColor,
        },
        {
          trait_type: 'Skin',
          value: selectedOptions.skin,
        },
        {
          trait_type: 'Eyes',
          value: selectedOptions.eyes,
        },
        {
          trait_type: 'Mouth',
          value: selectedOptions.mouth,
        },
        {
          trait_type: 'Hat',
          value: selectedOptions.hat,
        },
        {
          trait_type: 'Beard',
          value: selectedOptions.beard,
        },
        {
          trait_type: 'Glasses',
          value: selectedOptions.glasses,
        },
        {
          trait_type: 'Level',
          display_type: 'number',
          value: 0,
        },
      ],
    };

    const client = new NFTStorage({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgxZEFDYzBFQUJmOEYzMzRmZmRDRDczMDAxQTg5RUM5NTI2MDIyNzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwNjU3ODAwMTg3OCwibmFtZSI6IlNwaW5reU5GVFRvSVBGUyJ9._jgNhRC6KlBDvVNkvBIoq7r6XAGfHRYp19WQlb7wPtU", // Replace with your NFT.Storage token
    });

    const metadata = await client.store({
      image,
      name: avatarName,
      description: "Spinky Demonzz NFT Collection",
      properties: imageMetadata,
    });

    console.log('NFT data stored!');
    console.log('Metadata URI: ', metadata.url);
  }

  return (
    <div className="generator-container">
      <div className="canvas-container">
        {/* Canvas for drawing avatar */}
        <canvas ref={canvasRef} className="mx-auto" height={448} width={448} id="avatarCanvas"></canvas>
      </div>

      <div className="option-container mt-12">
        <CategoriesMenu onCategoryChange={handleCategoryChange} onOptionChange={handleOptionChange} />

        {/* Color palette for background */}
        <label htmlFor="backgroundColorPicker">Choose Background Color:</label>
        <input
          type="color"
          id="backgroundColorPicker"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />

        {/* Input box for avatar name */}
        <label htmlFor="avatarNameInput">Avatar Name:</label>
        <input
          type="text"
          id="avatarNameInput"
          value={avatarName}
          onChange={(e) => setAvatarName(e.target.value)}
        />

     
        <div className="button-container">
           <Button onClick={(e) => storeExampleNFT()}>Mint</Button>
        </div>
      </div>

      {/* Display metadata */}
      <MetadataDisplay metadata={jsonStructure} />
    </div>
  );
};
