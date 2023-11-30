import { useState } from 'react';
import './App.css';
import Tracker from './components/Tracker';


function App() {

//   const [description , setdescription] = useState('')
//   const [amount , setAmount] = useState(null)
//   const [expence,setexpence] = useState([])


//   // const addExpence = (e)=>{
//   //   e.preventDefault();
//   //   setexpence([...expence,{id:Date.now,description,amount}])


//  // Step 1: Create a state variable for the form data and submitted data
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [submittedData, setSubmittedData] = useState([]);

//     // Step 2: Set up event handler for form inputs
//     const handleInputChange = (event) => {
//       const { name, value } = event.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };

//      // Step 3: Handle form submission to update the state object and display the form data
//      const handleFormSubmit = (event) => {
//       event.preventDefault();
      
//       // Add formData to the submittedData array
//       setSubmittedData([...submittedData, formData]);
  
//       // Optionally, you can reset the form fields
//       setFormData({
//         username: '',
//         password: '',
//       });
//     };
     
  
  return (
    <div>
      {/* <h1 className='text-4xl font-bold text-center p-1 ' >My Budget Planner</h1>
    <div className='flex justify-evenly ' >
      <div className='p-2 rounded m-4  bg-green-300 text-2xl font-semibold'>Budget : </div>
      <div className='p-2 rounded m-4  bg-blue-300 text-2xl font-semibold'>Remaining : </div>
      <div className='p-2 rounded m-4  bg-red-300 text-2xl font-semibold'>Spend : </div>
    </div>
    <h1 className=' p-4  font-semibold text-3xl md:ml-20 sm:ml-10'>Add Expences....</h1>

    <form onSubmit={handleFormSubmit} className='flex justify-evenly'>
        <div className='flex flex-col m-4 '>
            <label className='p-1 text-xl '>Expence Name</label>
            <input 
            className=' border-2 p-2 focus:border-blue-500 outline-none w-[40vw] bg-gray-100 rounded-lg'
            type='text' 
            placeholder='Enter Expences'
            onChange={handleInputChange}
            required
            ></input>
          </div>
          <div className='flex flex-col m-4'>
                <label className='p-1 text-xl'>Expence Amount </label>
                <input 
                className='border-2 p-2 focus:border-blue-500 outline-none w-[40vw] bg-gray-100 rounded-lg'
                type='number' 
                placeholder='Enter Expences'
                onChange={handleInputChange}
                required
                ></input>
          </div>
        <button   type='submit' className='bg-green-600 p-2 px-4 rounded-lg md:ml-20 sm:ml-10  text-white font-bold text-lg' >Save</button>
    </form>
    
    <div>
        <h2>Submitted Data:</h2>
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>
              {`Username: ${data.username}, value: ${data.password}`}
            </li>
          ))}
        </ul>
      </div> */}
      <Tracker/>
    </div>
  );
}

export default App;
