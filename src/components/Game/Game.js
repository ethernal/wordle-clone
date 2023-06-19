import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import AnswerInput from '../AnswerInput/AnswerInput';
import UserGuesses from '../UserAnswers/UserGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info('correct word: ', { answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [guessAttempt, setGuessAttempt] = useState(0);
	const [gameStatus, setGameStatus] = useState('inProgress');

	const checkGuess = (guess, answer) => {
		const guessLetters = [...guess].map((letter) => letter.toUpperCase());
		const answerLetters = [...answer].map((letter) => letter.toUpperCase());

		const letters = guessLetters.map((guessLetter, index) => {
			let letterStatus = 'incorrect';
			const letterFound =
				answerLetters.find((element) => element === guessLetter) ?? false;

			if (letterFound) {
				letterStatus = 'misplaced';
			}

			const letterInCorrectSlot = guessLetter === answerLetters[index];

			if (letterInCorrectSlot) {
				letterStatus = 'correct';
			}

			if (guess.toUpperCase() === answer.toUpperCase()) {
				setGameStatus('won');
			}

			return {
				id: crypto.randomUUID(),
				letter: guessLetter,
				status: letterStatus,
			};
		});
		return letters;
	};

	const addGuess = (guess) => {
		const nextGuessAttempt = guessAttempt + 1;
		setGuessAttempt(nextGuessAttempt);

		if (nextGuessAttempt === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}

		const newGuesses = [
			...guesses,
			{
				label: guess,
				id: crypto.randomUUID(),
				letters: checkGuess(guess, answer),
			},
		];
		setGuesses(newGuesses);
	};

	return (
		<>
			<UserGuesses guesses={guesses} />

			{gameStatus === 'won' ? (
				<div class="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in
						<strong>
							{' '}
							{guessAttempt} {guessAttempt > 1 ? `guesses` : `guess`}
						</strong>
						.
					</p>
				</div>
			) : null}

			{gameStatus === 'lost' ? (
				<div class="sad banner">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</div>
			) : null}

			{guessAttempt < NUM_OF_GUESSES_ALLOWED && gameStatus === 'inProgress' ? (
				<AnswerInput
					addGuess={addGuess}
					disabled={gameStatus !== 'inProgress'}
				/>
			) : (
				<button onClick={() => window.location.reload()}>Reset Game</button>
			)}
			<p>Remaining guesess: {NUM_OF_GUESSES_ALLOWED - (guessAttempt ?? 0)}.</p>
			<p>When maxed input will be removed.</p>
		</>
	);
}

export default Game;
