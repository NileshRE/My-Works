import {useState} from "react";

// Written in React Use any online compiler to run and calculate monthly payment.

function App() {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [payment, setPayment] = useState(0);

  const calculate=(e)=>{
    e.preventDefault();
  const monthlyPay = (amount * (rate / 1200) * Math.pow(1 + rate / 1200, term*12)) / (Math.pow(1 + rate / 1200, term*12) - 1);
    setPayment(monthlyPay)
  }

  return (
    <>
    <form>
    <span>
      <label htmlFor="amount">Loan Amount:</label>
      <input type="number" id="amount" value={amount}
      onChange={(e)=>{setAmount(e.target.value)}}/> 
    </span>
      <span>
      <label htmlFor="amount">Loan Term(years):</label>
      <input type="number" id="loan-term" value={term}
      onChange={(e)=>{setTerm(e.target.value)}} />
    </span>
    <span>
      <label htmlFor="amount">Interest Rate(%):</label>
      <input type="number" id="rate" value={rate}
      onChange={(e)=>{setRate(e.target.value)}} />
    </span>
    <button type="submit" onClick={calculate}>Calculate</button>
    </form>

    <div>
    <p>Monthly Payment Amount:₹{payment.toFixed(2)}</p>
    <p>Total Payment Amount:₹{(payment*term*12).toFixed(2)}</p>
    <p>Total Interest Paid:₹{((payment*term*12)-(amount)).toFixed(2)}</p>
    </div>
    </>
  );
}