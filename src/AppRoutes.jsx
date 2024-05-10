
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import App from './App';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
