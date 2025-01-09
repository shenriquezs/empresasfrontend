import axios from "axios";
import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function AddTrabajador() {
  let navigate = useNavigate();

  const [trabajador, setTrabajador] = useState({
    rut: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno:"",
    direccion:"",
    empresa:null,
  });

  const { rut, nombre, apellidoPaterno , apellidoMaterno, direccion, empresa} = trabajador;

  const onInputChange = (e) => {
    setTrabajador({ ...trabajador, [e.target.name]: e.target.value });
  };

    useEffect(() => {
      loadEmpresas();
    }, []);

  const [empresas, setEmpresas] = useState([]);

  const onEmpresaChange = (e) => {
    const empresaSeleccionada = empresas.find(
      (empresa) => empresa.id.toString() === e.target.value
    );
    setTrabajador({ ...trabajador, empresa: empresaSeleccionada });
  };


  const loadEmpresas = async () => {
    const result = await axios.get("http://localhost:8080/empresas");
    setEmpresas(result.data);
  };
  console.log("empresas", empresas);

  const onSubmit = async (e) => {
    e.preventDefault(); console.log("trabajador",trabajador);
    await axios.post("http://localhost:8080/trabajador", trabajador);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Agregar Trabajador</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Rut" className="form-label">
              Rut
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Rut"
                name="rut"
                value={rut}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Nombre" className="form-label">
                Nombre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ApellidoPaterno" className="form-label">
              Apellido Paterno
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Apellido Paterno"
                name="apellidoPaterno"
                value={apellidoPaterno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ApellidoMaterno" className="form-label">
              Apellido Materno
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Apellido Materno"
                name="apellidoMaterno"
                value={apellidoMaterno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Direccion" className="form-label">
              Dirección
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Dirección"
                name="direccion"
                value={direccion}
                onChange={(e) => onInputChange(e)}
              />
            </div>

           {/*  <div className="mb-3">  
              <label htmlFor="Empresa" className="form-label" onChange={(e) => onInputChange(e)}>
              Selecciona una Empresa
              </label>
              <select name="empresa" value={empresa}>
                {empresas.map((empresa) => (
                    <option key={empresa.id} value={empresa.id}>
                        {empresa.razonSocial} 
                    </option>
                ))}
            </select>
            </div> */}
            <div className="mb-3">
              <label htmlFor="Empresa" className="form-label">
                Selecciona una Empresa
              </label>
              <select
                name="empresa"
                className="form-select"
                onChange={(e) => onEmpresaChange(e)}
              >
                <option value="">Selecciona una empresa</option>
                {empresas.map((empresa) => (
                  <option key={empresa.id} value={empresa.id}>
                    {empresa.razonSocial}
                  </option>
                ))}
              </select>
            </div>
            

            

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
