//  structure of categoryImages
const categoryImages = {
    skin: Array.from({ length: 3 }, (_, index) => ({ default: `assets/skin/skin${index + 1}.png` })),
    eyes: Array.from({ length: 11 }, (_, index) => ({ default: `assets/eyes/eyes${index + 1}.png` })),
    mouth: Array.from({ length: 11 }, (_, index) => ({ default: `assets/mouth/mouth${index + 1}.png` })),
    hat: Array.from({ length: 25 }, (_, index) => ({ default: `assets/hat/hat${index + 1}.png` })),
    beard: Array.from({ length: 6 }, (_, index) => ({ default: `assets/beard/beard${index + 1}.png` })),
    glasses: Array.from({ length: 13 }, (_, index) => ({ default: `assets/glasses/glasses${index + 1}.png` })),
  };
  
  export default categoryImages;
  