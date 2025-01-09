import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [empresas, setEmpresas] = useState([]);

  const [trabajadores, setTrabajadores] = useState([]);

  const { id } = useParams();
  const { idt } = useParams();

  useEffect(() => {
    loadEmpresas();
    loadTrabajadores();
  }, []);

  const loadEmpresas = async () => {
    const result = await axios.get("http://localhost:8080/empresas");
    console.log("empresas: ",result);
    setEmpresas(result.data);
  };

  const deleteEmpresa = async (id) => {
    await axios.delete(`http://localhost:8080/empresa/${id}`);
    loadEmpresas();
  };

  const loadTrabajadores = async () => {
    const resulttra = await axios.get("http://localhost:8080/trabajadores");
    console.log("trabajadores: ",resulttra);
    setTrabajadores(resulttra.data);
  };

  const deleteTrabajador = async (id) => {
    await axios.delete(`http://localhost:8080/trabajador/${id}`);
    loadTrabajadores();
  };

  return (
    <div className="container">
      <div className="py-4"> <h1>Empresas</h1>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Rut</th>
              <th scope="col">Razón Social</th>
              <th scope="col">Fecha Inserción</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{empresa.rut}</td>
                <td>{empresa.razonSocial}</td>
                <td>{empresa.fechaInsercion}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewempresa/${empresa.id}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editempresa/${empresa.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmpresa(empresa.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      <div className="py-4"> <h1>Trabajadores</h1>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Rut</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido Paterno</th>
              <th scope="col">Apellido Materno</th>
              <th scope="col">Direccion</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {trabajadores.map((trabajador, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{trabajador.rut}</td>
                <td>{trabajador.nombre}</td>
                <td>{trabajador.apellidoPaterno}</td>
                <td>{trabajador.apellidoMaterno}</td>
                <td>{trabajador.direccion}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewtrabajador/${trabajador.id}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edittrabajador/${trabajador.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteTrabajador(trabajador.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
