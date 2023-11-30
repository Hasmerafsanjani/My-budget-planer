import React, { useState } from 'react';

const Tracker = () => {

  const [formData, setFormData] = useState({
    Expense: '',
    amount: '',
  });

  const [budget, setBudget] = useState(10000);
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(budget);
  const [submittedData, setSubmittedData] = useState([]);




  const handleInputChange = (event) => {
    if(spent>budget){
      alert("your budget failed")
    }
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);
    setBudget(newBudget);
    setRemaining(newBudget - spent - parseFloat(formData.amount));
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(spent>budget){
      alert("your budget is failed")
    }
    const expenseAmount = parseFloat(formData.amount);

    // Calculate spent and remaining dynamically
    setSpent(spent + expenseAmount);
    setRemaining(budget - spent - expenseAmount);

    // Add formData to the submittedData array
    setSubmittedData([...submittedData, formData]);

    // Optionally, you can reset the form fields
    setFormData({
      Expense: '',
      amount: '',
    });
   
  };

  return (
    <>
    <div>
    <div>
      <h2 className='text-4xl font-bold text-center p-1 m-6' > My Budget Tracker</h2>
      <div className='flex justify-evenly ' >
      <div className='p-2 rounded m-4  bg-green-300 text-2xl font-semibold'>Budget : {budget}</div>
      <div className='p-2 rounded m-4  bg-blue-300 text-2xl font-semibold'>Remaining : {remaining} </div>
      <div className='p-2 rounded m-4  bg-red-300 text-2xl font-semibold'>Spend : {spent}</div>
    </div>
      <form className='flex flex-col justify-center items-center ' onSubmit={handleFormSubmit}>
        <div className='flex justify-evenly gap-4' >
        <div className='flex flex-col'>
        <label htmlFor="Expense">Expense:</label>
        <input
          type="text"
          id="Expense"
          className=' border-2 p-2 focus:border-blue-500 outline-none w-[40vw] bg-gray-100 rounded-lg'
          name="Expense"
          value={formData.Expense}
          onChange={handleInputChange}
          required
        />
        </div>

        <div className='flex flex-col'>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          className=' border-2 p-2 focus:border-blue-500 outline-none w-[40vw] bg-gray-100 rounded-lg'
          value={formData.amount}
          onChange={handleInputChange}
          required
        />
        </div>
        </div>

        <button className='bg-green-600 p-2 px-4 rounded-lg md:ml-20 sm:ml-10 w-[20vw] m-3 text-white font-bold text-lg'  type="submit">Submit</button>
      </form>

      {/* Display the submitted form data */}
      <div>
      <h1 className=' p-4  font-semibold text-3xl md:ml-20 sm:ml-10'>All Expences....</h1>
        <ul className='flex flex-col font-bold gap-3'>
          {submittedData.map((data, index) => (
            <li key={index} className='flex justify-evenly '>
               <div className='border-2 p-2 focus:border-blue-500 outline-none w-[40vw] bg-gray-100 rounded-lg'>
                <li>Expense: </li>
                <li> {data.Expense}</li>
               </div >
               <div className='border-2 p-2 focus:border-blue-500 outline-none w-[40vw] bg-gray-100 rounded-lg'>
                <li>Value: </li>
                <li> {data.amount}</li>
               </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </>
  );
};

export default Tracker;

