
import './App.css';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState('')
  const [age, setAge] = useState(0)


  function calculate() {
    const upper = (220 - age) * 0.85;
    const lower = (220 - age) * 0.65;
    setResult(lower + "-" + upper);

  }
  return (

    <div id="content">
      <h2>Heart rate limits calculator </h2>
      <form>
        <div>
          <label>Age</label><p></p>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits</label><p></p>
        </div>
        <div id="box">
          <output>{result}</output>
        </div>
        <button type="button" class="btn btn-outline-dark" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}
export default App;
