import { useCallback, useState, useRef, useEffect} from 'react'
import './App.css'

function App() {
  const[length, setLength] = useState(8);
  const[includeNum,setincludeNum]=useState(false);
  const[includeChar,setIncludeChar] = useState(false);
  const[password,setPassword] = useState();

  //used to memoize(cache) a function so that it does not get recreated on every render
  const generatePassword = useCallback(()=>{
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeChar) chars+="!@#$%^&*()_+=~`{}[]?/><.,';:|";
    if(includeNum) chars+="0123456789";
    let password ="";
    for(let i=0;i<length;i++){
      const idx = Math.floor(Math.random()*chars.length+1);
      password+=chars.charAt(idx);
    }
    setPassword(password);
  },[length,includeChar,includeNum]);

  //copy to clipboard function
  const copyToClipboard = useCallback(()=>{
    //alert("Copied to clipboard");
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  // used to connect with external world(eg. API calls, DOM manipulation)here we are calling generatePassword function
  useEffect(()=>{
    generatePassword();
  },[generatePassword,length,includeChar,includeNum]);

  // used to access (refer) DOM elements directly (here input field)
  const passwordRef = useRef(null);

  
  return (
    <>
      <div className='w-full h-screen justify-center items-center bg-black text-orange-400'>
        <h1 className='text-3xl text-center p-4'>Password Generator</h1>
        <div className='bg-gray-800 max-w-md m-auto p-6 rounded-lg justify-center items-center'>
          <div>
            <input type='text' className='outline-none w-85 p-2 bg-white rounded-l-xl' value={password} readOnly placeholder='Password' ref={passwordRef}/>
            <button className='bg-blue-600 text-amber-50 p-2 rounded-r-xl hover:bg-blue-900' onClick={copyToClipboard}>Copy</button>
          </div>
          <div className='flex p-3 gap-3'>
            <input type='range' min={8} max={20} value={length} onChange={(e)=>setLength(e.target.value)}/>
            <label className='text-xl'>Length:{length}</label>
          </div>
          <div className='flex gap-3 p-3'>
            <input type='checkbox' id='includeNum' checked={includeNum} onChange={()=>setincludeNum((isallowed)=>!isallowed)}/>
            <label className='text-xl'>Numbers</label>
          </div>
          <div className='flex gap-3 p-3'>
            <input type='checkbox' id='includeNum' checked={includeChar} onChange={()=>setIncludeChar((isallowed)=>!isallowed)}/>
            <label className='text-xl'>Special Characters</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
