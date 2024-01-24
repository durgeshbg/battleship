/* eslint-disable no-undef */
import Player from '../src/components/Player';

describe('Player: ', () => {
  const human = new Player('Human', true);
  test('Object:', () => {
    expect(human.name).toEqual('Human');
    expect(human.turn).toBeTruthy();
    expect(typeof human.gameboard).toEqual('object');
  });

  test('Flip turn', () => {
    expect(human.flipTurn()).toBe(true);
    expect(human.flipTurn()).toBe(false);
  });

  test('Shoot when no ships', () => {
    expect(human.shoot(2, 3)).toBe(-1);
  });
});
