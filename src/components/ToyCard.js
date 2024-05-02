import React from 'react';

function ToyCard({ toy, onDelete, onLike }) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes</p>
      <button className="like-btn" onClick={onLike}>Like ❤️</button>
      <button className="del-btn" onClick={onDelete}>Donate to Goodwill 🚚</button>
    </div>
  );
}

export default ToyCard;
