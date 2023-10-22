import { useState } from "react";
import "./StudentList.css";
export default function StudentList() {
    const [student, setStudent] = useState([
        { id: 1, name: "Phanna" },
        { id: 2, name: "JoJo" },
        { id: 3, name: "Putina" },
    ])
    const [show, setShow] = useState(true);
    function deleteStudent(id) {
        setStudent(student.filter(item => item.id !== id))
    }
    const myStyle={
        color:"purple",
        fontSize:"20px",
        padding:"20px"
    }
    const buttChange={
        background:show?"blue":"green",
    }
    return (
        <>
            <ul>
                <div className="header">
                    <h1 style={myStyle}>ចំនួនសិស្ស : ({student.length})</h1>
                    <button onClick={() => setShow(!show)} style={buttChange}>{show?"លាក់":"បើក"}</button>
                </div>
                {show && student.map((item) => (
                    <li key={item.id}>
                        <h1>{item.id} - {item.name}</h1>
                        <button onClick={() => deleteStudent(item.id)} className="delete">Delelte</button>
                    </li>
                ))}
            </ul>
        </>
    );
}