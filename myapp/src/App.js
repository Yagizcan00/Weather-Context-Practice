import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Main from './components/Main';

function App() {

  return (
    <div className='App'>
      <ThemeProvider>
        <UserProvider>
          <Main />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
