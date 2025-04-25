import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddStudentForm.css';

const AddStudentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/students', formData);
      toast.success('Student added successfully');
      navigate('/students');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to add student');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Student ID</label>
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Department</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Enrollment Year</label>
          <input type="number" name="enrollmentYear" value={formData.enrollmentYear} onChange={handleChange} required />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} id="isActive" />
          <label htmlFor="isActive">Active</label>
        </div>
        <button type="submit" className="submit-btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
