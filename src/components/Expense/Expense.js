import './css/Expense.css';
import ExpenseDate from './items/ExpenseDate';
import ExpenseItem from './items/ExpenseItem';
import React from 'react';
function Expense(props) {
    const render = [];
    props.data.forEach((data, i) => {
      render.push(
       <div className='expense-item' key={i}>
        <ExpenseDate date= {data.date}></ExpenseDate>
        <ExpenseItem title={data.title} amount={data.amount}></ExpenseItem>
      </div>
      )
      })
  return (
    <>
      {render}
    </>
  );
}
export default Expense;