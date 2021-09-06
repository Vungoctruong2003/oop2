class Remote{
    constructor(code) {
        this.code =code;
    }
    connectToTV(tv){
        this.tivi = tv;
    }
    controlChanel(){
        this.tivi.setChanel(3);
    }
    controlVolume(){
        this.tivi.setVolume()
    }
    showVolume(){
        this.tivi.getNowVolume()
    }
    turnOff1(){
        this.tivi.turnOff();
    }
    turnOn1(){
        this.tivi.turnOn()
    }
}
let Remote1 = new Remote(123);
Remote1.connectToTV(TV1);
Remote1.turnOn1();
Remote1.controlVolume();
Remote1.showVolume();
Remote1.controlChanel();
Remote1.turnOff1();

