import React from 'react';

import Chart from  "../Chart/Chart";



// we will receive filtered array here

function ExpenseChart(props)
{
    const dataItem = [
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"March",value:0},
        {label:"Apr",value:0},
        {label:"May",value:0},
        {label:"June",value:0},
        {label:"July",value:0},
        {label:"Aug",value:0},
        {label:"Sep",value:0},
        {label:"Oct",value:0},
        {label:"Nov",value:0},
        {label:"Dec",value:0}
        
    ];

    //const keys = Object.keys(dataItem);
    //get month from the props.item array and use it as index to access and increment the value

    

    props.expense.forEach(element => {
        dataItem[element.date.getMonth()].value += element.amount;
    });

    // console.log(dataItem);
    //
    
    return (
        <div>
            <Chart dataItem = {dataItem}/>
        </div>
    );
   
}


export default ExpenseChart;