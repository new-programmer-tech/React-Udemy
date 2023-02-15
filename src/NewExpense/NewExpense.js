/** @format */
import React from "react";
import NewExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className='new-expense'>
      {/* form */}
      <NewExpenseForm onSaveExpenseData={} />
    </div>
  );
};

export default NewExpense;
