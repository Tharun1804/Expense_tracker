import React, { useState } from "react";
import './expenseitem.css';  
import ExpenseDate from "./expense_date/expensedate";

const ExpenseItem = (props={}) =>{
// //const{
//     date=new Date(),
//     amount=0,
//      }=props;
//      console.log(props);
     const [title,setTitle]=useState(props.title)//[title,setTitle]
     const [date,setDate]=useState(props.date)
     const[amount,setAmount]=useState(props.amount)
     //let title=props.title

    //  function onChangeClick(event)
    //  {
    //     console.log('ExpenseItemExpenseItemExpenseItem');
    //     setTitle('updated');
    //     setAmount(0);
    //     setDate(new Date());
    //     console.log(title);
    //  }

    // const date=new Date(2023,2,3).toISOString();
    // const title="New TV";
    // const amount='100';
    // console.log(date);
    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description ">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    )

}

export default ExpenseItem;