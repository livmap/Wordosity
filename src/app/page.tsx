import Image from "next/image";

import Navbar from './components/Navbar';
import GameCard from './components/GameCard';

const Home = () => {
  const games = [
    {
      title: 'Wordle',
      description: 'Guess the word in six tries or less.',
      imageUrl: '/images/wordle.webp', // Add this image to your public/images folder
      url: 'wordle'
    },
    {
      title: 'Crossword',
      description: 'Fill the grid with the correct words.',
      imageUrl: '/images/crossword.jpg',
      url: 'crossword'
    },
    {
      title: 'Spelling Bee',
      description: 'Form words using the given letters.',
      imageUrl: '/images/spelling_bee.png',
      url: 'spellingbee'
    },
  ];

  return (
    <div className="bg-backblue min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-white text-center my-8">
          Lets get ready to word it up...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              url={game.url}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;