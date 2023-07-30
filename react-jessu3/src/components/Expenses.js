import React, { useState } from 'react';

// import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from './NewExpense/ExpensesFilter';
import ExpensesList from './NewExpense/ExpensesList';
import './Expenses.css';
import ExpensesChart from './NewExpense/ExpenseChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() == filteredYear;
    });

  
    return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    );
  };
  
  export default Expenses;