import React, { useState } from 'react';

function AnswerInput({ addGuess, disabled = false }) {
	const [answer, setAnswer] = useState('');

	const handleAnswerChange = (answer) => {
		setAnswer(answer);
	};

	const handleAnswerSubmit = (event) => {
		event.preventDefault();
		addGuess(answer);
		setAnswer('');
	};

	return (
		<form className="guess-input-wrapper" onSubmit={handleAnswerSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={answer}
				disabled={disabled}
				onChange={(e) => handleAnswerChange(e.target.value)}
				minLength={5}
				maxLength={5}
				style={{ textTransform: 'uppercase' }}
			/>
		</form>
	);
}

export default AnswerInput;
