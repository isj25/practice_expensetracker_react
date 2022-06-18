import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css"
function ExpensesList(props)
{





   


    if(props.expense.length ===0)
    {
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>;
    }



    let content;
    if (props.expense.length > 0) {
      content = props.expense.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        );
      });
    }

    return (
    <div>
        <ul className='expenses-list'>
            {content}
        </ul>
    </div>
    );

}

export default ExpensesList;