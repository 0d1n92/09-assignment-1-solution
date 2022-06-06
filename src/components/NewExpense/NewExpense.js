import React from 'react';
import './css/NewExpense.css';
import NewExpreseForm from './items/NewExpensesForm';

const NewExpese = (props) => {

  return (
    <div className='new-expense'>
      <NewExpreseForm />
    </div>
  );
};

export default NewExpese;