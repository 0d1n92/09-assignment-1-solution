import React from 'react';
import './css/NewExpense.css';
import NewExpreseForm from './items/NewExpensesForm';

const NewExpese = (props) => {
  const PassChildData = (childData) => {
      const FatherDataFromChild = {
        ...childData,
        id:Math.random().toString()
      }
      alert("dati dal padre" + FatherDataFromChild.amount);
  };

  return (
    <div className='new-expense'>
      <NewExpreseForm ProssToPassDataFromChild={PassChildData} />
    </div>
  );
};

export default NewExpese;