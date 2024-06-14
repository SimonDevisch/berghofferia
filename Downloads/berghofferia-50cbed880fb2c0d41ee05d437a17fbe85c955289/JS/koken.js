class Koken {
  constructor(lid, heat) {
    this.cookingTime = 1000;
    this.lid = lid;
    this.heat = heat;
    this.counter = 0; // Frame counter toevoegen
  }

  calculateTime() {
    if (this.heat === null) {
      return this.cookingTime = 9999999;
    }
    this.cookingTime -= this.heat * 5;

    if (this.lid) {
      this.cookingTime *= 0.85;
    }
    return this.cookingTime;
  }

  changeCookingStage(meat) {
    const foodImage = new Image();
    foodImage.src = "./images/spritesheet.png";
    const spriteDim = 128;
    const meats = ["raw beef", "raw chicken", "raw mutton", "raw porkchop", "raw salmon"];

    if (!meat || !meat.src) {
      console.error("meatImg element or its src attribute is missing.");
      return;
    }


    const currentMeatIndex = meats.indexOf(meat.alt);
    if (currentMeatIndex === -1) {
      console.error("Current meat not found in meats array.");
      return;
    }

    const currentY = spriteDim * currentMeatIndex;

    foodImage.onload = () => {
      drawImg(foodImage, this.counter, currentY);
      if (this.counter !== 5) {
        this.counter++;
      }
    };

    const drawImg = (image, x, y) => {

      meat.src = image.src;
      meat.style.width = `${spriteDim}px`;
      meat.style.height = `${spriteDim}px`;
      meat.style.objectFit = "none";
      meat.style.objectPosition = `-${x * spriteDim}px -${y}px`; // Correct positioning
    };

    setTimeout(() => {
      requestAnimationFrame(this.changeCookingStage.bind(this, meat));
    }, this.calculateTime());
    this.energiemeter();
  }

  energiemeter() {
    let energie = 100;
    let tijdsInterval = 20000000 / this.heat;
    let energieVerminderen = setInterval(() => {
      if (this.heat == 0) {
        clearInterval(energieVerminderen);
        return;
      }
      energie--;
      console.log("energie--");
    }, tijdsInterval);
  }
}

export default Koken;
