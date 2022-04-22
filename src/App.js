import "./App.css";
import { Route, Routes } from 'react-router-dom';
// components
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import MobileVerificationComponent from "./components/MobileVerificationComponent";
import SetPasswordComponent from "./components/SetPasswordComponent";
import ViewProductComponent from "./components/ViewProductComponent";
import AddProductComponent from "./components/AddProductsComponent";
import DashboardComponent from "./components/DashbordComponent";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LoginComponent />} />s
      <Route path={'/register'} element={<RegisterComponent />} />
      <Route path={'/verify-mob'} element={<MobileVerificationComponent />} />
      <Route path={'/password'} element={<SetPasswordComponent />} />
      <Route path={'/products'} element={<ViewProductComponent />} />
      <Route path={'/add'} element={<AddProductComponent /> } />
      <Route path={'/dashboard'} element={<DashboardComponent />} />
    </Routes>
  );
}

export default App;
