import koken from 'koken.js'
import order from 'game.js'
//dit zal alle logica bevatten om de keuken te genereren
class keuken{
    //deze class zorgt ervoor dat de keuken wordt aangemaakt,
    //het zet de events aan
    
    setKeuken(){
        let vuurintensiteit1 = 0;
        let vuurintensiteit2 = 0;
        const kitchenScreen = document.querySelector(".kitchenScreen");
        kitchenScreen.innerHTML = `
        <div class="order-container-keuken">
        <img src="./images/keuken.png" alt="keuken">
        <button class="counterButton">Naar toog</button>
        <div class="order-details-keuken">
          <p>${newOrder.getMeat() || ''}</p>
          <p>${newOrder.getVeggies() || ''}</p>
          <p>${newOrder.getDoneness() || ''}</p>
        </div>
      </div>
        <div class="animated-gif">
          
          <img src="./images/lava.webp" alt="Animated GIF" class="gif" >
          <img src="./images/lava.webp" alt="Animated GIF" class="gif" >
        </div>
        <div class="buttons">
          <p>${vuurintensiteit}</p>
          <div class="flexbuttons">
          
            <button type="button" class="button1">up</button>
            <button type="button" class="button2">down</button>
          </div>
          <p>${vuurintensiteit}</p>
          <div class="flexbuttons">
            
            <button type="button3">up</button>
            <button type="button4">down</button>
          </div>
        </div>`
        //het maakt de button om terug te keren naar het onthaal
        //en verwijderd die om naar de keuken te gaan
        setTimeout(function () {
            firstOrderScreen.classList.add("hidden");
            kitchenScreen.classList.remove("hidden");
            attachCounterButtonListener()
          }, 500);

    }
    //dit zoekt naar alle buttons in het document voor het vuur te veranderen
    runKeuken() {
        const button1 = document.querySelector(".button1");
        const button2 = document.querySelector(".button2");
        const button3 = document.querySelector(".button3");
        const button4 = document.querySelector(".button4");
        const firstOrderScreen = document.querySelector(".first_orderscreen");
        const kitchenScreen = document.querySelector(".kitchenScreen");
    }
    //hier staan de events voor het verhogen en verlagen van de vuurintsiteiten
    updateVuurintensiteit1 = (delta) => {
    let currentValue = parseInt(vuurintensiteit1.textContent, 10);
    currentValue = Math.max(0, Math.min(10, currentValue + delta));
    vuurintensiteit1.textContent = currentValue;
    };
  
    updateVuurintensiteit2 = (delta) => {
    let currentValue = parseInt(vuurintensiteit2.textContent, 10);
    currentValue = Math.max(0, Math.min(10, currentValue + delta));
    vuurintensiteit2.textContent = currentValue;
    };
}

//hieronder staan alle click events voor het veranderen van het vuur
button1.addEventListener('click', () => {
    updateVuurintensiteit1(1);
});
  
button2.addEventListener('click', () => {
    updateVuurintensiteit1(-1);
});
  
button3.addEventListener('click', () => {
    updateVuurintensiteit2(1);
});
  
button4.addEventListener('click', () => {
    updateVuurintensiteit2(-1);
});

//dit zorgt ervoor dat de button om terug te keren naar het onthaal werkt
function attachCounterButtonListener() {
    const counterButton = document.querySelector(".counterButton");
    counterButton.addEventListener("click", function () {
      setTimeout(() => {
        kitchenScreen.classList.add("hidden")
        firstOrderScreen.classList.remove("hidden")
      }, 500);
    });
  }

//het exporteren van deze file
export default keuken;