import test from 'node:test';
import assert from 'node:assert/strict';
import { newRound, makeGuess } from '../final/game.mjs';
test('secret bounds include both endpoints', () => {
  assert.equal(newRound(() => 0).secret, 1);
  assert.equal(newRound(() => 0.999999).secret, 20);
});
test('invalid and repeated guesses cost no points', () => {
  let round = newRound(() => 0.5);
  for (const value of ['', ' ', '1.2', '0', '21', 'bad']) assert.equal(makeGuess(round, value).score, 10);
  round = makeGuess(round, '5');
  assert.equal(round.score, 9);
  assert.equal(makeGuess(round, '5').score, 9);
});
test('winning locks the round and preserves its score', () => {
  const won = makeGuess(newRound(() => 0), '1');
  assert.equal(won.status, 'won');
  assert.equal(makeGuess(won, '2').score, 10);
  assert.deepEqual(makeGuess(won, '2').guesses, [1]);
});
test('exhaustion locks the round at zero', () => {
  const round = { ...newRound(() => 0), score: 1 };
  const lost = makeGuess(round, '2');
  assert.equal(lost.status, 'lost');
  assert.equal(makeGuess(lost, '1').score, 0);
});
test('new rounds have independent guess history', () => {
  const first = newRound();
  const next = makeGuess(first, '2');
  assert.deepEqual(first.guesses, []);
  assert.equal(next.guesses.length, 1);
});

