import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ userGuess = '' }) {
	const letters = userGuess?.letters;

	return (
		<div className="guess-row">
			<p className="guess">
				{range(5).map((letterSlot) => {
					return (
						<span
							className={`cell ${
								userGuess?.letters
									? userGuess.letters?.[letterSlot]?.status
									: ''
							}`}
							key={`letter-${letterSlot}-${userGuess[letterSlot]}`}
						>
							{userGuess?.letters
								? userGuess.letters?.[letterSlot].letter
								: undefined}
						</span>
					);
				})}
			</p>
		</div>
	);
}

export default Guess;
