import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";
function App() {
return (
    <div className="Container">
      <Header/>
      <main>
        <StudentList/>
      </main>
    </div>
  );
}

export default App;
