import React from 'react';
import ToyCard from './ToyCard';

function ToyContainer({ toys, deleteToy, updateLikes }) {
  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDelete={() => deleteToy(toy.id)}
          onLike={() => updateLikes(toy.id, toy.likes + 1)}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
