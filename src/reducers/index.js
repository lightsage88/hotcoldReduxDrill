import {PRESS_RESET} from '../actions';

const initialState = {
auralStatus: '',
correctAnswer: Math.round(Math.random() * 100) + 1,
feedback: "Make your guess!",
guesses: []

};

export const gameReducer = (state=initialState, action) => {
	if(action.type === PRESS_RESET) {
		return Object.assign({}, state, state);
	}
return state;
};

