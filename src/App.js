import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 9, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 4, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e5",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 9, 14),
  },
  { id: "e6", title: "New TV", amount: 799.49, date: new Date(2022, 12, 12) },
  {
    id: "e7",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 11, 28),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e9",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e10", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: "e11",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e12",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
