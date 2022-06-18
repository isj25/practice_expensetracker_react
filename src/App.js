import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExepense/NewExpense";
import React ,{useState} from 'react';


const expensesarray = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; 
function App() {


  const [expenses,addExpense] = useState(expensesarray);
  //console.log(expenses);
  
  function newExpenseHandler(newExpenseData)
  {
    // console.log("before "+expenses.length);
    // expenses.push(newExpenseData);
    //console.log(newExpenseData);
    addExpense(prevExpense=>
      {
        return [newExpenseData,...prevExpense];
      });
    // console.log("after "+expenses.length);
    
  }

  return (
    <div>
     <NewExpense oninputnewexpense={newExpenseHandler}/>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;
