   import '../css/ExpenseItem.css';
   import React, {useState} from 'react';

   export default function ExpensesItem (props) {
     const [title, setTile] = useState(props.title);
     const ClickHandler = (e)=> {
        setTile("Update Title")
     }
     return (
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <input value="click me" type="button" onClick={ClickHandler}/>
      </div>
     )
   }
