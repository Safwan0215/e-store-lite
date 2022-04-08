import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
