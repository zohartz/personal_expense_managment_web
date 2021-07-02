import React from 'react';

const Nav = () => {
  return (
    <nav
      className='navbar navbar-light justify-content-between'
      style={{ backgroundColor: 'lightgray' }}
    >
      <a className='nav-title'>Personal Expense Management</a>
      <form className='form-inline'>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        ></input>
        <button
          className='btn btn-outline-secondary my-2 my-sm-0'
          type='submit'
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Nav;
