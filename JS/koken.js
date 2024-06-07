class koken {
  //cookingTime standaard waarde van 20 secoonden, deksel boolean, heat value 1-10
  constructor(lid, heat) {
    this.cookingTime = 40;
    this.lid = lid;
    this.heat = heat;
  }
  calculateTime() {
    // per hitte level gaat het 2.5 seconde sneller klaar zijn
    this.cookingTime -= this.heat * 5;

    // als je een deksel gebruikt kook je 15% sneller
    if (this.lid) {
      this.cookingTime *= 0.85;
    }
    return this.cookingTime;
  }

  changeCookingStage() {
    const foodImage = new Image();
    foodImage.src = "./images/spritesheet.png";
    let frameX = 0;
    const spriteDim = 128;
    const meats = ["beef", "chicken", "mutton", "porkchop", "salmon"];

    // Placeholder voor het huidige vlees
    const meatImg = document.getElementById("meatImgId"); // Pas meatImgId aan naar jouw img id
    const underscore = meatImg.src.indexOf("_");
    const currentMeat = meatImg.src.substring(0, underscore);
    const currentMeatIndex = meats.indexOf(currentMeat);
    console.log(currentMeat); // log to check if the meat matches up
    const currentY = spriteDim * currentMeatIndex;
    console.log(currentY); // log to check if y value is correct for the spritesheet
    // Controleer of foodImage geladen is voordat je tekent
    foodImage.onload = () => {
      drawImg(foodImage, frameX * spriteDim, currentY);
    };

    // Definieer de drawImg functie om een img te gebruiken
    const drawImg = (image, x, y) => {
      meatImg.src = image.src;
      meatImg.style.width = `${spriteDim}px`;
      meatImg.style.height = `${spriteDim}px`;
      meatImg.style.objectFit = "none";
      meatImg.style.objectPosition = `-${x}px -${y}px`;
      console.log(meatImg);
    };

    setTimeout(() => {
      requestAnimationFrame(this.changeCookingStage.bind(this));
    }, this.calculateTime());
    this.energiemeter();
  }

  // de energiemeter die wordt aangepast
  energiemeter() {
    let energie = 100;
    let tijdsInterval = 20000 / this.heat;
    let energieVerminderen = setInterval(() => {
      if (this.heat == 0) {
        return;
      }
      energie--;
      console.log("energie--");
    }, tijdsInterval);
  }
}

export default koken;
