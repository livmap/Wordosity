"use client";

import '/Users/princemaphupha/Desktop/Games/wordgames/wordosity/src/app/styles/app.css';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import WordleGrid from '../components/WordleGrid';
import WordleKeyboard from '../components/WordleKeyboard';

type LetterState = 'green' | 'yellow' | 'gray';

function Wordle() {
  const [word] = useState('REACT'); // The word to guess
  const [guesses, setGuesses] = useState<string[]>([]); // User guesses
  const [currentGuess, setCurrentGuess] = useState(''); // Active input
  const [finalizedRows, setFinalizedRows] = useState(0); // Track finalized rows
  const [letterStates, setLetterStates] = useState<{ [key: string]: LetterState }>({}); // Letter statuses

  const updateLetterStates = (guess: string) => {
    const wordArray = word.split('');
    const guessArray = guess.split('');
    const tempLetterStates = { ...letterStates }; // Clone current state

    const remainingLetters = [...wordArray]; // To track remaining letters for yellow checks

    // Step 1: Mark correct positions (green)
    guessArray.forEach((letter, index) => {
      if (letter === wordArray[index]) {
        tempLetterStates[letter] = 'green';
        remainingLetters[index] = ''; // Remove matched letter from tracking
      }
    });

    // Step 2: Mark out-of-place letters (yellow)
    guessArray.forEach((letter, index) => {
      if (
        tempLetterStates[letter] !== 'green' && // Not already green
        remainingLetters.includes(letter)
      ) {
        tempLetterStates[letter] = 'yellow';
        remainingLetters[remainingLetters.indexOf(letter)] = ''; // Remove matched letter
      } else if (tempLetterStates[letter] !== 'green') {
        // Only mark gray if not already green or yellow
        tempLetterStates[letter] = 'gray';
      }
    });

    setLetterStates(tempLetterStates); // Update state
  };

  const handleKeyPress = (key: string) => {
    if (key === 'ENTER' && currentGuess.length === word.length) {
      setGuesses([...guesses, currentGuess.toUpperCase()]);
      updateLetterStates(currentGuess.toUpperCase());
      setCurrentGuess('');
      setFinalizedRows(finalizedRows + 1); // Increment finalized rows
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < word.length) {
      setCurrentGuess(currentGuess + key);
    }
  };

  useEffect(() => {
    const handlePhysicalKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (key === 'ENTER') {
        handleKeyPress('ENTER');
      } else if (key === 'BACKSPACE') {
        handleKeyPress('BACKSPACE');
      } else if (/^[A-Z]$/.test(key)) {
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handlePhysicalKeyPress);
    return () => window.removeEventListener('keydown', handlePhysicalKeyPress);
  }, [currentGuess, guesses, finalizedRows, word]);

  const rows = [...guesses, currentGuess.padEnd(word.length, '')];

  return (
    <div className="min-h-screen bg-backblue flex flex-col items-center justify-between">
      <Navbar />
      
      <WordleGrid word={word} guesses={rows} finalizedRows={finalizedRows} />
      <WordleKeyboard onKeyPress={handleKeyPress} letterStates={letterStates} />
    </div>
  );
}

export default Wordle;