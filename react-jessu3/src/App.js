// import ExpenseItem from './components/ExpenseItem';
import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Power of Subconsious mind',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'Life is what you make it',
   amount: 799.49,
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'As a man thinketh',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Girl in the room 105',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
