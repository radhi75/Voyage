import "./App.css";
import Destination from "./Components/Destination";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Destination />
    </div>
  );
}

export default App;
