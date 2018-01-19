import {PRESS_RESET, MAKE_GUESS} from '../actions';

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
	else if(action.type === MAKE_GUESS) {
		//determine if guess is a number
			//if it is NaN then make feedback = 'Please enter a
			//valid number'
		action.guess = parseInt(action.guess, 10);
		if(isNaN(action.guess)){
			return Object.assign({},state, {
				feedback: "Please enter a valid number"
			});
		} else {
			const difference = Math.abs(action.guess - state.correctAnswer);
			let feedbackMessage;
			if (difference >= 50) {
		      feedbackMessage = 'You\'re Ice Cold...';
		    } else if (difference >= 30) {
		      feedbackMessage = 'You\'re Cold...';
		    } else if (difference >= 10) {
		      feedbackMessage = 'You\'re Warm.';
		    } else if (difference >= 1) {
		      feedbackMessage = 'You\'re Hot!';
		    } else {
		      feedbackMessage = 'You got it!';
		   }

		   return Object.assign({}, state, {
		   	feedback: feedbackMessage,
		   	guesses: [...state.guesses, action.guess]
		   });


		}

	}
return state;
};

