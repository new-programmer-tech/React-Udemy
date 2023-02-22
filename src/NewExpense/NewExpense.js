/** @format */
import React from "react";
import NewExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
  };
  return (
    <div className='new-expense'>
      {/* form */}
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
