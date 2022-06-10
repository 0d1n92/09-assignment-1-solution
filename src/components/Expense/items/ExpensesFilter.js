import React, { useState } from 'react';
import '../css/ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [year, setYears] = useState('2022');
  const valueYear = {
    value: year
  };
  
  const HandlerYears = (e) => {
    setYears(e.target.value);
    valueYear.value = year;
    props.ChangeYearFather(valueYear); 
  }

  return (
   <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={HandlerYears}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  ); 
};

export default ExpensesFilter;