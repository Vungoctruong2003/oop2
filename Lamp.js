class Lamp{
    constructor(status) {
        this.status = status;
    }
    tunOff(){
        this.status = false;
        document.write("not light" + "<br>")

    }
    tunOn(){
        this.status = true;
        document.write("light" + "<br>")
    }
}
 let Lam1 = new Lamp(false)
