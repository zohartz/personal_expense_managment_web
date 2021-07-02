import React  from 'react';
import PropTypes from 'prop-types';
import './containers.css';
import { Income } from '../components';
import { Accordion, Card, Button , useAccordionToggle} from 'react-bootstrap';


const IncomeListContainer = (props) => {
  const { incomes, onDelete, getIncomes, onClose } = props;
  return (
    <div>
    <Accordion className="accordionStyle" defaultActiveKey={0}>
      {incomes.map((item, index) => (
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
        
            <Income
              incomeType = 'existing'
              incomeId={item.id}
              name={item.title}
              amount={item.amount}
              description={item.description}
              category={item.category}
              date={item.date}
              getIncomes={getIncomes}
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

IncomeListContainer.defaultProps = {
  incomes: [],
  getIncomes() {},
  onClose() {},
};

IncomeListContainer.propTypes = {
  incomes: PropTypes.array,
  getIncomes: PropTypes.func,
  onClose: PropTypes.func,
};

export default IncomeListContainer;
