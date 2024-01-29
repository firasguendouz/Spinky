import './AttributesPanel.css';

import React, { useEffect, useState } from 'react';

interface AttributesPanelProps {
  category: string;
  onOptionChange: (option: string) => void;
}

const AttributesPanel: React.FC<AttributesPanelProps> = ({ category, onOptionChange }) => {
  // Define lengths for each category
  const categoryLengths: Record<string, number> = {
    skin: 3,
    eyes: 2,
    mouth: 4,
    hat: 25,
    beard: 6,
    glasses: 13,
  };

  const [categoryImages, setCategoryImages] = useState<string[]>([]);

  useEffect(() => {
    const importCategoryImages = async () => {
      const images = await Promise.all(
        Array.from({ length: categoryLengths[category] }, (_, index) =>
          import(`../../assets/pieces/${category}/${category}${index + 1}.png`)
        )
      );
      setCategoryImages(images);
    };

    importCategoryImages();
  }, [category]);

  const handleImageClick = (index: number) => {
    const selectedOption = `${index + 1}`;
    onOptionChange(selectedOption);
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
