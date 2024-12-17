// write cool JS hwere!!

//superclass

class Tile {
    constructor (flippedClassName) {
        this.DomElement = document.createElement('section');
        this.flippedClassName = flippedClassName;

        this.DomElement.className = "tile";
        document.getElementById("app").appendChild(this.DomElement);

        this.DomElement.addEventListener('click', () => {
            this.callBack();
        })
    }



    callBack() {

        this.DomElement.classList.add(this.flippedClassName);
    }

}

//subclass
class GreenTile extends Tile {

    constructor () {
        super("green");
        this.value = 1;
    }

    callBack() {
        super.callBack();
        console.log('du fik ' + this.value + ' point');
        // this.DomElement.classList.add('destroyed');
    }

}

class BonusTile extends Tile {

    constructor () {
        super("yellow");
        this.value = 10
    }

    callBack() {
        super.callBack();
        console.log('du fik ' + this.value + ' point');

    }

}

class DestroyTile extends Tile {

    constructor () {
        super("red");
    }

    callBack() {
        //super.callBack();
        console.log('destroyed');
        // this.DomElement.classList.add('destroyed');
    }

}






let tileTwo = new GreenTile();
let bonusTile = new BonusTile();
let deathTile = new DestroyTile();


