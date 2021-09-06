class Cat{
    constructor(name,weight,maxspeech,) {
        this.name = name;
        this.weight = weight;
        this.maxspeech = maxspeech;
    }
    sound(text){
        console.log(text);
    }
    catchRat(rat){
        if(this.maxspeech > rat.speech){
            console.log("con meo " + this.name + " da bat duoc con chuot " + rat.name  )
        }
    }
    eatRat(rat){
        if(rat.status === true){
            console.log("con meo " + this.name + " da bat an thit con chuot " + rat.name  )
            this.weight += rat.weight;
            console.log(this.weight)
        }
    }
}
let cat1 = new Cat("MeoMeo",3,30);
cat1.catchRat(Rat1);
Rat1.sound("tha cho em anh ui!!!")
cat1.sound("chiu cung:))")
cat1.eatRat(Rat1);
