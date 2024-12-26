import React from 'react';

interface WordleKeyboardProps {
  onKeyPress: (key: string) => void;
}

const keys = [
  'QWERTYUIOP',
  'ASDFGHJKL',
  'ZXCVBNM',
];

function WordleKeyboard ({ onKeyPress } : WordleKeyboardProps) {
  return (
    <div className="mt-8">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-1 mb-2">
          {row.split('').map((key) => (
            <button
              key={key}
              className="bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center space-x-1">
        <button
          className="bg-gray-300 text-gray-900 font-bold py-2 px-6 rounded"
          onClick={() => onKeyPress('ENTER')}
        >
          ENTER
        </button>
        <button
          className="bg-gray-300 text-gray-900 font-bold py-2 px-6 rounded"
          onClick={() => onKeyPress('BACKSPACE')}
        >
          BACKSPACE
        </button>
      </div>
    </div>
  );
};

export default WordleKeyboard;