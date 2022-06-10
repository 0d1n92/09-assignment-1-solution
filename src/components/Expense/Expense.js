import './css/Expense.css';
import React, {useState} from 'react';
import ExpenseDate from './items/ExpenseDate';
import ExpenseItem from './items/ExpenseItem';
import ExpensesFilter from './items/ExpensesFilter';

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('');
    const [allDates, setAllDates] = useState(props.data);
    const item = props.data;
    const FilterByYears = (data) => {
       setFilteredYear(data.value);
    };

   const onChangeDate = (year) => {
      setAllDates(props.data);
      if (year !== ""){
      const results = item.filter((element)=> element.date.getFullYear().toString() === year);
        setAllDates(results);
      }
   };

  return (
    <>
      <ExpensesFilter  selected={filteredYear} onChangeDate={onChangeDate} ChangeYearFather={FilterByYears} />
      {allDates.map((data, i) => (
        <div className='expense-item' key={i}>
          <ExpenseDate date={data.date}></ExpenseDate>
          <ExpenseItem title={data.title} amount={data.amount}></ExpenseItem>
        </div>

      ))}
    </>
  );
}
export default Expense;