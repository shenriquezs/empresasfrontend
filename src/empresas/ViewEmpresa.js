import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmpresa() {
  const [empresa, setEmpresa] = useState({
    rut: "",
    razonSocial: "",
    fechaInsercion: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadEmpresa();
  }, []);

  const loadEmpresa = async () => {
    const result = await axios.get(`http://localhost:8080/empresa/${id}`);
    setEmpresa(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Empresa</h2>

          <div className="card">
            <div className="card-header">
              id Empresa : {empresa.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Rut:</b>
                  {empresa.rut}
                </li>
                <li className="list-group-item">
                  <b>Razón Social:</b>
                  {empresa.razonSocial}
                </li>
                <li className="list-group-item">
                  <b>Fecha Inserción:</b>
                  {empresa.fechaInsercion}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
