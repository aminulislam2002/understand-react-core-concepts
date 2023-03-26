import "./App.css";
import Device from "./components/Device/Device";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <div className="App">
      <Device name="Iphone" model="13 Pro Max" price="1,20,000 taka only."></Device>
      <Device name="Vivo" model="Y33s" price="20,000 taka only."></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
