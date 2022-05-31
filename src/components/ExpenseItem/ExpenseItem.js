import './css/ExpenseItem.css';
import ExpensesData from './items/ExpenseData';

function ExpenseItem(props) {
 console.log(props);
  return (
    <div className='expense-item'>
      <ExpensesData date= {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;