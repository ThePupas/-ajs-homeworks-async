import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const resultRead = await read();
    const resultJson = await json(resultRead);
    return new GameSaving(resultJson);
  }
}
