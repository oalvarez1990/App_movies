import React from "react";

export default function Director({
  directores = [],
  borrarDirectorPorId,
  editarDirector,
}) {
  const borrarPorId = (e) => {
    e.preventDefault();
    borrarDirectorPorId(e);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Estado</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {directores.map((director, index) => {
          const { nombre, estado } = director;
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{nombre}</td>
              <td>{estado ? "Activo" : "Inactivo"}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => editarDirector(director._id)}
                >
                  Editar
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  id={director._id}
                  onClick={borrarPorId}
                >
                  Borrar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
