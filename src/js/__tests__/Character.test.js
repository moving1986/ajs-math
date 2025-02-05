import Character from '../Character';
import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Character class', () => {
    let character;

    beforeEach(() => {
        character = new Character('Hero');
    });

    test('should create a character with given name', () => {
        expect(character.name).toBe('Hero');
        expect(character.attackPower).toBe(100);
        expect(character.distance).toBe(1);
        expect(character.stoned).toBe(false);
    });

    test('should calculate attack correctly without stoned', () => {
        character.distance = 1;
        expect(character.attack).toBe(100);

        character.distance = 2;
        expect(character.attack).toBe(90); 

        character.distance = 3;
        expect(character.attack).toBe(80); 

        character.distance = 4;
        expect(character.attack).toBe(70);

        character.distance = 5;
        expect(character.attack).toBe(60); 

        character.distance = 6;
        expect(character.attack).toBe(50); 
    });

    test('should set and get stoned', () => {
        character.stoned = true;
        expect(character.stoned).toBe(true);
        character.stoned = false;
        expect(character.stoned).toBe(false);
    });

    test('should set and get distance', () => {
        character.distance = 3;
        expect(character.distance).toBe(3);
    });

    test('should set attack power', () => {
        character.attack = 150;
        expect(character.attackPower).toBe(150);
    });
});

describe('Magician class', () => {
    let magician;

    beforeEach(() => {
        magician = new Magician('Gandalf');
    });

    test('should create a magician with given name', () => {
        expect(magician.name).toBe('Gandalf');
    });
});

describe('Daemon class', () => {
    let daemon;

    beforeEach(() => {
        daemon = new Daemon('Balrog');
    });

    test('should create a daemon with given name', () => {
        expect(daemon.name).toBe('Balrog');
    });
});
