import { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransation';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  }

  return (
    <div className='container'>
      <Header/>
      <Balance total={total} />
      <IncomeExpense income={income} expense={expense} />
      <TransactionList transactions={transactions}/>
      <AddTransaction onAdd={addTransaction} />
    </div>
  );
}

export default App;
