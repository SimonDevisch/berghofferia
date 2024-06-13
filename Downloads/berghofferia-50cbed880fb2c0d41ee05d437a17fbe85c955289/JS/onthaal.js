//hier komt alle code in voor het onthaal te regelen
import keuken from "./keuken";
const attachKitchenButtonListener = function () {
    const kitchenButton = document.querySelector(".kitchenButton");
    kitchenButton.addEventListener("click", function () {
        let keuken = new keuken();//dit zou een nieuwe keuken moeten maken
    })
}
const attachCounterButtonListener = function () {
    const counterButton = document.querySelector(".counterButton");
    counterButton.addEventListener("click", function () {
        setTimeout(() => {
            kitchenScreen.classList.add("hidden")
            firstOrderScreen.classList.remove("hidden")
        }, 500);
    });
}
const newOrder = new order();
const orderButton = document.querySelector(".takeOrder");
orderButton.addEventListener("click", function () {
    geluid.play();//villager sound spelen HHHHUUUUHH
    newOrder.randomizeMeat();
    newOrder.randomizeVeggies();
    newOrder.randomizeDoneness();

    orderButton.classList.add("hidden");
    const secondOrderContainer = document.querySelector(".order-container .order-container:nth-of-type(1)");

    secondOrderContainer.innerHTML = `
    <p>${newOrder.getMeat()}</p>
    <p>${newOrder.getVeggies()}</p>
    <p>${newOrder.getDoneness()}</p>`;
});