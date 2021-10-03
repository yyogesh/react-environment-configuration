import './App.css';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_API_ENDPOINT}
    </div>
  );
}

export default App;
