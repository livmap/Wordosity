import React from 'react';

interface WordleKeyboardProps {
  onKeyPress: (key: string) => void;
  letterStates: { [key: string]: 'green' | 'yellow' | 'gray' | undefined }; // Optional state for each letter
}

const keys = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

function WordleKeyboard({ onKeyPress, letterStates }: WordleKeyboardProps) {
  const getKeyClass = (key: string) => {
    if (letterStates[key] === 'green') return 'bg-green-500 text-white';
    if (letterStates[key] === 'yellow') return 'bg-yellow-500 text-white';
    if (letterStates[key] === 'gray') return 'bg-gray-500 text-white';
    return 'bg-lightbackblue text-white'; // Default style
  };

  return (
    <div className="mt-8 mb-6">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-1 mb-2">
          {row.split('').map((key) => (
            <button
              key={key}
              className={`font-bold py-2 px-4 rounded ${getKeyClass(key)}`}
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center space-x-1">
        <button
          className="bg-lightbackblue text-white font-bold py-2 px-6 rounded"
          onClick={() => onKeyPress('ENTER')}
        >
          ENTER
        </button>
        <button
          className="bg-lightbackblue text-white font-bold py-2 px-6 rounded"
          onClick={() => onKeyPress('BACKSPACE')}
        >
          BACKSPACE
        </button>
      </div>
    </div>
  );
}

export default WordleKeyboard;