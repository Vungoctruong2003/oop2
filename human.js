class Human{
    constructor(name,weight,gender) {
        this.name = name;
        this.weight1 = weight;
        this.gender = gender;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight1;
    }
    getGender(){
        return this.gender;
    }
    say(text){
        console.log(text);
    }
    eat(Apple){
        if(Apple.status === true){
            this.weight1++;
            Apple.decrease();
        }
    }
    checkAppleWeight(Apple){
       return Apple.weight;
    }
}

let Adam = new Human("Adam",58,"male");

Adam.eat(apple1);
console.log(Adam.getWeight());
console.log(   Adam.getGender());
Adam.say("truong dep trai!!");
Adam.checkAppleWeight(apple1);
console.log(Adam.getName())
console.log(apple1.getWeight1())
