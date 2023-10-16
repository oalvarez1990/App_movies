import { axiosConfiguration } from "../configuration/axiosConfiguration";

// obtener todos los directores
const obtenerDirectores = () => {
  return axiosConfiguration.get("director/?estado=true", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// crear un director
const crearDirector = (data) => {
  return axiosConfiguration.post("director", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// actualizar director
const editarDirector = (tipoId, data) => {
  return axiosConfiguration.put("director/" + tipoId, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// borrar director
const borrarDirector = (tipoId, data) => {
  return axiosConfiguration.delete(
    "director/" + tipoId,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
// obtener director por su ID
const obtenerDirectorPorID = (tipoId) => {
  return axiosConfiguration.get("director/" + tipoId, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default {
  obtenerDirectores,
  crearDirector,
  editarDirector,
  borrarDirector,
  obtenerDirectorPorID,
};
