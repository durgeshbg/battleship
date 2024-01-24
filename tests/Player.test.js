/* eslint-disable no-undef */
import Player from '../src/components/Player';

describe('Player: ', () => {
  const human = new Player('Human', true);
  test('Object:', () => {
    expect(human.name).toEqual('Human');
    expect(human.turn).toBeTruthy();
    expect(typeof human.gameboard).toEqual('object');
  });
});
