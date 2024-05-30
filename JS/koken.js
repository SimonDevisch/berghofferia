class koken {
    //cookingTime standaard waarde van 20 secoonden, deksel boolean, heat value 1-10
    constructor(lid,heat){
        this.cookingTime= 40
        this.lid = lid;
        this.heat = heat;
    }
    calculateTime(){
    // per hitte level gaat het 2.5 seconde sneller klaar zijn
    this.cookingTime -= this.heat * 2.5;

    // als je een deksel gebruikt kook je 15% sneller
    if (this.lid) {
        this.cookingTime *= 0.85;
    }
    return this.cookingTime;
}

changeCookingStage(){
    const foodImage = new Image();
    foodImage.src = "./images/spritesheet.png";
    let frameX = 0
    const spriteDim = 128;
    const meats = ["beef", "chicken", "mutton", "porkcop", "salmon"];
    
    // placeholder currently until meat is entered
    const meatImg = "mutton_raw.png";
    const underscore = meatImg.indexOf("_");
    const currentMeat = meatImg.substring(0, underscore);
    const currentMeatIndex = meats.indexOf(currentMeat);

    const currentY = spriteDim * currentMeatIndex;
    
    drawImg = (foodImage, frameX * spriteDim, currentY)
setTimeout(() => {
    requestAnimationFrame(this.changeCookingStage);
}, cookingTime());

}


    // de energiemeter die wordt aangepast
    energiemeter(vermenigvuldiger){
        let energie = 100;
        let tijdsInterval = 20000 / vermenigvuldiger;

        let energieVerminderen = setInterval(() => {
            if(vermenigvuldiger == 0){
                return;
            }
            energie--;
            console.log("energie--")
        }, tijdsInterval)
    }    
}

export default koken;