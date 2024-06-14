class order {
  // het maken van een bestelling van de klant
  constructor(meat, veggies, doneness) {
    this.meat = meat;
    this.veggies = veggies;
    this.doneness = doneness;
  }

  getMeat() {
    return this.meat;
  }

  getVeggies() {
    return this.veggies;
  }

  getDoneness() {
    return this.doneness;
  }

  randomizeMeat() {
    const meats = ["biefstuk", "kip", "lam", "varkens", "kalkoen"];
    const rnd = Math.floor(Math.random() * meats.length);
    this.meat = meats[rnd];
    return this.meat;
  }
  randomizeVeggies() {
    let vegetables = ["wortel", "tomaat", "komkommer", "broccoli", "spinazie"];
    const rnd = Math.floor(Math.random() * vegetables.length);
    this.veggies = vegetables[rnd];
    return this.veggies;
  }
  randomizeDoneness() {
    let donenesses = ["Blue", "Saignant", "A point", "Bien cuit"];
    const rnd = Math.floor(Math.random() * donenesses.length);
    this.doneness = donenesses[rnd];
    if (this.meat === "kip" || this.meat === "kalkoen") {
      // als de klant kip of kalkoen vraagt moet het doorbakken zijn
      this.doneness = "Bien cuit";
    }
    return this.doneness;
  }
}

export default order;
