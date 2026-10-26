# Guess My Number

A browser-based JavaScript learning project: guess a hidden number from 1 to 20, follow the high/low hints, and try to finish with the best score.

## Run locally

1. Clone or download this repository.
2. Open `final/index.html` in a modern browser.
3. Enter a number and click **Check!**. Use **Again!** to start another round.

The game uses plain HTML, CSS and JavaScript. No package installation or build step is required.

## Repository layout

- `final/index.html` — game page.
- `final/style.css` — visual styling.
- `final/script.js` — random number generation, DOM events, hints, score and reset logic.
- `starter/` — companion starter files for the learning exercise.

## Current behavior

- Each round chooses an integer between 1 and 20 and starts with a score of 20.
- Incorrect guesses reduce the displayed score and produce a high/low hint.
- A correct guess reveals the number and updates the high score.
- **Again!** resets the round while retaining the high score for the current page session. Reloading the page clears it.

## Learning focus

DOM selection and updates, click event handlers, number conversion, conditional branches, random integers, and extracting repeated message updates into a function. The source retains commented learning steps and the reset challenge.

## Known limitations

The current implementation does not fully validate that a guess is an integer from 1 to 20, and it does not lock the round after a win or loss. High scores are stored in memory only. These are useful follow-up improvements; this repository is a learning exercise rather than a production game.

## Manual checks

After changing the game, check empty input, high and low guesses, a correct guess, score exhaustion, and **Again!**. Confirm that reset restores the message, score, hidden number, input and background, while preserving the session high score.
