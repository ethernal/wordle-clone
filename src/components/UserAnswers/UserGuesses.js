import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function UserGuesses({ guesses }) {
	const rows = range(0, NUM_OF_GUESSES_ALLOWED, 1);

	return (
		<div className="guess-results">
			{rows?.map((row, index) => {
				return <Guess userGuess={guesses[index]} key={index} />;
			})}
		</div>
	);
}

export default UserGuesses;
