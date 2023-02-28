import React from "react";
import './newexpense.css';
import ExpenseForm from "./expense_form/expenseform";

const NewExpense = () => {
    const onSave=(value) => {
        const expense_data={
            ...value,
            id:Math.random().toString()
    }
        console.log('',expense_data,value);
    }
    return<div className="new-expense">
        <ExpenseForm 
        onSave={onSave}/>
        
    </div>
}

export default NewExpense;