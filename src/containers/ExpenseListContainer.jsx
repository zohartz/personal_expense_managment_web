import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import './containers.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Expense } from '../components';
import { Accordion, Card, Button , useAccordionToggle} from 'react-bootstrap';


const ExpenseListContainer = (props) => {
  const { expenses, onDelete, getExpenses, onClose } = props;
  const [open, setOpen] = useState(true);

  const handleOpen=() =>{
    console.log("test");
    
    setOpen(!open)
  }

  return (
    <div>
    <Accordion className="accordionStyle" defaultActiveKey={0}>
      {expenses.map((item, index) => (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey={`${index}`}  >
              <span className="title">{item.title}</span>
            
            </Accordion.Toggle>
            <span className="icon-button" >
            <i className="fa fa-trash fa-lg icon-color"  onClick={() => onDelete(1, item.id)}></i> 
            <Accordion.Toggle as={Button} variant='link' eventKey={`${index}`} >
            <i className="fa fa-angle-down rotate-icon icon-color"></i>
            </Accordion.Toggle>
            </span>
              <span className="titles"> Amount <p className="amount">{item.amount}$</p></span>
              <span className="titles"> Date <p className="date">{item.date}</p></span>
          </Card.Header>
        {/* onClick={() => setOpen(!open)} */}
          <Accordion.Collapse eventKey={`${index}`}  >
            <Card.Body>
        
            <Expense
              ExpenseType = 'existing'
              expenseId={item.id}
              name={item.title}
              amount={item.amount}
              description={item.description}
              category={item.category}
              date={item.date}
              getExpenses={getExpenses}
              closeExpense={onClose}
            />
            
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
    </div>
  );
};

ExpenseListContainer.defaultProps = {
  expenses: [],
  getExpenses() {},
  onClose() {},
};

ExpenseListContainer.propTypes = {
  expenses: PropTypes.array,
  getExpenses: PropTypes.func,
  onClose: PropTypes.func,
};

export default ExpenseListContainer;
