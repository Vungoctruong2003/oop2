class Tv{
    constructor(nowVolume, nowChanel, status) {
        this.nowVolume = nowVolume;
        this.nowChanel = nowChanel;
        this.status = status;
    }

    getNowChanel(){
        if(this.status === true) {

        }
    }
    getNowVolume(){
        if(this.status === true) {
           document.write("am luong bat dau cua ban la: "+ this.nowVolume + "<br>")
        }
    }
    getStatus(){
     document.write(this.status + "<br>")
    }
    setChanel(id){
       document.write("ban da chuyen den kenh "+ id + "<br>");
    }
    setVolume(){
        if(this.status === true){
            this.nowVolume = this.nowVolume + 2;
        }
    }
    turnOff(){
        this.status = false;
        document.write("TV cua ban da tat "+ "<br>")
    }
    turnOn(){
        this.status = true;
        document.write("TV cua ban da bat" + "<br>")
    }
}
let TV1 = new Tv(20,7,false)