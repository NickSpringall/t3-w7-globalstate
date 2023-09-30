import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext, { defaultConectionData } from './context/ConnectionContext';
import UserGlobalData from './context/UserContext';

function App() {


  return (
    <div className="App">

      <UserGlobalData>
        <ConnectionContext.Provider value={defaultConectionData}>

          <ApiTester />

        </ConnectionContext.Provider>

      </UserGlobalData>
    
    </div>
  );
}

export default App;
