// React
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// CSS
import './App.css';

// pages
import Dashboard from './pages/Dashboard/Dashboard.page';

// components
import Header from './components/Header/Header.component';
import Register from './components/Register/Register.component';
import Login from './components/Login/Login.component';

// util
import { useFetch } from './utils/requests';

function App() {
  const data  = useFetch('employers', true);

  return (
    <div className='App'>  
      <Header user={data}/>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
