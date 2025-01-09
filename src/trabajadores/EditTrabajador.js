import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTrabajador() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [trabajador, setTrabajador] = useState({
    rut: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    direccion: "",
    empresa: "",
  });

  const { rut, nombre, apellidoPaterno, apellidoMaterno, direccion, empresa } = trabajador;

  const onInputChange = (e) => {
    setTrabajador({ ...trabajador, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTrabajador();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/trabajador/${id}`, trabajador);
    navigate("/");
  };

  const loadTrabajador = async () => {
    const result = await axios.get(`http://localhost:8080/trabajador/${id}`);
    setTrabajador(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Trabajador</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Rut" className="form-label">
                Rut
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese RUt"
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
                placeholder="Ingrese Razón SOcial"
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
                placeholder="Ingrese ApellidoPaterno"
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
                placeholder="Ingrese ApellidoMaterno"
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
            <div className="mb-3">
              <label htmlFor="Empresa" className="form-label">
              Empresa
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Empresa"
                name="empresa"
                value={empresa}
                onChange={(e) => onInputChange(e)}
              />
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
