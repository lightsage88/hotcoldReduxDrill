import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {pressReset, makeGuess, generateAuralUpdate} from '../actions';

export class Game extends Component {
  restartGame() {
    this.props.dispatch(pressReset());
  }

  makeGuess(guess) {
    this.props.dispatch(makeGuess(guess));

  }

  generateAuralUpdate() {
    console.log('generateAuralUpdate running...');
    this.props.dispatch(generateAuralUpdate());
    // const { guesses, feedback } = this.state;

    // // If there's not exactly 1 guess, we want to
    // // pluralize the nouns in this aural update.
    // const pluralize = guesses.length !== 1;

    // let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    // if (guesses.length > 0) {
    //   auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    // }


    // this.setState({ auralStatus });
  }

  render() {
    console.log(this.props);
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={this.props.feedback}
            guessCount={this.props.guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={this.props.guesses} 
            auralStatus={this.props.auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

//possible conflict between defaultProps and state with
//correctAnswer?

// Game.defaultProps = {
//  auralStatus: '',
// correctAnswer: Math.round(Math.random() * 100) + 1,
// feedback: "Make your guess!",
// guesses: []
// };
// // auralStatus: '',
// // correctAnswer: Math.round(Math.random() * 100) + 1,
// // feedback: "Make your guess!",
// // guesses: []



export const mapStateToProps = state => ({
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer,
  feedback: state.feedback,
  guesses: state.guesses
});

export default connect(mapStateToProps)(Game);
