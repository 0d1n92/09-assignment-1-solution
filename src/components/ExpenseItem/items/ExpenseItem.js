   import '../css/ExpenseItem.css';

   export default function ExpensesItem (props) {
     return (
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
     )
   }
