// AttributesPanel.tsx

import './AttributesPanel.css'; // Import the updated CSS for styles

import React, { useEffect, useState } from 'react';

interface AttributesPanelProps {
  category: string;
  onOptionChange: (option: string) => void; // Add a callback prop to notify the parent component about the option change
}

const AttributesPanel: React.FC<AttributesPanelProps> = ({ category, onOptionChange }) => {
  const [categoryImages, setCategoryImages] = useState<string[]>([]);

  useEffect(() => {
    const importCategoryImages = async () => {
      // Dynamically import all images for the specified category
      const images = await Promise.all(
        Array.from({ length: 16 }, (_, index) => import(`../../assets/pieces/${category}/${category}${index + 1}.png`))
      );
      setCategoryImages(images);
    };

    importCategoryImages();
  }, [category]);

  const handleImageClick = (index: number) => {
    const selectedOption = `${index + 1}`; // Assuming options are indexed from 1
    onOptionChange(selectedOption); // Notify the parent component about the option change

    console.log(`Selected ${category} image index: ${index}`);
  };

  return (
    <section className="interactive-map">
      <div className="map-preview">
        <div className="pixel-map">
          {categoryImages.map((image, index) => (
            <div
              key={index}
              className="map-cell"
              data-location={`${category}-${index + 1}`}
              style={{ backgroundImage: `url(${image.default})` }}
              onClick={() => handleImageClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttributesPanel;
