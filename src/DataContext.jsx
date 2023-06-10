import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  console.log("child",children)
  const [expenseData, setExpenseData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  const addExpenseData = (data) => {
    setExpenseData([...expenseData, data]);
  };

  const addIncomeData = (data) => {
    setIncomeData([...incomeData, data]);
  };

  return (
    <DataContext.Provider value={{ expenseData, addExpenseData, incomeData, addIncomeData }}>
      {children}
    </DataContext.Provider>
  );
};
