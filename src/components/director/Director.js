import React, { useEffect, useState } from "react";
import Title from "../iu/Title";
import Modal from "./Modal";
import Table from "./Table";
import ButtonModal from "../iu/ButtonModal";
import Spinner from "../iu/Spinner";
import Swal from "sweetalert2";
import DirectorService from "../../services/DirectorService"; // Importa las funciones del servicio de Director

export default function Director() {
  const [directores, setDirectores] = useState([]);
  const [loader, setLoader] = useState(false);
  const [director, setDirector] = useState({
    nombre: "",
    estado: true,
  });

  useEffect(() => {
    listarDirectores();
  }, []);

  const listarDirectores = async () => {
    setLoader(true);
    try {
      const { data } = await DirectorService.obtenerDirectores();
      setDirectores(data);
      setLoader(false);
    } catch (e) {
      console.log(e);
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al cargar datos!",
        footer: "Intenta de nuevo!",
      });
    }
  };

  const guardar = async () => {
    setLoader(true);
    try {
      const response = await DirectorService.crearDirector(director);
      console.log(response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Guardado exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoader(false);
      clearForm();
      listarDirectores();
    } catch (e) {
      console.log(e);
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al guardar!",
        footer: "Intenta de nuevo!",
      });
    }
  };

  const eliminarDirectorPorId = async (id) => {
    setLoader(true);
    try {
      const response = await DirectorService.eliminarDirector(id);
      console.log(response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Eliminado exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoader(false);
      listarDirectores();
    } catch (e) {
      console.log(e);
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al eliminar!",
        footer: "Intenta de nuevo!",
      });
    }
  };

  const handleChange = (e) => {
    setDirector({
      ...director,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setDirector({
      nombre: "",
      estado: true,
    });
  };

  return (
    <div>
      <Title title={"Directores"} />
      {loader && <Spinner />}
      <Table
        directores={directores}
        borrarDirectorPorId={eliminarDirectorPorId}
      />
      <ButtonModal title="Nuevo Director" />
      <Modal
        director={director}
        change={handleChange}
        guardar={guardar}
        clearForm={clearForm}
      />
    </div>
  );
}
