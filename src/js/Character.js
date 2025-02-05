export default class пше {
    constructor(name) {
        this.name = name;
        this.stoned = false;
        this.attackPower = 100; 
        this.distance = 1; 
      }
    
 
      get attack() {
        let attack = this.attackPower * (1 - (this.distance - 1) * 0.1);
        if (this.stoned) {
          attack -= Math.log2(this.distance) * 5;
        }
        return Math.max(attack, 0); 
      }
    

      set attack(value) {
        this.attackPower = value;
      }
    

      get stoned() {
        return this._stoned;
      }
    

      set stoned(value) {
        this._stoned = value;
      }
    

      set distance(value) {
        this._distance = value;
      }
    
     
      get distance() {
        return this._distance;
      }
    }
    
    class Magician extends Character {
      constructor(name) {
        super(name);
      }
    }
    
    class Daemon extends Character {
      constructor(name) {
        super(name);
      }
}

