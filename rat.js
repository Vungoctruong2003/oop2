class Rat {
    constructor(name, weight, speech) {
        this.name = name;
        this.weight = weight;
        this.speech = speech;
        this.status = true;
    }

    sound(text) {
        console.log(text);
    }
}

let Rat1 = new Rat("Miu", 1, 20)