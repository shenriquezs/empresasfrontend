import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmpresa() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [empresa, setEmpresa] = useState({
    rut: "",
    razonSocial: "",
    fechaInsercion: "",
  });

  const { rut, razonSocial, fechaInsercion } = empresa;

  const onInputChange = (e) => {
    setEmpresa({ ...empresa, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmpresa();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/empresa/${id}`, empresa);
    navigate("/");
  };

  const loadEmpresa = async () => {
    const result = await axios.get(`http://localhost:8080/empresa/${id}`);
    setEmpresa(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Empresa</h2>

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
              <label htmlFor="RazonSocial" className="form-label">
                Razón Social
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Razón SOcial"
                name="razonSocial"
                value={razonSocial}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="FechaInsercion" className="form-label">
                Fecha Inserción
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Fecha Inserción"
                name="fechaInsercion"
                value={fechaInsercion}
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
