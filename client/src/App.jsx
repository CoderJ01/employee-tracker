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
import AccessDenied from './components/AccessDenied/AccessDenied.component';

// util
import { useFetch } from './utils/requests';

function App() {
  const data  = useFetch('employers', true);

  return (
    <div className='App'>  
      <Header user={data}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={data.length === 0 ? <AccessDenied/> : <Dashboard user={data}/>}/>
          <Route path='/register' element={data.length === 0 ? <Register/> : <Navigate to='/'/>}/>
          <Route path='/login' element={data.length === 0 ? <Login/> : <Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
