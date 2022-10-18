import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [selected, setSelected] = useState("2020");

  const addFilter = (enteredexpenseYear) => {
    setSelected(enteredexpenseYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter year={selected} onAddExpenseYear={addFilter} />
      <h1>Let´s get started</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default Expenses;
cu