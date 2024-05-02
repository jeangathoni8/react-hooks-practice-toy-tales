import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ToyForm from './ToyForm';
import ToyContainer from './ToyContainer';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await axios.get('http://localhost:3001/toys');
      setToys(response.data);
    } catch (error) {
      console.error('Error fetching toys:', error);
    }
  };

  const addToy = async (toy) => {
    try {
      const response = await axios.post('http://localhost:3001/toys', toy);
      setToys([...toys, response.data]); // Assuming the server returns the newly added toy
    } catch (error) {
      console.error('Error adding toy:', error);
    }
  };

  const deleteToy = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/toys/${id}`);
      setToys(toys.filter(toy => toy.id !== id));
    } catch (error) {
      console.error('Error deleting toy:', error);
    }
  };

  const updateLikes = async (id, newLikes) => {
    try {
      const response = await axios.patch(`http://localhost:3001/toys/${id}`, { likes: newLikes });
      setToys(toys.map(toy => toy.id === id ? response.data : toy)); // Assuming the server returns the updated toy
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const toggleForm = () => setShowForm(prev => !prev);

  return (
    <>
      <Header />
      <div className="buttonContainer">
        <button onClick={toggleForm}>
          {showForm ? 'Cancel' : 'Add a Toy'}
        </button>
      </div>
      {showForm && <ToyForm addToy={addToy} />}
      <ToyContainer toys={toys} deleteToy={deleteToy} updateLikes={updateLikes} />
    </>
  );
}

export default App;
