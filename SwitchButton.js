class SwitchButton {
    constructor(status) {
        this.status = status;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {
        this.status = true;
        this.lamp.tunOn()
    }

    switchOff() {
        this.status = false;
        this.lamp.tunOff()
    }
}

let SwitchButton1 = new SwitchButton(false)
SwitchButton1.connectToLamp(Lam1);


for (let i = 1; i <= 10; i++) {
    SwitchButton1.switchOn();
    SwitchButton1.switchOff();

}