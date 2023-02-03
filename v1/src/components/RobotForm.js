import React, { useState } from 'react';

const RobotForm = ({onAdd}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [mass, setMass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({name,type,mass});
    setName('');
    setType('');
    setMass('');
  };

  return (
    <form aria-label="Robot form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="type">Type:</label>
      <input
        type="text"
        id="type"
        value={type}
        onChange={(event) => setType(event.target.value)}
      />

      <label htmlFor="mass">Mass:</label>
      <input
        type="text"
        id="mass"
        value={mass}
        onChange={(event) => setMass(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default RobotForm;
