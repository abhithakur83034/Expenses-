import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

const Home = () => {
  const { expenseData, incomeData } = useContext(DataContext);
  const [budget, setBudget] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;

    incomeData.forEach((income) => {
      totalIncome += parseInt(income.income);
    });

    expenseData.forEach((expense) => {
      totalExpenses += parseInt(expense.expense);
    });

    setTotalIncome(totalIncome);
    setTotalExpense(totalExpenses);
    setBudget(totalIncome - totalExpenses);
  }, [expenseData, incomeData]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <Link to="/income">
                  <button className="btn btn-outline-success">Add Income...</button>
                </Link>
                <Link to="/expenses">
                  <button className="btn btn-outline-success">Add Expenses</button>
                </Link>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col-sm-4">
                <h5>Income:</h5>
                <p>{totalIncome}</p>
              </div>
              <div className="col-sm-4">
                <h5>Expenses:</h5>
                <p>{totalExpense}</p>
              </div>
              <div className="col-sm-4">
                <h5>Budget:</h5>
                <p>{budget}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;
