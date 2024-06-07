export const move = function () {

    const pans = document.querySelectorAll(".pannen .pan");
    const kookplaten = document.querySelectorAll(".animated-gif .gif");
    const anderePan1 = document.querySelector("#panVuur1");
    const anderePan2 = document.querySelector("#panVuur2");

    let panClicked = false;
    let selectedPan = null;

    pans.forEach(pan => {
        pan.addEventListener("click", function () {
            selectedPan = pan;
            pan.classList.add('selected');
            kookplaten.forEach(function (kookplaat) {
                if (!kookplaat.classList.contains('bezet')) {
                    kookplaat.classList.add('options');
                }
            });
        });
    });

    kookplaten.forEach(function (kookplaat) {
        kookplaat.addEventListener("click", function () {
            if (selectedPan) {
                selectedPan.style.display = "none";
                selectedPan.classList.remove('selected');
                kookplaten.forEach(function (kookplaat) {
                    kookplaat.classList.remove('options');
                });
                if (kookplaat.id === "kookplaat1") {
                    anderePan1.classList.remove('hidden');
                    anderePan1.classList.add('show');
                    kookplaat.classList.add('bezet');
                } else if (kookplaat.id === "kookplaat2") {
                    anderePan2.classList.remove('hidden');
                    anderePan2.classList.add('show');
                    kookplaat.classList.add('bezet');
                }
                selectedPan = null;
            }
        });
    });
}

/*
vleess.addEventListener("click", function() {
   vleesClicked = true;
    vlees.classList.add('selected');
    anderePan.classList.add('options');
});

anderePan.addEventListener("click", function () {
    anderePan.classList.remove('options');
    vlees.classList.remove('selected');
    if (panClicked && vleesClicked) {
        vlees.classList.add('bakken');
    }
});
*/