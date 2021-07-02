import React from "react";

import SummaryBox from "./SummaryBox";
import PropTypes from "prop-types";
import "./components.css";

const Summary = (props) => {
  const { expenses, incomes } = props;
  const strokeWidth = 5;
  return (
    <div>
      {/* EXPENSES  */}
      <div class="row">
        <SummaryBox
          textColor="#01F7C3"
          value={expenses.daily}
          strokeWidth={strokeWidth}
          title={"Today's Expense"}
        ></SummaryBox>
        <SummaryBox
          textColor="#5DADE2"
          value={expenses.weekly}
          strokeWidth={strokeWidth}
          title={"This week Expenses"}
        ></SummaryBox>
        <SummaryBox
          textColor="#F4D03F"
          value={expenses.monthly}
          strokeWidth={strokeWidth}
          title={"This month Expenses"}
        ></SummaryBox>
      </div>
      <div class="row">
        <SummaryBox
          textColor="red"
          value={incomes.daily}
          strokeWidth={strokeWidth}
          title={"Today's Incomes"}
          type={"income"}
        ></SummaryBox>
        {/* ICOMES  */}
        <SummaryBox
          textColor="#01F7C3"
          value={incomes.weekly}
          title={"This week Incomes"}
          type={"income"}
        ></SummaryBox>
        <SummaryBox
          textColor="#F4D03F"
          value={incomes.monthly}
          strokeWidth={strokeWidth}
          title={"This month Incomes"}
          type={"income"}
        ></SummaryBox>
      </div>
    </div>
  );
};

Summary.defaultProps = {
  expenses: {},
  incomes: {},
  // handleToast() {},
};

Summary.propTypes = {
  expenses: PropTypes.object,
  incomes: PropTypes.object,
  // data: PropTypes.arrayOf(
  //     PropTypes.shape({
  //         domainId: PropTypes.string,
  //         description: PropTypes.string,
  //         appliesTo: PropTypes.string,
  //     }),
  // ),
  // t: PropTypes.func,
  // appliesToList: PropTypes.arrayOf(PropTypes.object),
};
export default Summary;
