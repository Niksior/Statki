import {Board} from './board';
import {Settings} from './settings';

describe('Board', () => {
  it('should create an instance', () => {
    expect(new Board(new Settings())).toBeTruthy();
  });
});
