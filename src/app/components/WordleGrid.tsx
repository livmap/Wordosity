import React from 'react';

interface WordleGridProps {
  word: string;
  guesses: string[];
}

function WordleGrid ({ word, guesses } : WordleGridProps) {
  const rows = Array(6)
    .fill('')
    .map((_, i) => guesses[i] || '');

  const getCellClass = (letter: string, index: number) => {
    if (!letter) return 'bg-lightbackblue';
    if (letter === word[index]) return 'bg-green-500 text-white';
    if (word.includes(letter)) return 'bg-yellow-500 text-white';
    return 'bg-gray-500 text-white';
  };

  return (
    <div className="grid grid-rows-6 gap-2">
      {rows.map((guess, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {Array(5)
            .fill('')
            .map((_, colIndex) => (
              <div
                key={colIndex}
                className={`w-12 h-12 flex items-center justify-center  rounded-md text-xl font-bold ${getCellClass(
                  guess[colIndex] || '',
                  colIndex
                )}`}
              >
                {guess[colIndex] || ''}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default WordleGrid;