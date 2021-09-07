class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.flagmove = 'right'
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveLeft() {
        this.left -= 20
    }

    moveRight() {
        this.left += 20
    }

    moveTop() {
        this.top -= 20
    }

    moveDown() {
        this.top += 20
    }

    moveHero() {
        if (this.left >= window.innerWidth - this.size && this.top === 0) {
            this.flagmove = 'down'
        } else if (this.top >= window.innerHeight - this.size && this.left >= window.innerWidth - this.size) {
            this.flagmove = 'left'
        } else if (this.left === 0 && this.top >= window.innerHeight - this.size) {
            this.flagmove = 'top'
        } else if(this.left===0 && this.top===0) {
            this.flagmove = 'right'
        }
        switch (this.flagmove) {
            case "right":
                this.moveRight()
                break
            case "down":
                this.moveDown()
                break
            case "left":
                this.moveLeft()
                break
            case "top":
                this.moveTop()
                break
        }
        document.getElementById('game').innerHTML = this.getHeroElement()
    }


}

let hero = new Hero('https://ae01.alicdn.com/kf/HTB1pmY1MpXXXXawXpXXq6xXFXXXK/Doraemon-Nobita-Nobi-Cosplay-Costume-Anime-Custom-Made-Uniform.jpg', 0, 0, 200);
setInterval(function () {
    hero.moveHero()
}, 50)