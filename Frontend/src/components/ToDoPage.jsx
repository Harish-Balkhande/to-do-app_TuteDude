import React, { useState } from 'react';
import axios from 'axios';

const TodoPage = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/submittodoitem', {
        itemName,
        itemDescription
      });
      alert('To-Do item submitted!');
    } catch (error) {
      console.error('Error submitting item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Item ID:</label>
      <input
        type="text"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        required
      />
      <label>Item UUID:</label>
      <input
        type="text"
        value={itemUuid}
        onChange={(e) => setItemUuid(e.target.value)}
        required
      />
      <label>Item Name:</label>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <br />
      <label>Item Description:</label>
      <textarea
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoPage;
