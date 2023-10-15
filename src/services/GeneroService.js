import {axiosConfiguration} from '../configuration/axiosConfiguration'

// obtener todos los generos
const obtenerGeneros = () => {
    return axiosConfiguration.get('genero/?estado=true', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// crear un genero
const crearGenero = (data) => {
    return axiosConfiguration.post('genero', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// actualizar genero
const editarGenero = (tipoId, data) => {
    return axiosConfiguration.put('genero/'+tipoId, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// borrar genero
const borrarGenero = (tipoId, data) => {
    return axiosConfiguration.delete('genero/'+tipoId, {}, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// obtener genero por su ID
const obtenerGeneroPorID = (tipoId) => {
    return axiosConfiguration.get('genero/'+tipoId, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export {
    obtenerGeneros,
    crearGenero,
    editarGenero,
    borrarGenero,
    obtenerGeneroPorID
}