import './App.css';
import Main from './components/Main';
import { WeatherProvider } from './context/WeatherContext';

function App() {

  return (
    <div className='App'>
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    </div>
  );
}

export default App;
