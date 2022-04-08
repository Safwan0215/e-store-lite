import "./App.css";
import { Route, Routes } from 'react-router-dom';
// components
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LoginComponent />} />
      <Route path={'/register'} element={<RegisterComponent />} />
    </Routes>
  );
}

export default App;
