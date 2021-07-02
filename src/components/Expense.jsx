import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import API from '../api/expense_mng_api';

const Expense = (props) => {
  const {
    closeExpense,
    getExpenses,
    ExpenseType,
    expenseId,
    name,
    amount,
    description,
    category,
    date,
  } = props;
  const [expenseDetails, setexpenseDetails] = useState({
    expenseId,
    name,
    amount,
    description,
    category,
    date,
  });

  const handleChange = (event) => {
    const newExpense = {
      ...expenseDetails,
      [event.target.name]: event.target.value,
    };
    setexpenseDetails(newExpense);
  };

  const isValidExpense = () => {
    return (
      expenseDetails.name &&
      expenseDetails.description &&
      expenseDetails.amount &&
      expenseDetails.category &&
      expenseDetails.date
    );
  };

  const handleClick = async () => {
    const userId = 1; // store in session
    if (isValidExpense()) {
      try {
        let data = {
          title: expenseDetails.name,
          amount: parseInt(expenseDetails.amount),
          description: expenseDetails.description,
          category: expenseDetails.category,
          date: expenseDetails.date,
        };
        if (ExpenseType === 'new') {
          await API.addExpense(userId, data);
        } else {
          data['id'] = expenseId;
          await API.updateExpense(userId, data);
        }
        closeExpense();
        getExpenses();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className={ExpenseType == 'new' ? 'typeNew' : undefined}>
    {ExpenseType=='new' &&<i className="fa fa-times icon-color fa-lg" onClick={closeExpense}></i>}
    <Form
      type={ExpenseType}
      nameTitle='Name'
      amountTitle='Amount'
      descriptionTitle='Description'
      categoryTitle='Category'
      dateTitle='Date'
      handleChange={handleChange}
      handleClick={handleClick}
      itemDetails={expenseDetails}
      handleClose={closeExpense}
    />
   </div>
  );
};

Expense.defaultProps = {
  ExpenseType: 'new',
  expenseId: null,
  name: '',
  amount: '',
  description: '',
  category: '',
  date: '',
  closeExpense() {},
  getExpenses() {},
};

Expense.propTypes = {
  ExpenseType: PropTypes.string,
  expenseId: PropTypes.number,
  name: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  closeExpense: PropTypes.func,
  getExpenses: PropTypes.func,
};

export default Expense;
