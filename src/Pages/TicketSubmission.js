import React, { useState } from 'react';

function TicketSubmission() {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Send the formData to the server (not implemented here)
  };

  return (
    <div>
      <h2>Submit a Ticket</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default TicketSubmission;
