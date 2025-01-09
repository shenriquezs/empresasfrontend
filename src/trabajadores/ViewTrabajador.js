import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewTrabajador() {
  const [trabajador, setTrabajador] = useState({
    rut: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno:"",
    direccion:"",
    empresa:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadTrabajador();
  }, []);

  const loadTrabajador = async () => {
    const result = await axios.get(`http://localhost:8080/trabajador/${id}`);
    console.log(result);
    setTrabajador(result.data);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Trabajador</h2>

          <div className="card">
            <div className="card-header">
              id Trabajador : {trabajador.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Rut:</b>
                  {trabajador.rut}
                </li>
                <li className="list-group-item">
                  <b>Nombre:</b>
                  {trabajador.nombre}
                </li>
                <li className="list-group-item">
                  <b>Apellido Paterno:</b>
                  {trabajador.apellidoPaterno}
                </li>
                <li className="list-group-item">
                  <b>Apellido Materno:</b>
                  {trabajador.apellidoMaterno}
                </li>
                <li className="list-group-item">
                  <b>Dirección:</b>
                  {trabajador.direccion}
                </li>
                <li className="list-group-item">
                  <b>Empresa:</b>
                  {trabajador.empresa.razonSocial}
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
