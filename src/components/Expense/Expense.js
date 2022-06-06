import './css/Expense.css';
import React, { useState } from 'react';
import ExpenseDate from './items/ExpenseDate';
import ExpenseItem from './items/ExpenseItem';
import ExpensesFilter from './items/ExpensesFilter';

function Expense(props) {
    const render = [];
    const [filteredYear, setFilteredYear] = useState('2020');
    const FilterByYears = (data) => {
       setFilteredYear(data.value);
    };

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
      <ExpensesFilter  selcted={filteredYear} ChangeYearFather={FilterByYears} />
      {render}
    </>
  );
}
export default Expense;