import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function UserGuesses({ guesses }) {
	const emptyRowsCount = NUM_OF_GUESSES_ALLOWED - guesses?.length;
	const rows = range(0, emptyRowsCount, 1);

	return (
		<div className="guess-results">
			{guesses?.map((userGuess, index) => {
				return <Guess userGuess={userGuess} row={index} key={userGuess?.id} />;
			})}
			{rows?.map((row, index) => {
				return (
					<Guess
						key={NUM_OF_GUESSES_ALLOWED - index}
						row={NUM_OF_GUESSES_ALLOWED - index}
						userGuess={undefined}
					/>
					// <p className="guess uppercase" key={row}>
					// 	{letters.map((letter) => {
					// 		return <span className="cell" key={`${row}-${letter}`}></span>;
					// 	})}
					// </p>
				);
			})}
		</div>
	);
}

export default UserGuesses;
