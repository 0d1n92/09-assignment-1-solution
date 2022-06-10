import React, { useState } from 'react';
import '../css/ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [year, setYears] = useState({
    value : '2022'});  
  const HandlerYears = (e) => {
    setYears((prev)=> {
       return {...prev, value : e.target.value}}
      );
      console.log(year);   
    props.ChangeYearFather(e.target.value); 
    props.onChangeDate( e.target.value);
  }

  return (
   <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={HandlerYears}>
         <option value=''></option>
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