class koken {
    //cookingTime standaard waarde van 20 secoonden, deksel boolean, heat value 1-10
    constructor(lid,heat){
        this.cookingTime= 40
        this.lid = lid;
        this.heat = heat;
    }
    calculateTime(){
        //per hitte level gaat het 1 seconde sneller klaar zijn
        this.cookingTime -= this.heat*2.5;

        //als je een deksel gebruikt kook je 15% sneller
        if(this.lid == true){
            this.cookingTime *= .85
        }
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