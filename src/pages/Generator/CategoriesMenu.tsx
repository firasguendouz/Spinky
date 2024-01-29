import './CategoriesMenu.css';

import React, { useState } from 'react';

import AttributesPanel from './AttributesPanel';

interface CategoriesMenuProps {
  onCategoryChange: (category: string) => void;
  onOptionChange: (option: string) => void;
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ onCategoryChange, onOptionChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('1'); // Default option

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    onCategoryChange(category); // Notify the Generator component about the category change
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onOptionChange(option); // Notify the Generator component about the option change
  };

  return (
    <div className="CategoriesMenu">
    <div>
      <button onClick={() => handleCategoryClick('skin')}>Skin</button>
      <button onClick={() => handleCategoryClick('eyes')}>Eyes</button>
      <button onClick={() => handleCategoryClick('mouth')}>Mouth</button>
      <button onClick={() => handleCategoryClick('beard')}>Beard</button>
      <button onClick={() => handleCategoryClick('hat')}>Hat</button>
      <button onClick={() => handleCategoryClick('glasses')}>Glasses</button>
    </div>
    {selectedCategory && (
      <AttributesPanel
        category={selectedCategory}
        onOptionChange={handleOptionChange}
      />
    )}
  </div>
  );
};

export default CategoriesMenu;
