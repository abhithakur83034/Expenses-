import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from './DataContext';
import { useNavigate } from 'react-router-dom';
const Expense = () => {
  const { register, handleSubmit,reset } = useForm();
  const { addExpenseData } = useContext(DataContext);
  
  const navigate = useNavigate()
  const onSubmit = (data) => {
    addExpenseData(data);
    console.log(data);
    reset();
    navigate('/')

  };

  const date = new Date().toLocaleDateString();
  console.log(date);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <h1>Your Expenses Page</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                <input
                  type="text"
                  placeholder="expense"
                  className="form-control"
                  defaultValue="Expenses"
                  readOnly
                  name="type"
                  {...register('type')}
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder="add your expense"
                  className="form-control"
                  name="expense"
                  {...register('expense')}
                />
              </p>
              <p>
                <input
                  type="text"
                  className="form-control"
                  name="date"
                  defaultValue={date}
                  {...register('date')}
                />
              </p>
              <input
                type="submit"
                value="Add"
                className="btn btn-outline-success"
              />
            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Expense;

