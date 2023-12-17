import './App.css';
import InitialPage from './pages/InitialPage/InitialPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<InitialPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
