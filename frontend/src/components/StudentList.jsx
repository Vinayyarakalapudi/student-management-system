import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('https://student-management-system-4-7rum.onrender.com/students');
      setStudents(res.data);
    } catch (error) {
      toast.error('Failed to fetch students');
      // In case of error, ensure at least empty list is shown
      setStudents([]);
    }
  };

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this student?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteStudent(id),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`https://student-management-system-4-7rum.onrender.com/students/${id}`);
      toast.success('Student deleted successfully');
      fetchStudents();
    } catch (error) {
      toast.error('Error deleting student');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="table-wrapper">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Dept.</th>
            <th>Enroll Year</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No students available</td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s._id}>
                <td>{s.studentId}</td>
                <td>{s.firstName} {s.lastName}</td>
                <td>{s.email}</td>
                <td>{new Date(s.dob).toLocaleDateString()}</td>
                <td>{s.department}</td>
                <td>{s.enrollmentYear}</td>
                <td>{s.isActive ? 'Active✅' : 'Inactive❌'}</td>
                <td>
                <Link to={`/edit-student/${s._id}`}>Edit</Link>

                  <button onClick={() => handleDelete(s._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
