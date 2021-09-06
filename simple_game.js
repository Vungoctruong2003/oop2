function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 50;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }
    this.moveUp = function(){
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }
}

var hero = new Hero("https://cuongphim.com/wp-content/uploads/2018/09/Spectrum-Monica-Rambeau-Marvel-Comics-cuong-phim-1024x512.jpg", 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    if(hero.left > window.innerWidth - hero.size){
        hero.moveLeft();
    }
    if(hero.top < window.innerHeight - hero.size){
        hero.moveDown();
    }
    if(hero.top > window.innerHeight - hero.size){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
