import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ProcraStation</h1>
        <p>
          Your station, where you come to procrastinate. ;)
        </p>
        <a
          className="App-link"
          href="https://osamakashif.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Osama's website ;)
        </a>
      </header>
    </div>
  );
}

export default App;
