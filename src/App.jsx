
import './App.css';
import PersonCardComponent from "./components/PersonCardComponent";

function App() {
  return (
    <div className="App">

      {/* Portal to target the personCardComponent into app.jsx ..... {} curly brackets are the wrong way to use it..... us </> instead*/}
      <PersonCardComponent lastname={"Doe,"} firstname={" Jane"} age={45} hairColor={"Black"} />   <br />
      <PersonCardComponent lastname={"Smith,"} firstname={"John"} age={88} hairColor={"Brown"} />   <br />
      <PersonCardComponent lastname={"Fillmore,"} firstname={" Millard"} age={50} hairColor={"Brown"} />   <br />
      <PersonCardComponent lastname={"Smith,"} firstname={" Mara"} age={62} hairColor={"Brown"} />   <br />
    </div>
  );
}

export default App;
