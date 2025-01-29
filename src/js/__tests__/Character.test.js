import Character from "../Character";
import Magician from "../Magician";
import Daemon from "../Daemon";

describe('Character', () => {
    let magician, daemon;

    beforeEach(() => {
        magician = new Magician(100);
        daemon = new Daemon(100);
    });

    test('Magician attack at distance 1', () => {
        expect(magician.calculateAttack(1)).toBe(100);
    });

    test('Magician attack at distance 2', () => {
        expect(magician.calculateAttack(2)).toBe(90);
    });

    test('Magician attack at distance 3', () => {
        expect(magician.calculateAttack(3)).toBe(80);
    });

    test('Magician attack at distance 4', () => {
        expect(magician.calculateAttack(4)).toBe(70);
    });

    test('Magician attack at distance 5', () => {
        expect(magician.calculateAttack(5)).toBe(60);
    });

    test('Magician attack at distance 2 with stoned effect', () => {
        magician.setStoned(true);
        expect(magician.calculateAttack(2)).toBe(85);
    });

    test('Daemon attack at distance 2 with stoned effect', () => {
        daemon.setStoned(true);
        expect(daemon.calculateAttack(2)).toBe(85);
    });

    test('Attack should not be negative', () => {
        magician.setStoned(true);
        expect(magician.calculateAttack(10)).toBe(33.390359525563184);
    });

    test('Distance must be at least 1', () => {
        expect(() => magician.calculateAttack(0)).toThrow("Distance must be at least 1");
    });
});
