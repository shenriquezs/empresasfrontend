import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmpresa from "./empresas/AddEmpresa";
import EditEmpresa from "./empresas/EditEmpresa";
import ViewEmpresa from "./empresas/ViewEmpresa";
import AddTrabajador from "./trabajadores/AddTrabajador";
import EditTrabajador from "./trabajadores/EditTrabajador";
import ViewTrabajador from "./trabajadores/ViewTrabajador";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addempresa" element={<AddEmpresa />} />
          <Route exact path="/editempresa/:id" element={<EditEmpresa />} />
          <Route exact path="/viewempresa/:id" element={<ViewEmpresa />} />
          <Route exact path="/addtrabajador" element={<AddTrabajador />} />
         {/* <Route exact path="/eddittrabajador/:id" element={<EditTrabajador />} />
          <Route exact path="/viewtrabajador/:id" element={<ViewTrabajador />} /> */}
   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
