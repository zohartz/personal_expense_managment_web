import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IncomesListContainer from './IncomeListContainer';
import { Income, Nav} from '../components';
import API from '../api/expense_mng_api';


const IncomesContainer = (props) => {
  const [incomes, setIncomes] = useState();
  const [showNewIncome, setShowNewIncome] = useState(false);
  const [error, setError] = useState();

  const getIncomes = async () => {
    try {
      const userid = 1; // TODO use session storage insted
      const incomesRes = await API.getIncomes(userid);
      setIncomes(incomesRes.data.data);
    } catch (e) {
      setError('Failed to fetch Incomes');
    }
  };
  const fetchData = async () => {
    try {
      const userid = 1; // TODO use session storage insted
      const incomesRes = await API.getIncomes(userid);
      setIncomes(incomesRes.data.data);
    } catch (e) {
      setError('Failed to fetch Incomes');
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // will happen only on the first render

  const handleDeleteIncome = async(userId,incomeId) =>{
      try{
        await API.removeIncome(userId,incomeId)
        await getIncomes()
      }catch(e){
        setError('Failed to delete Incomes');
      }
  }

const handleIncomeClose = () =>{
  setShowNewIncome(false)
}

  return (
    <div>
      <Nav/>
      <i className="fa fa-plus-circle fa-2x blue-icon" onClick={() => setShowNewIncome(true)}></i>
      {showNewIncome && (
        <Income
              getIncomes={getIncomes}
              closeIncome={() => setShowNewIncome(false)}
            />
      )}
      {incomes && <IncomesListContainer incomes={incomes} onDelete={handleDeleteIncome} getIncomes={getIncomes} onClose={handleIncomeClose} />}
      {error && <span>{error}</span>}
    </div>
  );
};

IncomesContainer.defaultProps = {};

IncomesContainer.propTypes = {};

export default IncomesContainer;
