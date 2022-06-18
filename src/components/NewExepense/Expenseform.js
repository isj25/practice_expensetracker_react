import "./Expenseform.css";
import { useState } from "react";

function Expenseform(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredAmount: "",
  });

  function titleChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  }

  function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    // console.log(event.target.value);
  }
  // console.log(enteredDate);

  function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  }
  // console.log(enteredAmount);
  function backButtonHandler() {
    props.backButton();
  }

  function submitHandler(event) {
    event.preventDefault();
    backButtonHandler();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    //console.log(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    props.onExpenseEnter(expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={backButtonHandler}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Expenseform;
