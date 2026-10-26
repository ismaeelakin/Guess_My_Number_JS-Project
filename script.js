import { newRound, makeGuess } from './game.mjs';

const form = document.querySelector('form');
const input = document.querySelector('#guess');
let round = newRound();
let best = 0;

function render(message = 'Choose a number to begin.') {
  document.querySelector('#message').textContent = message;
  document.querySelector('#score').textContent = round.score;
  document.querySelector('#best').textContent = best;
  document.querySelector('#number').textContent = round.status === 'playing' ? '?' : round.secret;
  document.querySelector('#history').textContent = round.guesses.length ? round.guesses.join(', ') : 'No guesses yet';
  input.disabled = round.status !== 'playing';
  form.querySelector('button').disabled = input.disabled;
  document.body.dataset.state = round.status;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  round = makeGuess(round, input.value);
  if (round.status === 'won') best = Math.max(best, round.score);
  render(round.message);
  input.select();
});
document.querySelector('#again').addEventListener('click', () => {
  round = newRound();
  input.value = '';
  render();
  input.focus();
});
render();
