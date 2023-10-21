import { useState } from "react";
function App() {
const [count,setCount]=useState(0);
return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}> Add</button>
    <button onClick={()=>setCount(count-1)}> Sub</button>
    <button onClick={()=>setCount(0)}> Reset</button>
    </>
  );
}

export default App;
