import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Chandana"
        School="Reva University"
        total={800}
        goal={900}
      />
    </div>
  );
}

export default App;