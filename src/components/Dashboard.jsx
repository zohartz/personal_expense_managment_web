import React, { Componenet, useState, useEffect, Redirect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import API from '../api/expense_mng_api';
import Summary from './Summary';

const Dashboard = (props) => {
  const { expenseMngApi } = props;
  const [expensesSummary, setExpensesSummary] = useState({
    daily: 90,
    weekly: 10,
    monthly: 1000,
  });
  const [incomesSummary, setIncomesSummary] = useState({
    daily: 80,
    weekly: 50,
    monthly: 60,
  });

  const fetchData = async () => {
    const userId = 1;
    try {
      //const expenses = await API.getExpensess(userId);
      const expenses = await expenseMngApi.getExpensess();

      const incomes = await API.getIncomes(userId);
      console.log(`${expenses} , ${incomes}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const getExpenses = (userId) => {
  //   userId = 1; // todo remove that after session managment

  //   API.getExpensess(userId).then(
  //     (data) => {
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.response && error.response.status === 400) {
  //         console.log("bkj");
  //         // setHasError({
  //         //   status: true,
  //         //   msg: contants.login.badRequestError
  //         // });
  //       } else {
  //         console.log("error");
  //         // setHasError({
  //         //   status: true,
  //         //   msg:contants.login.internalError
  //         // });
  //       }
  //     }
  //   );
  // };

  return (
    <div>
      <nav class='navbar fixed-top navbar-expand-md navbar-dark text-light bg-dark mb-3'>
        Personal Expense Management
      </nav>
      <div class='container-fluid' id='main'>
        <div class='row row-offcanvas row-offcanvas-left'>
          <div
            class='col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0'
            id='sidebar'
            role='navigation'
          >
            <ul class='nav flex-column sticky-top pl-0 pt-5 mt-3'>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Dashboard
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/expense'>
                  Expense
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/incomes'>
                  Incomes
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Export
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Change Password
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Logout
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Themes
                </a>
              </li>
            </ul>
          </div>
          <div class='col main pt-5 mt-3'>
            {/* <nav class="navbar navbar-dark text-light bg-dark ">
              Dashborad
            </nav> */}
            <h1 class='display-4 d-none d-sm-block'>Dashborad</h1>
            <p class='lead d-none d-sm-block'></p>
            {/* <CardDeck> */}
            <Summary expenses={expensesSummary} incomes={incomesSummary} />
            {/* </CardDeck> */}

            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
