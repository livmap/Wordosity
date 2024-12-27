import React from 'react';

interface WordleGridProps {
  word: string;
  guesses: string[];
  finalizedRows: number; // Number of guesses that are finalized
}

function WordleGrid({ word, guesses, finalizedRows }: WordleGridProps) {
  const wordArray = word.split('');

  const getProcessedRow = (guess: string) => {
    const guessArray = guess.split('');
    const colors = Array(guessArray.length).fill('bg-gray-500 text-white');
    const remainingLetters = [...wordArray]; // To track remaining letters for yellow checks

    // Step 1: Mark correct positions (green)
    guessArray.forEach((letter, index) => {
      if (letter === wordArray[index]) {
        colors[index] = 'bg-green-500 text-white';
        remainingLetters[index] = ''; // Remove matched letter from tracking
      }
    });

    // Step 2: Mark out-of-place letters (yellow)
    guessArray.forEach((letter, index) => {
      if (colors[index] === 'bg-gray-500 text-white' && remainingLetters.includes(letter)) {
        colors[index] = 'bg-yellow-500 text-white';
        remainingLetters[remainingLetters.indexOf(letter)] = ''; // Remove matched letter
      }
    });

    return colors;
  };

  const rows = Array(6).fill('').map((_, i) => guesses[i] || '');

  return (
    <div className="grid grid-rows-6 gap-2">
      {rows.map((guess, rowIndex) => {
        const isFinalized = rowIndex < finalizedRows; // Check if row is finalized
        const colors = isFinalized ? getProcessedRow(guess) : [];

        return (
          <div key={rowIndex} className="grid grid-cols-5 gap-2">
            {Array(5)
              .fill('')
              .map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-12 h-12 flex items-center justify-center rounded-md text-xl font-bold ${
                    colors[colIndex] || 'bg-lightbackblue'
                  }`}
                >
                  {guess[colIndex] || ''}
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default WordleGrid;