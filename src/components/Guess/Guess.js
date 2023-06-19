import React from 'react';
import { range } from '../../utils';

function Guess({ userGuess = undefined, row }) {
	const letters = userGuess?.letters ?? range(0, 5, 1);

	if (!!userGuess === false) {
		return (
			<div className="guess-row" key={`emptyRow-${row}`}>
				<p className="guess uppercase">
					{letters.map((_, index) => {
						return (
							<span className="cell" key={`emptyLetter-${row}-${index}`}></span>
						);
					})}
				</p>
			</div>
		);
	} else {
		return (
			<div className="guess-row" key={userGuess?.id ?? `row-${row}`}>
				<p className="guess uppercase">
					{letters?.map((letterObject) => {
						return (
							<span
								className={`cell ${letterObject.status}`}
								key={`${letterObject?.id ?? crypto.randomUUID()}`}
							>
								{letterObject.letter}
							</span>
						);
					})}
				</p>
			</div>
		);
	}
}

export default Guess;
