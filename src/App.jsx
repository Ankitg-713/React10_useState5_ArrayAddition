import React from "react";
import { useState } from "react";

//add 7 on the arrya using useState
function App() {
  

  const [val, setVal] = useState([1,2,3,4,5,6]);

  return (
    <div className='p-5'>
      {val.map(item => <h1 key={item}>{item}</h1>)}
      <button onClick={() => setVal([...val, 7])} className="px-2 py-1 bg-blue-500 text-zinc-100 rounded mt-2">Add</button>
    </div>
  );
}

export default App;
