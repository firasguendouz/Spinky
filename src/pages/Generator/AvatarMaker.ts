// Function to update the selected color
function setSelectedColor(color: string) {
  // Implement the function as needed
  // For example: this.selectedColor = color;
}

/* eslint-disable class-methods-use-this */
const root = '/assets/images/pieces';

export default class AvatarMaker {
  public skin!: HTMLImageElement;
  public eyes!: HTMLImageElement;
  public mouth!: HTMLImageElement;
  public beard!: HTMLImageElement;
  public hat!: HTMLImageElement;
  public glasses!: HTMLImageElement;
  selectedColor!: string; 
  
  constructor() {

    if (typeof document !== 'undefined') {
      this.skin = document.createElement('img');
      this.skin.src = `${root}/skin/Skin${1}.png`;

      this.eyes = document.createElement('img');
      this.eyes.src = `${root}/eyes/Eyes${1}.png`;

      this.mouth = document.createElement('img');
      this.mouth.src = `${root}/mouth/Mouth${1}.png`;

      this.hat = document.createElement('img');
      this.hat.src = `${root}/hat/Hat${1}.png`;

      this.beard = document.createElement('img');
      this.beard.src = `${root}/beard/Beard${1}.png`;

      this.glasses = document.createElement('img');
      this.glasses.src = `${root}/glasses/Glasses${1}.png`;
      
      this.selectedColor = 'white'; 

      this.buildDemon();
  
    }
  }
  
  changeSkin(id: string) {
    this.skin.src = `${root}/skin/Skin${id}.png`;
    this.skin.onload = this.imageLoaded.bind(this);
  }

  changeEyes(id: string) {
    this.eyes.src = `${root}/eyes/Eyes${id}.png`;
    this.eyes.onload = this.imageLoaded.bind(this);
  }

  changeMouth(id: string) {
    this.mouth.src = `${root}/mouth/Mouth${id}.png`;
    this.mouth.onload = this.imageLoaded.bind(this);
  }

  changeHat(id: string) {
    this.hat.src = `${root}/hat/Hat${id}.png`;
    this.hat.onload = this.imageLoaded.bind(this);
  }

  changeBeard(id: string) {
    this.beard.src = `${root}/beard/Beard${id}.png`;
    this.beard.onload = this.imageLoaded.bind(this);
  }

  changeGlasses(id: string) {
    this.glasses.src = `${root}/glasses/Glasses${id}.png`;
    this.glasses.onload = this.imageLoaded.bind(this);
  }



  private imageLoaded() {
    console.log('All images loaded. Building demon...');
    if (
      this.skin.complete &&
      this.eyes.complete &&
      this.mouth.complete &&
      this.hat.complete &&
      this.beard.complete &&
      this.glasses.complete
    ) {
      this.buildDemon();
    } else {
      console.error('One or more images failed to load.');
    }
  }
  
  buildDemon() {
    if (typeof document !== 'undefined') {
      const canvas = document.getElementById('avatarCanvas');
  
      function isCanvas(obj: HTMLCanvasElement | HTMLElement): obj is HTMLCanvasElement {
        return obj?.tagName === 'CANVAS';
      }
  
      if (canvas && isCanvas(canvas)) {
        const context = canvas.getContext('2d');
  
        if (!context) return;
  
        const height = 448;
        const width = 448;
  
        context.clearRect(0, 0, canvas.width, canvas.height);
  
        // Use the selected color instead of backgroundColor
        context.fillStyle = this.selectedColor;
        context.fillRect(0, 0, height, width);
  
        // Draw the avatar parts on top of the background
        this.drawImageOnCanvas(context, this.skin);
        this.drawImageOnCanvas(context, this.eyes);
        this.drawImageOnCanvas(context, this.beard);
        this.drawImageOnCanvas(context, this.mouth);
        this.drawImageOnCanvas(context, this.glasses);
        this.drawImageOnCanvas(context, this.hat);
      }
    }
  }
  
  private drawImageOnCanvas(context: CanvasRenderingContext2D, image: HTMLImageElement) {
    if (image.complete && image.naturalWidth !== 0 && image.naturalHeight !== 0) {
      context.drawImage(image, (context.canvas.width - image.width) / 2, 0);
    } else {
      console.error('Failed to draw image on canvas:', image.src);
    }
  }
  
}
