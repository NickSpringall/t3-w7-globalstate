import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext, { defaultConectionData } from './context/ConnectionContext';

function App() {


  return (
    <div className="App">

      <ConnectionContext.Provider value={defaultConectionData}>

        <ApiTester />

      </ConnectionContext.Provider>


    </div>
  );
}

export default App;
