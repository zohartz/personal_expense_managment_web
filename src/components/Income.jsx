import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import API from '../api/expense_mng_api';

const Income = (props) => {
  const {
    closeIncome,
    getIncomes,
    incomeType,
    incomeId,
    name,
    amount,
    description,
    category,
    date,
  } = props;
  const [incomeDetails, setIncomeDetails] = useState({
    incomeId,
    name,
    amount,
    description,
    category,
    date,
  });

  const handleChange = (event) => {
    console.log('herre2');
    const newIncome = {
      ...incomeDetails,
      [event.target.name]: event.target.value,
    };
    setIncomeDetails(newIncome);
  };

  const isValidExpense = () => {
    return (
        incomeDetails.name &&
        incomeDetails.description &&
        incomeDetails.amount &&
        incomeDetails.category &&
        incomeDetails.date
    );
  };

  const handleClick = async () => {
    const userId = 1; // store in session
    if (isValidExpense()) {
      try {
        let data = {
          title: incomeDetails.name,
          amount: parseInt(incomeDetails.amount),
          description: incomeDetails.description,
          category: incomeDetails.category,
          date: incomeDetails.date,
        };
        if (incomeType === 'new') {
          await API.addIncome(userId, data);
        } else {
          data['id'] = incomeId;
          await API.updateIncome(userId, data);
        }
        closeIncome();
        getIncomes();
      } catch (e) {
        console.log(e);
      }
    }
  };


  return (
    <div className={incomeType == 'new' ? 'typeNew' : undefined}>
    {incomeType=='new' &&<i className="fa fa-times icon-color fa-lg" onClick={closeIncome}></i>}
    <Form
      type={incomeType}
      nameTitle='Income Name'
      amountTitle='Income amount'
      descriptionTitle='Income description'
      categoryTitle='Income category'
      dateTitle='Income date'
      handleChange={handleChange}
      handleClick={handleClick}
      itemDetails={incomeDetails}
    />
    </div>
  );
};

Income.defaultProps = {
  incomeType: 'new',
  incomeId: null,
  name: '',
  amount: '',
  description: '',
  category: '',
  date: '',
  closeIncome() {},
  getIncomes() {},
};

Income.propTypes = {
  IncomeType: PropTypes.string,
  incomeId: PropTypes.number,
  name: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  closeIncome: PropTypes.func,
  getIncomes: PropTypes.func,
};

export default Income;
