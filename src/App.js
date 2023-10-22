import { useState } from "react";
function App() {
// បង្កើត 
const [student,setStudent]=useState([
{id:1,name:"Phanna"},
{id:2,name:"JoJo"},
{id:3,name:"Putina"},
])
const [show,setShow]=useState(true);
function deleteStudent(id){
  setStudent(student.filter(item=>item.id !==id))
}
return (
    <>
      <h1>ចំនួនសិស្ស : {student.length}</h1>
      <button onClick={()=>setShow(!show)}>togle</button>
      <ul>
        {show && student.map((item)=>(
          <li key={item.id}>
            <p>{item.id} - {item.name}</p>
            <button onClick={()=>deleteStudent(item.id)}>Delelte</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
