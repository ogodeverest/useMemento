import reactLogo from "./assets/react.svg";
import "./App.css";
import useMemento from "./hooks/useMemento";

function App() {
  const [count, set, undo] = useMemento(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Vite</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <button onClick={() => set(count + 1)}>Add</button>
        <button onClick={() => undo()}>Undo</button>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
