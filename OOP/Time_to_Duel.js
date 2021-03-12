class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        //reduces res by power
        target.resilience -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
            if(this.magnitude < 0 ){
                this.text = `Reduce target's ${this.stat} by ${Math.abs(this.magnitude)}`;
            }else{
                this.text = `Increase target's ${this.stat} by ${Math.abs(this.magnitude)}`;
            }
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            target[this.stat] += this.magnitude;
            console.log(this.text)
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const HardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", +3);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const PairProgramming = new Effect("PairProgramming", 3, "power", +2);

HardAlgorithm.play(RedBeltNinja);
UnhandledPromiseRejection.play(RedBeltNinja)
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);

console.log(`Name: ${RedBeltNinja.name}, Cost: ${RedBeltNinja.cost}, Power: ${RedBeltNinja.power}, Resilience: ${RedBeltNinja.resilience}`);
console.log(`Name: ${BlackBeltNinja.name}, Cost: ${BlackBeltNinja.cost}, Power: ${BlackBeltNinja.power}, Resilience: ${BlackBeltNinja.resilience}`);