import { useState } from 'react';
import './App.css'
import InputTag from './Components/Input'
import useCurrencyConverter from './Hooks/customHook'

function App() {

  const [amount,setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convAmount, setConvAmount] = useState(0);

  const currencyData = useCurrencyConverter(fromCurrency); 

  const currencyOptions = Object.keys(currencyData); // Extract currency codes from the fetched data

  const swap = () =>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convAmount);
    setConvAmount(amount);
  }

  //const toCurrencyRate = toCurrency==="inr" ? 82 : toCurrency==="eur" ? 0.94 : 1; // Example rates, replace with actual rates from currencyData
  
  const convert = () =>{
    setConvAmount(amount * currencyData[toCurrency]);
  }

  return (
    <>
      <div className='w-full h-screen bg-black justify-center items-center text-orange-400 flex flex-col'>
        <h1 className='text-3xl font-bold m-4'>Currency Converter</h1>
        <InputTag label={"From"}
            amount={amount}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={fromCurrency}
            onCurrencyChange={(fromCurrency)=>setFromCurrency(fromCurrency)}
            currencyOptions={currencyOptions}
            isdisabled={false}
        />
        <button className='bg-blue-600 text-white font-medium p-2 px-3 rounded-lg hover:bg-blue-900' onClick={swap}>SWAP</button>
        <InputTag label={"To"}
          amount={convAmount}
          onAmountChange={(convAmount)=>setConvAmount(convAmount)}
          selectedCurrency={toCurrency}
          onCurrencyChange={(toCurrency)=>setToCurrency(toCurrency)}
          currencyOptions={currencyOptions}
          isdisabled={true}
        />
        <button className='bg-orange-400 text-black p-2 rounded-lg font-medium hover:bg-amber-600 w-83' onClick={convert}>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}  </button>
      </div>
    </>
      
  )
}

export default App
