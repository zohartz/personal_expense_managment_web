import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExpenseListContainer from './ExpenseListContainer';
import { Expense, Nav } from '../components';
import API from '../api/expense_mng_api';


const ExpenseContainer = (props) => {
  const [expenses, setExpenses] = useState();
  const [showNewExpense, setShowNewExpense] = useState(false);
  const [error, setError] = useState();

  const getExpenses = async () => {
    try {
      const userid = 1; // TODO use session storage insted
      const expenseRes = await API.getExpensess(userid);
      setExpenses(expenseRes.data.data);
    } catch (e) {
      setError('Failed to fetch Expenses');
    }
  };
  const fetchData = async () => {
    try {
      const userid = 1; // TODO use session storage insted
      const expenseRes = await API.getExpensess(userid);
      setExpenses(expenseRes.data.data);
    } catch (e) {
      setError('Failed to fetch Expenses');
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // will happen only on the first render

  const handleDeleteExpense = async(userId,expenseId) =>{
      try{
        await API.removeExpense(userId,expenseId)
        await getExpenses()
      }catch(e){
        setError('Failed to fetch Expenses');
      }
  }
  const handleUpdateExpense= async(userId,expenseId) =>{
    try{
      await API.removeExpense(userId,expenseId)
      await getExpenses()
    }catch(e){
      setError('Failed to fetch Expenses');
    }
}

const handleExpenseClose = () =>{
    setShowNewExpense(false)
}

  return (
    <div>
      <Nav/>
      <i className="fa fa-plus-circle fa-2x blue-icon" onClick={() => setShowNewExpense(true)}></i>

      {showNewExpense && (
        <Expense
              getExpenses={getExpenses}
              closeExpense={() => setShowNewExpense(false)}
            />
      )}
      {expenses && <ExpenseListContainer expenses={expenses} onDelete={handleDeleteExpense} getExpenses={getExpenses} onClose={handleExpenseClose} />}
      {error && <span>{error}</span>}
    </div>
  );
};

ExpenseContainer.defaultProps = {};

ExpenseContainer.propTypes = {};

export default ExpenseContainer;
