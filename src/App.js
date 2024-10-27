import './App.css';
import React, { useState } from 'react';

function App() {

  //state-define
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMessage] = useState("");

  //logic for calculate
  let calcbmi = (e) => {

    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Plz Enter Valid Weight & Height")
    }
    else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMessage("you are underweight")
      }
      else if (bmi >= 25 || bmi < 30) {
        setMessage("you are healthy weight")
      }
      else {
        setMessage("you are overweight")
      }
    }
  }

  //reload
  let reload = () =>
    window.location.reload()



  return (
    //html page interface
    <div className="App">
      <div className='container'>
        <h1>BMI Calculator</h1>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (ibs):</label>
            <input type='text' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (in):</label>
            <input type='text' placeholder='Enter height Value' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>

          <div>
            <button className='btn btn-submit' type='submit'>Submit</button>
            <button className='btn btn-reload' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{msg}</p>

          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
