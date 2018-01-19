export const PRESS_RESET = 'PRESS_RESET';
export const pressReset = () => ({
	type: PRESS_RESET
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
	type: MAKE_GUESS,
	guess
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
	type: GENERATE_AURAL_UPDATE
});