// InputForm.tsx
import React, { useState } from 'react';

const InputForm = () => {
    const [formData, setFormData] = useState({
      fromDate: '',
      toDate: '',
      guests: '',
      withBalcony: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
      setFormData({ ...formData, [name]: newValue });
    };
  
    return (
      <form>
        <input
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="withBalcony"
            checked={formData.withBalcony}
            onChange={handleChange}
          />
          With Balcony
        </label>
      </form>
    );
  };

export default InputForm;
