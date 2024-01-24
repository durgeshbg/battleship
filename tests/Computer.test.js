/* eslint-disable no-undef */
import Computer from '../src/components/Computer';

describe('Computer: ', () => {
  const computer = new Computer('computer');

  test('Equality of cordinates', () => {
    expect(computer.isEqual([1, 2], [2, 1])).toBe(false);
    expect(computer.isEqual([1, 2], [1, 2])).toBe(true);
  });

  test('Cordinate generator', () => {
    for (let i = 0; i < 100; i += 1) computer.generateCords();
    expect(computer.cords.length).toBe(100);
    expect(computer.generateCords()).toBe(false);
  });

  test('Shoot when all blocks are full', () => {
    expect(computer.shoot()).toBe(-1);
  });

  test('Shoot when no ships', () => {
    computer.cords.pop();
    expect(computer.shoot()).toBe(-1);
  });
});
