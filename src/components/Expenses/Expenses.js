import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selected, setSelected] = useState("2020");

  const addFilter = (enteredexpenseYear) => {
    setSelected(enteredexpenseYear);
    console.log(enteredexpenseYear)
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selected;
  })

  return (
    <div className="expenses">
      <h1>Let´s get started</h1>
      <ExpensesFilter year={selected} onAddExpenseYear={addFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </div>
  );
}

export default Expenses;
