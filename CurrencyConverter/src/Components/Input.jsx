function InputTag({label,
    amount,
    onAmountChange, //to update amount when entered
    onCurrencyChange,
    currencyOptions = [], // holds currency options
    selectedCurrency = "usd",// holds selected currency
    isdisabled = false
}){
    return(
        <>
            <div className='w-fit h-fit bg-gray-600 rounded-2xl m-3 shadow-2xl flex justify-center items-center text-orange-400'>
                <div className='flex flex-col justify-center m-3'>
                    <label className='m-2'>{label}</label>
                    <input 
                        className='outline-none p-3 bg-orange-400 text-black rounded-2xl'    type="number" 
                        placeholder='Amount' 
                        value={amount} 
                        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                        disabled={isdisabled}
                    />
                </div>
                <div className='flex flex-col justify-center m-3'>
                    <label className='m-2'>Currency</label>
                    <select className='m-2 outline-none text-black'
                        value={selectedCurrency}
                        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    >
                        {currencyOptions.map((currency)=>{(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>//key is used to uniquely identify each option and ensure efficient rendering
                        )})}
                        {/* <option value="usd">USD</option>
                        <option value="inr">INR</option>
                        <option value="eur">EUR</option> */} // Example options, replace with actual currency codes
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputTag;