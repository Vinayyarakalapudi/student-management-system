import axios from 'axios';
const BASE_URL = `${import.meta.env.VITE_API_URL}/students`;
const BASE_URL = 'https://student-management-system-4-7rum.onrender.com/students'; // backend deployed URL

export const getStudents = () => axios.get(BASE_URL);
export const getStudentById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addStudent = (student) => axios.post(BASE_URL, student);
export const updateStudent = (id, student) => axios.put(`${BASE_URL}/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/${id}`);
