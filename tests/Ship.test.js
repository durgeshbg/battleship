/* eslint-disable no-undef */
import Ship from '../src/components/Ship';

describe('Ship:', () => {
  test('Object', () => {
    expect(new Ship(5)).toEqual({ length: 5, hits: 0 });
  });

  test('Hit function', () => {
    expect(new Ship(5).hit()).toBe(1);
  });

  test('isSunk function', () => {
    expect(new Ship(3).isSunk()).toBe(false);
  });
});
