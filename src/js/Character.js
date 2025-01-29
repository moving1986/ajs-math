export default class Character {
    
    constructor(baseAttack) {
        this.baseAttack = baseAttack;
        this.stoned = false;
    }

    setStoned(value) {
        this.stoned = value;
    }

    getStoned() {
        return this.stoned;
    }
    
    calculateAttack(distance) {
        if (distance < 1) {
            throw new Error("Distance must be at least 1");
        }

        let attack = this.baseAttack;
        
        if (distance === 1) {
            attack *= 1.0;
        } else if (distance === 2) {
            attack *= 0.9;
        } else if (distance === 3) {
            attack *= 0.8;
        } else if (distance === 4) {
            attack *= 0.7;
        } else if (distance === 5) {
            attack *= 0.6;
        } else {
            attack *= 0.5; 
        }

        if (this.stoned) {
            attack -= Math.log2(distance) * 5;
        }

        return Math.max(attack, 0); 
    }
}