import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditStudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`https://student-management-system-4-7rum.onrender.com/students/${id}`);
        setFormData(res.data);
      } catch (error) {
        toast.error('Failed to load student data');
      }
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://student-management-system-4-7rum.onrender.com/students/${id}`, formData);
      toast.success('Student updated successfully');
      navigate('/students');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Update failed');
    }
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob ? formData.dob.split('T')[0] : ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={formData.department || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Enrollment Year</label>
          <input
            type="number"
            name="enrollmentYear"
            value={formData.enrollmentYear || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive || false}
            onChange={handleChange}
            id="isActive"
          />
          <label htmlFor="isActive">Active</label>
        </div>
        <button type="submit" className="submit-btn">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudentForm;
