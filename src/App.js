import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: 'e0',
    title: ' Earbuds',
    amount: 2999.00,
    date: new Date(2023, 9, 24),
  },
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { 
    id: 'e2',
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2024, 2, 12), 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];



function App() {

  const [expenses,setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    setExpenses((prevState)=>{
      return [...prevState,expense];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
