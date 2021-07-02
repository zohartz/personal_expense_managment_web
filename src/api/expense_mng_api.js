// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:5001",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

import http from './http';

const createUser = (data) => {
  return http.post('/api/v1/users', data);
};

const login = (data) => {
  return http.post('/api/v1/users/login', data);
};

const DeleteUser = (data) => {
  return http.post('/api/v1/users', data);
};

const getExpensess = (userId) => {
  return http.get(`/api/v1/${userId}/expenses`);
};

const addExpense = (userId, data) => {
  return http.post(`/api/v1/${userId}/expenses`, data);
};
const updateExpense = (userId, data) => {
  return http.put(`/api/v1/${userId}/expenses`, data);
};

const removeExpense = (userId, expenseId) => {
  return http.delete(`/api/v1/${userId}/expenses/${expenseId}`);
};

const getIncomes = (userId) => {
  return http.get(`/api/v1/${userId}/incomes`);
};

const addIncome = (userId, data) => {
  return http.post(`/api/v1/${userId}/incomes`, data);
};
const updateIncome = (userId, data) => {
  return http.put(`/api/v1/${userId}/incomes`, data);
};

const removeIncome = (userId, incomeId) => {
  return http.delete(`/api/v1/${userId}/incomes/${incomeId}`);
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  createUser,
  removeExpense,
  findByTitle,
  login,
  getExpensess,
  addExpense,
  updateExpense,
  getIncomes,
  addIncome,
  updateIncome,
  removeIncome,
};
