import { useState } from 'react';
import './App.css'

function App() {

  const [color, setColor] = useState('whilte');
  return (
    <>
      <div className='w-full h-screen duration-200 p-2' style={{backgroundColor: color}}>
        <div className='flex flex-wrap justify-center gap-3 bg-blue-200 p-2 rounded-full w-fit m-auto'>
          <button 
          className='bg-red-600 rounded-full px-4 py-2 text-white hover:bg-red-900'
          onClick={()=>setColor('red')}
          >Red</button>
          <button 
          className='bg-gray-700 rounded-full px-4 py-2 text-white hover:bg-black'
          onClick={()=>setColor('black')}
          >Black</button>
          <button 
          className='bg-green-600 rounded-full px-4 py-2 text-white hover:bg-green-900'
          onClick={()=>setColor('green')}
          >Green</button>
          <button 
          className='bg-yellow-300 rounded-full px-4 py-2 text-white hover:bg-yellow-600'
          onClick={()=>setColor('yellow')}
          >Yellow</button>
          <button 
          className='bg-blue-600 rounded-full px-4 py-2 text-white hover:bg-blue-900'
          onClick={()=>setColor('blue')}
          >blue</button>
          <button 
          className='bg-teal-300 rounded-full px-4 py-2 text-white hover:bg-teal-600'
          onClick={()=>setColor('teal')}
          >Teal</button>
          <button 
          className='bg-orange-400 rounded-full px-4 py-2 text-white hover:bg-orange-500'
          onClick={()=>setColor('orange')}
          >Orange</button>
        </div>
      </div>
    </>
  )
}

export default App
