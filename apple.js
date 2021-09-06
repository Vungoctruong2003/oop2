class Apple{
    constructor() {
        this.weight = 10;
        this.status = true;
    }
    decrease(){
        this.weight--;
    }
    isEmpty(){
        return this.status;
    }
    getWeight1(){
        return this.weight;
    }
}
let apple1 = new Apple();
