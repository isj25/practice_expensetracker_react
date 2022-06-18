import React, { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  function updatedYearFilter(changedYear) {
    //console.log(changedYear);
    // console.log("from expenses");
    setFilterYear(changedYear);
  }

  const filteredArray = props.expense.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={updatedYearFilter}
          defaultYear={filteredYear}
        />
        <ExpenseChart expense={filteredArray}/>
        <ExpensesList expense = {filteredArray} />
      </Card>
    </div>
  );
}

export default Expenses;
