import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { ProtectedComponent } from "./components/ProtectedComponent";
import { Customers } from "./pages/Customers";
import { Layout } from "./pages/Layout";
import "./App.css";
import { Books } from "./pages/Books";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Users } from "./pages/Users";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<ProtectedComponent isLogin={true} />}>
            <Route path="/" element={<Books />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
