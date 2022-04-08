import "./App.css";
import { Route, Routes } from 'react-router-dom';
// components
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import MobileVerificationComponent from "./components/MobileVerificationComponent";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LoginComponent />} />
      <Route path={'/register'} element={<RegisterComponent />} />
      <Route path={'/verify-mob'} element={<MobileVerificationComponent />} />
    </Routes>
  );
}

export default App;
