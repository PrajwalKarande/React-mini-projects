import { useEffect, useState } from "react";

function useCurrencyConverter(currency){
    const[convertedAmt,setConvertedAmt] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res=>res.json())
        .then(res=>setConvertedAmt(res[currency]))
        .then(res=>console.log(res))
    },[currency])
    
    return convertedAmt;
}

export default useCurrencyConverter;