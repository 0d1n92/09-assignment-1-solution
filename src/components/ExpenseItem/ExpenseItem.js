import './css/ExpenseItem.css';
import ExpensesDate from './items/ExpenseDate';
import ExpensesInfo from './items/ExpenseInfo';

function ExpenseItem(props) {
 console.log(props);
  return (
    <div className='expense-item'>
      <ExpensesDate date= {props.date}/>
      <ExpensesInfo title={props.title} amount={props.amount}></ExpensesInfo>
    </div>
  );
}

export default ExpenseItem;