import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import ForgetPass from "./Pages/ForgetPass";
import Otp from "./Pages/Otp";
import Helpcenter from "./Pages/Helpcenter";
import TodosList from "./Pages/Todolist";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/home" element={<Home />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/helpcenter" element={<Helpcenter />} />
          <Route path="/todolist" element={<TodosList />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
