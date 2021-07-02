import axios from 'axios';

class Api {
  constructor() {
    //this.userId = null;
    this._userId = null;
    this.api = axios.create({
      baseURL: 'http://localhost:5001',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
  set userId(val) {
    console.log('setting userId ');
    this._userId = val;
    console.log(this._userId);
  }

  createUser = (data) => {
    return this.api.post('/api/v1/users', data);
  };

  login = (data) => {
    return this.api.post('/api/v1/users/login', data);
  };

  DeleteUser = (data) => {
    return this.api.post('/api/v1/users', data);
  };

    // getExpensess = (userId) => {
    //   return this.api.get(`/api/v1/${userId}/expenses`);
    // };
  getExpensess = () => {
    return this.api.get(`/api/v1/${this.userId}/expenses`);
  };

  addExpense = (userId, data) => {
    return this.api.post(`/api/v1/${userId}/expenses`, data);
  };
  updateExpense = (userId, data) => {
    return this.api.put(`/api/v1/${userId}/expenses`, data);
  };

  removeExpense = (userId, expenseId) => {
    return this.api.delete(`/api/v1/${userId}/expenses/${expenseId}`);
  };

  //   getIncomes = (userId) => {
  //     return this.api.get(`/api/v1/${userId}/incomes`);
  //   };
  getIncomes = () => {
    return this.api.get(`/api/v1/${this.userId}/incomes`);
  };

  addIncome = (userId, data) => {
    return this.api.post(`/api/v1/${userId}/incomes`, data);
  };
  updateIncome = (userId, data) => {
    return this.api.put(`/api/v1/${userId}/incomes`, data);
  };

  removeIncome = (userId, incomeId) => {
    return this.api.delete(`/api/v1/${userId}/incomes/${incomeId}`);
  };
}

export default Api;
