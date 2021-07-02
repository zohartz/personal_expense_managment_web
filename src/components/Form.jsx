import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

const Form = (props) => {
  const {
    type,
    nameTitle,
    amountTitle,
    descriptionTitle,
    categoryTitle,
    dateTitle,
    handleChange,
    handleClick,
    itemDetails,
    handleClose
  } = props;
  return (
    // <div className={type == 'new' ? 'Expense' : undefined}>
    <div>
      <div className='leftCol'>
        <div className='item'>
          {nameTitle}:
          <input
            className='form-control input-style'
            type='text'
            name='name'
            placeholder = "Name"
            onChange={handleChange}
            value={itemDetails.name}
          />
        </div>
        <div className='item'>
          {amountTitle}:
          <input
            className='form-control input-style'
            type='text'
            name='amount'
            placeholder = "Amount $"
            onChange={handleChange}
            value={itemDetails.amount}
          />
        </div>
        <div className='item'>
          {descriptionTitle}:
          <input
            className='form-control input-style'
            type='text'
            name='description'
            placeholder = "Description"
            onChange={handleChange}
            value={itemDetails.description}
          />
        </div>
      </div>
      <div className='item'>
        {categoryTitle}:
        <input
          className='form-control input-style'
          type='text'
          name='category'
          placeholder = "Category"
          onChange={handleChange}
          value={itemDetails.category}
        />
      </div>
      <div className='item'>
        {dateTitle}:
        <input
          className='form-control input-style'
          type='text'
          name='date'
          placeholder = "YYYY-MM-DD"
          onChange={handleChange}
          value={itemDetails.date}
        />
      </div>
        <Button variant='primary' onClick={handleClick} className="save">
          save
        </Button>
        
    </div>
  );
};

Form.defaultProps = {
    type: 'new',
    nameTitle: '',
    amountTitle: '',
    descriptionTitle: '',
    categoryTitle: '',
    dateTitle: '',
    handleChange() {},
    handleClick() {},
  };
  
  Form.propTypes = {
    nameTitle: PropTypes.string,
    amountTitle: PropTypes.string,
    descriptionTitle: PropTypes.string,
    categoryTitle: PropTypes.string,
    dateTitle: PropTypes.string,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
  };

export default Form;
