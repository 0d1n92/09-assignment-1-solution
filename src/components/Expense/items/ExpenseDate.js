   import '../css/ExpenseDate.css';
   import React from 'react';

   export default function ExpenseDate (props) {
     return (
        <div className="expense-date">
          <div className="expense-date__month">{props.date.toLocaleString('it-IT', { month: 'long' })}</div>
          <div className="expense-date__year">{ props.date.toLocaleString('it-IT', { day: '2-digit' })}</div>
          <div className="expense-date__day">{props.date.getFullYear()}</div>
        </div>
     );
   }
