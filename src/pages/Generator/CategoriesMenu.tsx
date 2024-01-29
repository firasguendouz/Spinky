import './CategoriesMenu.css';

import React, { useState } from 'react';

import AttributesPanel from './AttributesPanel';

interface CategoriesMenuProps {
  onCategoryChange: (category: string) => void;
  onOptionChange: (option: string) => void;
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ onCategoryChange, onOptionChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    onCategoryChange(category); // Notify the Generator component about the category change
  };

  const handleOptionChange = (option: string) => {
    onOptionChange(option); // Notify the Generator component about the option change
  };

  return (
    <div className="CategoriesMenu">
    <div>
      <button onClick={() => handleCategoryClick('Skin')}>Skin</button>
      <button onClick={() => handleCategoryClick('Eyes')}>Eyes</button>
      <button onClick={() => handleCategoryClick('Mouth')}>Mouth</button>
      <button onClick={() => handleCategoryClick('beard')}>Beard</button>
      <button onClick={() => handleCategoryClick('Hat')}>Hat</button>
      <button onClick={() => handleCategoryClick('Glasses')}>Glasses</button>
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
