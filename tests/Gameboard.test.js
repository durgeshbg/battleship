/* eslint-disable no-undef */
import Gameboard from '../src/components/Gameboard';

describe('Game Board: ', () => {
  const gameboard = new Gameboard('Human');

  // Object
  test('Object: Name', () => {
    expect(gameboard.name).toBe('Human');
  });
  test('Object: Ships', () => {
    expect(gameboard.ships).toEqual([5, 4, 3, 3, 2, 2, 1]);
  });
  // Place Ship
  test('Place Ship: Valid Position', () => {
    expect(gameboard.placeShip(3, 5)).toEqual({ length: 5, hits: 0 });
  });
  test('Place Ship: Already Occupied', () => {
    expect(gameboard.placeShip(8, 5)).toBe(false);
  });
  test('Place Ship: Out of the board', () => {
    expect(gameboard.placeShip(9, 9)).toBe(false);
  });
  // Recieve Attack
  test('Recieve Attack: Hit', () => {
    expect(gameboard.recieveAttack(4, 5)).toBe(1);
  });
  test('Recieve Attack: Previously attacked hit', () => {
    expect(gameboard.recieveAttack(4, 5)).toBe(0);
  });
  test('Recieve Attack: Miss', () => {
    expect(gameboard.recieveAttack(3, 4)).toBe(-1);
  });
  test('Recieve Attack: Previously attacked miss', () => {
    expect(gameboard.recieveAttack(3, 4)).toBe(0);
  });
  // All Sunk
  test('All sunk', () => {
    expect(gameboard.allSunk()).toBe(false);
    for (let i = 0; i < 5; i += 1) gameboard.recieveAttack(3 + i, 5);
    expect(gameboard.allSunk()).toBe(true);
  });
});
