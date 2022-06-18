import "./NewExpense.css";
import Expenseform from "./Expenseform";
import React, { useState } from "react";
const NewExpense = (props) => {
  function saveExpenseDataHandler(expenseData) {
    const expenseDatafinal = {
      id: Math.round(Math.random() * 10).toString(),
      ...expenseData,
    };
    //console.log(expenseDatafinal)
    props.oninputnewexpense(expenseDatafinal);
  }

  function clickHandler() {
    setButton(0);
  }

  function backButton() {
    setButton(1);
  }

  const [buttonOff, setButton] = useState(1);
  let content = (
    <Expenseform
      onExpenseEnter={saveExpenseDataHandler}
      backButton={backButton}
    />
  );

  if (buttonOff === 1) {
    content = (
      <div>
        <button onClick={clickHandler}>Add New Expense</button>
      </div>
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
