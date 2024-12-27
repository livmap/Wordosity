"use client";

import '/Users/princemaphupha/Desktop/Games/wordgames/wordosity/src/app/styles/app.css';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import WordleGrid from '../components/WordleGrid';
import WordleKeyboard from '../components/WordleKeyboard';

function Wordle() {
  const [word] = useState('REACT'); // The word to guess
  const [guesses, setGuesses] = useState<string[]>([]); // User guesses
  const [currentGuess, setCurrentGuess] = useState(''); // Active input
  const [finalizedRows, setFinalizedRows] = useState(0); // Track finalized rows

  // Function to handle keyboard input
  const handleKeyPress = (key: string) => {
    if (key === 'ENTER' && currentGuess.length === word.length) {
      setGuesses([...guesses, currentGuess.toUpperCase()]);
      setCurrentGuess('');
      setFinalizedRows(finalizedRows + 1); // Increment finalized rows
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < word.length) {
      setCurrentGuess(currentGuess + key);
    }
  };

  // Listen for physical keyboard input
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

  // Update grid to show current guess
  const rows = [...guesses, currentGuess.padEnd(word.length, '')];

  return (
    <div className="min-h-screen bg-backblue flex flex-col items-center justify-between">
      <Navbar />
      <h1 className="text-4xl font-sans mb-8 text-babyblue">Wordle</h1>
      <WordleGrid word={word} guesses={rows} finalizedRows={finalizedRows} />
      <WordleKeyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default Wordle;