"use client"

import React, { useState } from 'react';
import WordleGrid from '../components/WordleGrid';
import WordleKeyboard from '../components/WordleKeyboard';

function Wordle () {
  const [word] = useState('REACT'); // The word to guess
  const [guesses, setGuesses] = useState<string[]>([]); // User guesses
  const [currentGuess, setCurrentGuess] = useState(''); // Active input

  const handleKeyPress = (key: string) => {
    if (key === 'ENTER' && currentGuess.length === word.length) {
      setGuesses([...guesses, currentGuess.toUpperCase()]);
      setCurrentGuess('');
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < word.length) {
      setCurrentGuess(currentGuess + key);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Wordle</h1>
      <WordleGrid word={word} guesses={guesses} />
      <WordleKeyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Wordle;