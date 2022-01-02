import './App.css';
import Home from './components/home/Home';
import { PaginationProvider } from './context/PaginationContext';


function App() {
  return (
    <PaginationProvider>
      <Home />
    </PaginationProvider>
  );
}

export default App;
