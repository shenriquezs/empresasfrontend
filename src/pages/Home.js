import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [empresas, setEmpresas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadEmpresas();
  }, []);

  const loadEmpresas = async () => {
    const result = await axios.get("http://localhost:8080/empresas");
    setEmpresas(result.data);
  };

  const deleteEmpresa = async (id) => {
    await axios.delete(`http://localhost:8080/empresa/${id}`);
    loadEmpresas();
  };

  return (
    <div className="container">
      <div className="py-4">
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
    </div>
  );
}
