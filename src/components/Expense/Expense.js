import './css/Expense.css';
import React, {useState} from 'react';
import ExpenseDate from './items/ExpenseDate';
import ExpenseItem from './items/ExpenseItem';
import ExpensesFilter from './items/ExpensesFilter';

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const FilterByYears = (data) => {
       setFilteredYear(data.value);
    };

  return (
    <>
      <ExpensesFilter  selcted={filteredYear} ChangeYearFather={FilterByYears} />
      {props.data.map((data, i) => (
        <div className='expense-item' key={i}>
          <ExpenseDate date={data.date}></ExpenseDate>
          <ExpenseItem title={data.title} amount={data.amount}></ExpenseItem>
        </div>

      ))}
    </>
  );
}
export default Expense;