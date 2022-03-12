import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>{'- '}
        <Link to='/monsters'>Monsters</Link>{'- '}
        <Link to='/about'>About</Link>{'- '}
        <Link to='/jobs'>Jobs for Monsters</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
