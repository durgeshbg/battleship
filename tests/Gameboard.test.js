/* eslint-disable no-undef */
import Gameboard from '../src/components/Gameboard';

describe('Game Board: ', () => {
  const gameboard = new Gameboard();

  test('Object: Ships', () => {
    expect(gameboard.ships).toEqual([5, 4, 3, 3, 2, 2, 1]);
  });

  test('Place Ship Vertical: Valid Position', () => {
    expect(gameboard.placeShip(3, 5)).toEqual({ length: 5, hits: 0 });
  });
  test('Place Ship Horizontal: Valid Position', () => {
    expect(gameboard.placeShip(2, 3, 1)).toEqual({ length: 4, hits: 0 });
  });

  test('Place Ship Vertical: Already Occupied (check from before the ship)', () => {
    expect(gameboard.placeShip(5, 5)).toBe(false);
  });
  test('Place Ship Horizontal: Already Occupied (check from on the ship)', () => {
    expect(gameboard.placeShip(2, 5, 1)).toBe(false);
  });

  test('Place Ship Vertical : Out of the board', () => {
    expect(gameboard.placeShip(9, 9)).toBe(false);
  });
  test('Place Ship Horizontal: Out of the board', () => {
    expect(gameboard.placeShip(0, 9, 1)).toBe(false);
  });

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

  test('All sunk', () => {
    expect(gameboard.allSunk()).toBe(false);
    for (let i = 0; i < 5; i += 1) gameboard.recieveAttack(3 + i, 5);
    for (let i = 0; i < 4; i += 1) gameboard.recieveAttack(2, 3 + i);
    expect(gameboard.allSunk()).toBe(true);
  });
});
