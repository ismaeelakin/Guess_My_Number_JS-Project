export function newRound(random = Math.random) {
  return { secret: Math.floor(random() * 20) + 1, score: 10, status: 'playing', guesses: [] };
}

export function makeGuess(round, input) {
  if (round.status !== 'playing') return { ...round, message: 'Start a new round to play again.' };
  const value = Number(input);
  if (String(input).trim() === '' || !Number.isInteger(value) || value < 1 || value > 20) {
    return { ...round, message: 'Enter a whole number from 1 to 20.' };
  }
  if (round.guesses.includes(value)) return { ...round, message: 'You already tried that number. Pick another.' };
  const guesses = [...round.guesses, value];
  if (value === round.secret) return { ...round, guesses, status: 'won', message: 'That is the number.' };
  const score = round.score - 1;
  return { ...round, guesses, score, status: score === 0 ? 'lost' : 'playing',
    message: score === 0 ? 'Round over. The number is shown below.' : value > round.secret ? 'Too high. Try a smaller number.' : 'Too low. Try a larger number.' };
}

