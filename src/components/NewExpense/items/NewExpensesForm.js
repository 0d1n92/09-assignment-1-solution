import React, {useState} from 'react';
import '../css/NewExpenseForm.css';
const NewExpreseForm = (props) => {

  const [title, setTitle]= useState('');
  const [amount, setAmount]= useState('');
  const [date, setDate]= useState(''); 
  //verisone breve
  /* const [userInput, setUserInput]= useState({
     title:"",
     amount: "",
     date: "",
 
  })*/
  const HandlerChangeText = (e) => {
    setTitle(e.target.value) ;
   /*  setUserInput(
      {
      ...userInput,
      title: e.target.value
      }
    ); */

  /*   setUserInput((prevState)=> {
      return(
      {
        ...userInput,
        title: e.target.value}
        );
    }); */
  }

  const HandlerChangeAmount = (e) => {
    setAmount(e.target.value) ;
    /*     setUserInput(
      {
      ...userInput,
      amount: e.target.value
      }
    ); */
   /*  setUserInput((prevState)=> {
      return(
      {
        ...userInput,
        amount: e.target.value}
        );
    }); */

  };


  const HandlerChangeDate = (e) => {
    setDate(e.target.value) ;
     /*  setUserInput(
      {
      ...userInput,
      date: e.target.value
      }); */

     /*  setUserInput((prevState)=> {
      return(
      {
        ...userInput,
        title: e.target.value}
        );
    }); */
  };
  const HandlerSubmit = (e) => {
      const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.ProssToPassDataFromChild(expenseData);
    console.log(expenseData);
    setTitle('');
    setAmount('');
    setDate('');

  }
  return (
   <form onSubmit={HandlerSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input value={title} onChange={HandlerChangeText} type='text' />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input value={amount}  onChange={HandlerChangeAmount}  type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input value={date} onChange={HandlerChangeDate} type='date' min='2020-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpreseForm;