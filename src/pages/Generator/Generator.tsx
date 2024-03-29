// Import statements

import './Generator.css'

import React, { useEffect, useRef, useState } from 'react';

import AvatarMaker from './AvatarMaker';
import { Button } from 'components';
import CategoriesMenu from './CategoriesMenu'; // Adjust the path based on the actual location
import categoryImages from './categoryImages'; // Update the path

// Interface for props
interface GeneratorProps {
  isLoggedIn: boolean;
  isMobile: boolean;
}

// Component definition
export const Generator: React.FC<GeneratorProps> = ({ isLoggedIn }) => {
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

  function setSelectedColor(color: string) {
    if (generator) {
      generator.selectedColor = color;
      // Trigger the buildDemon function to update the canvas background color
      generator.buildDemon();
    }
  }

  const updateJsonStructure = () => {
    const avatarData = {
      skin: selectedOptions.skin,
      eyes: selectedOptions.eyes,
      mouth: selectedOptions.mouth,
      hat: selectedOptions.hat,
      beard: selectedOptions.beard,
      glasses: selectedOptions.glasses,
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

  const handleSave = async () => {
    // Get the canvas data URL
    const canvasDataUrl = canvasRef.current?.toDataURL('image/png');
  
    if (canvasDataUrl) {
      // Make a request to your server
      try {
        const response = await fetch('http://localhost:3001/upload-avatar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ canvasDataUrl }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const cid = data.cid;
          console.log('Uploaded Image CID:', cid);
  
          // Handle the uploaded image CID, you can use it as needed
          handleImageUploaded(cid);
        } else {
          console.error('Failed to upload image to server.');
        }
      } catch (error) {
        console.error('Error uploading image to server:', error);
      }
    } else {
      // Handle the case where the canvas is not available or data URL is not generated
      alert('Error saving the avatar. Please try again.');
    }
  
  

      // Create a temporary link element
     /* const downloadLink = document.createElement('a');
      downloadLink.href = canvasDataUrl;
      downloadLink.download = 'avatar.png';*/

      // Trigger a click event to download the image
      /*document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);*/

      // Provide feedback to the user
      /*alert(
        ' Warning: A mischievous Spinky Demon is about to descend upon your local Storage! 🚀\n\n' +
        "Remember, If you're not the Master of This Demon, consider obtaining permission.\n\n" +
        'even demonz appreciate a bit of respect for intellectual property. 📜'
      );
    } else {
      // Handle the case where the canvas is not available or data URL is not generated
      alert('Error saving the avatar. Please try again.');
    }*/
  };

  const handleImageUploaded = async (cid: string) => {
    // Handle the uploaded image CID, you can use it as needed
    console.log('Uploaded Image CID:', cid);
  
    // Now, you can use the CID to interact with the uploaded image on NFT.storage or your preferred storage solution.
    try {
      const response = await fetch(`https://dweb.link/ipfs/${cid}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Image Metadata:', data);
        // You can handle the metadata or perform additional actions here.
      } else {
        console.error('Failed to fetch image metadata.');
      }
    } catch (error) {
      console.error('Error fetching image metadata:', error);
    }
  };
  

  return (
    <div className="generator-container">
      <div className="canvas-container">
        {/* Canvas for drawing avatar */}
        <canvas ref={canvasRef} className="mx-auto" height={448} width={448} id="avatarCanvas"></canvas>
      </div>

      <div className="OptionContainer mt-12">
        <CategoriesMenu
          onCategoryChange={handleCategoryChange}
          onOptionChange={handleOptionChange}
        />

        {/* Color palette for background */}
        <label htmlFor="backgroundColorPicker">Choose Background Color:</label>
        <input
          type="color"
          id="backgroundColorPicker"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />

        {/* IPFSUploader component */}

        <div className="button-container">
          <Button onClick={handleSave}>Save</Button>
        </div>
        <div className="button-container">
          {isLoggedIn && <Button onClick={(e) => {
            // Add your Mint functionality here
            console.log('Mint button clicked');
          }}>Mint</Button>}
        </div>
      </div>
    </div>
  );
};
